import { renderHook, act } from '@testing-library/react';
import { useMagnifyingGlass } from './useMagnifyingGlass';
import { vi } from 'vitest';
import { useRef } from 'react';

describe('useMagnifyingGlass', () => {
  it('should return initial values', () => {
    const { result } = renderHook(() => {
        const ref = useRef(document.createElement('div'));
        return useMagnifyingGlass(ref);
    });

    expect(result.current.magnifiedText).toBe('');
    expect(result.current.magnifierPosition).toEqual({ x: 0, y: 0 });
  });

  it('should update magnifiedText and magnifierPosition on selection', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const { result } = renderHook(() => {
        const ref = useRef(container);
        return useMagnifyingGlass(ref);
    });

    const mockSelection = {
      toString: () => 'Hello',
      getRangeAt: () => ({
        getBoundingClientRect: () => ({ x: 10, y: 20, width: 50, height: 15, left: 10, top: 20, right: 60, bottom: 35 }),
      }),
      anchorNode: container,
    };
    vi.spyOn(window, 'getSelection').mockReturnValue(mockSelection);
    const raf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());

    act(() => {
      result.current.handleMouseDown();
    });

    act(() => {
      const mouseMoveEvent = new MouseEvent('mousemove', { bubbles: true });
      document.dispatchEvent(mouseMoveEvent);
    });

    expect(result.current.magnifiedText).toBe('Hello');
    expect(result.current.magnifierPosition).toEqual({ x: 35, y: 10 }); // x: 10 + 50 / 2 = 35, y: 20 - 10 = 10

    act(() => {
        const mouseUpEvent = new MouseEvent('mouseup', { bubbles: true });
        document.dispatchEvent(mouseUpEvent);
    });

    // The text and position should remain after mouse up
    expect(result.current.magnifiedText).toBe('Hello');
    expect(result.current.magnifierPosition).toEqual({ x: 35, y: 10 });

    raf.mockRestore();
    document.body.removeChild(container);
  });

  it('should clear magnifiedText on mousedown', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const { result } = renderHook(() => {
        const ref = useRef(container);
        return useMagnifyingGlass(ref);
    });

    // First, set some text
    const mockSelection = {
        toString: () => 'Hello',
        getRangeAt: () => ({
            getBoundingClientRect: () => ({ x: 10, y: 20, width: 50, height: 15, left: 10, top: 20, right: 60, bottom: 35 }),
        }),
        anchorNode: container,
    };
    vi.spyOn(window, 'getSelection').mockReturnValue(mockSelection);
    const raf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());

    act(() => {
        result.current.handleMouseDown();
    });
    
    act(() => {
        const mouseMoveEvent = new MouseEvent('mousemove', { bubbles: true });
        document.dispatchEvent(mouseMoveEvent);
    });
    
    expect(result.current.magnifiedText).toBe('Hello');

    // Now, trigger a new mousedown, which should clear the text
    act(() => {
        result.current.handleMouseDown();
    });

    expect(result.current.magnifiedText).toBe('');
    
    raf.mockRestore();
    document.body.removeChild(container);
  });
});
