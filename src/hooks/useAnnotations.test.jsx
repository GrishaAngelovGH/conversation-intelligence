import { renderHook, act } from '@testing-library/react'
import { useAnnotations } from './useAnnotations'

const mockCallWithAnnotations = {
  id: 1,
  transcript: [
    { speaker: 'Agent', text: 'Hello, this is a test line.', annotations: [{ id: 101, text: 'test line', range: { start: 15, end: 24 }, note: 'Existing annotation' }] },
    { speaker: 'Customer', text: 'I have a question about my bill.', annotations: [] },
  ],
  keywords: [{ text: 'bill', active: true }],
  comments: [],
}

describe('useAnnotations', () => {
  const mockOnUpdateCall = vi.fn()

  beforeEach(() => {
    mockOnUpdateCall.mockClear()
  })

  it('should initialize and derive transcriptLines correctly', () => {
    const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))
    expect(result.current.transcriptLines).toEqual(mockCallWithAnnotations.transcript)
  })

  it('should handle text selection', () => {
    const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))

    result.current.callDetailsRef.current = { getBoundingClientRect: () => ({ left: 0, top: 0 }) }

    act(() => {
      result.current.handleTextSelect('question', { start: 10, end: 18 }, { x: 10, y: 20, width: 50, height: 15 }, 1)
    })

    expect(result.current.selectedTextInfo).toEqual({
      text: 'question',
      range: { start: 10, end: 18 },
      position: { x: 10, y: 20, width: 50, height: 15 },
      lineIndex: 1,
    })
    expect(result.current.showNotePopup).toBe(false)
  })

  it('should show note popup when handleBubbleMenuClick is called', () => {
    const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))

    act(() => {
      result.current.handleBubbleMenuClick()
    })

    expect(result.current.showNotePopup).toBe(true)
  })

  it('should cancel note creation and reset state', () => {
    const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))

    act(() => {
      result.current.callDetailsRef.current = { getBoundingClientRect: () => ({ left: 0, top: 0 }) }
      result.current.handleTextSelect('test', { start: 0, end: 4 }, { x: 0, y: 0, width: 10, height: 10 }, 0)
      result.current.handleBubbleMenuClick()
    })

    expect(result.current.selectedTextInfo).not.toBeNull()
    expect(result.current.showNotePopup).toBe(true)

    act(() => {
      result.current.handleNoteCancel()
    })

    expect(result.current.selectedTextInfo).toBeNull()
    expect(result.current.showNotePopup).toBe(false)
  })

  it('should add a new annotation and update derived transcriptLines', () => {
    const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))

    result.current.callDetailsRef.current = { getBoundingClientRect: () => ({ left: 0, top: 0 }) }

    act(() => {
      result.current.handleTextSelect('question', { start: 10, end: 18 }, { x: 10, y: 20, width: 50, height: 15 }, 1)
    })

    act(() => {
      result.current.handleNoteConfirm('This is a new test note')
    })

    expect(mockOnUpdateCall).toHaveBeenCalledTimes(1)
    const updatedCall = mockOnUpdateCall.mock.calls[0][0]

    expect(updatedCall.transcript[1].annotations).toHaveLength(1)
    expect(updatedCall.transcript[1].annotations[0].note).toBe('This is a new test note')

    expect(result.current.transcriptLines[0].annotations).toHaveLength(1)
    expect(result.current.transcriptLines[1].annotations).toHaveLength(1)
    expect(result.current.transcriptLines[1].annotations[0].note).toBe('This is a new test note')

    expect(result.current.showNotePopup).toBe(false)
    expect(result.current.selectedTextInfo).toBe(null)
  })

  it('should clear a newly added annotation', () => {
    const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))
    let newAnnotationId

    result.current.callDetailsRef.current = { getBoundingClientRect: () => ({ left: 0, top: 0 }) }

    act(() => {
      result.current.handleTextSelect('question', { start: 10, end: 18 }, { x: 10, y: 20, width: 50, height: 15 }, 1)
    })
    act(() => {
      result.current.handleNoteConfirm('A temporary note')
    })

    newAnnotationId = result.current.transcriptLines[1].annotations[0].id

    act(() => {
      result.current.handleClearAnnotation(newAnnotationId, 1)
    })

    expect(mockOnUpdateCall).toHaveBeenCalledTimes(2)
    const finalCallState = mockOnUpdateCall.mock.calls[1][0]
    expect(finalCallState.transcript[1].annotations).toHaveLength(0)

    expect(result.current.transcriptLines[1].annotations).toHaveLength(0)
  })

  it('should reset local state when a new call is selected', () => {
    const { result, rerender } = renderHook(
      ({ call }) => useAnnotations(call, mockOnUpdateCall),
      { initialProps: { call: mockCallWithAnnotations } }
    )

    result.current.callDetailsRef.current = { getBoundingClientRect: () => ({ left: 0, top: 0 }) }
    act(() => {
      result.current.handleTextSelect('question', { start: 10, end: 18 }, { x: 10, y: 20, width: 50, height: 15 }, 1)
    })
    act(() => {
      result.current.handleNoteConfirm('A local note')
    })

    expect(result.current.transcriptLines[1].annotations).toHaveLength(1)

    const newMockCall = {
      id: 2,
      transcript: [{ speaker: 'Agent', text: 'This is a different call.', annotations: [] }],
      keywords: [],
      comments: [],
    }
    rerender({ call: newMockCall })

    expect(result.current.transcriptLines).toHaveLength(1)
    expect(result.current.transcriptLines[0].text).toBe('This is a different call.')
    expect(result.current.transcriptLines[0].annotations).toHaveLength(0)
  })

  describe('renderContent', () => {
    it('should render plain text correctly', () => {
      const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))
      const content = 'This is a plain text.'
      const elements = result.current.renderContent(content, [], [], 0)

      expect(Array.isArray(elements)).toBe(true)
      expect(elements.length).toBe(1)
      expect(elements[0].props.children).toBe(content)
    })

    it('should highlight keywords correctly', () => {
      const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))
      const content = 'This is a test keyword example.'
      const keywords = [{ text: 'keyword', active: true }]
      const elements = result.current.renderContent(content, keywords, [], 0)

      expect(elements.length).toBe(3)
      expect(elements[1].props.className).toContain('bg-yellow-200')
      expect(elements[1].props.children).toBe('keyword')
    })

    it('should render annotations correctly', () => {
      const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))
      const content = 'This is an annotated text example.'
      const annotations = [{ id: 1, text: 'annotated text', range: { start: 11, end: 25 }, note: 'Test Note' }]
      const elements = result.current.renderContent(content, [], annotations, 0)

      expect(elements.length).toBe(3)
      expect(elements[1].type).toBe('span')
      expect(elements[1].props.className).toContain('group relative')
      expect(elements[1].props.children[0].props.className).toContain('underline decoration-white bg-orange-400')
      expect(elements[1].props.children[0].props.children).toBe('annotated text')
    })

    it('should combine highlights and annotations correctly', () => {
      const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))
      const content = 'This is a keyword and an annotated text.'
      const keywords = [{ text: 'keyword', active: true }]
      const annotations = [{ id: 2, text: 'annotated text', range: { start: 25, end: 39 }, note: 'Combined Note' }]
      const elements = result.current.renderContent(content, keywords, annotations, 0)

      expect(elements.length).toBe(5)
      expect(elements[1].props.className).toContain('bg-yellow-200')
      expect(elements[1].props.children).toBe('keyword')
      expect(elements[3].type).toBe('span')
      expect(elements[3].props.children[0].props.children).toBe('annotated text')
    })
  })

  describe('getCharacterOffsetWithin', () => {
    const createMockRange = (start, end) => ({
      startContainer: {},
      endContainer: {},
      startOffset: start,
      endOffset: end,
      cloneRange: vi.fn().mockImplementation(() => {
        let currentEnd = 0
        return {
          selectNodeContents: vi.fn(),
          setEnd: vi.fn((container, offset) => {
            currentEnd = offset
          }),
          toString: vi.fn(() => 'a'.repeat(currentEnd)),
        }
      }),
    })

    it('should return correct offsets when start < end', () => {
      const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))
      const mockContainer = { textContent: 'abcdefgh' }
      const mockRange = createMockRange(2, 5)

      const offsets = result.current.getCharacterOffsetWithin(mockRange, mockContainer)
      expect(offsets).toEqual({ start: 2, end: 5 })
    })

    it('should return correct offsets and swap when start > end', () => {
      const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))
      const mockContainer = { textContent: 'abcdefgh' }
      const mockRange = createMockRange(5, 2)

      const offsets = result.current.getCharacterOffsetWithin(mockRange, mockContainer)
      expect(offsets).toEqual({ start: 2, end: 5 })
    })

    it('should return correct offsets for an empty range', () => {
      const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))
      const mockContainer = { textContent: 'abcdefgh' }
      const mockRange = createMockRange(3, 3)

      const offsets = result.current.getCharacterOffsetWithin(mockRange, mockContainer)
      expect(offsets).toEqual({ start: 3, end: 3 })
    })

    it('should handle range at the beginning of the text', () => {
      const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))
      const mockContainer = { textContent: 'abcdefgh' }
      const mockRange = createMockRange(0, 3)

      const offsets = result.current.getCharacterOffsetWithin(mockRange, mockContainer)
      expect(offsets).toEqual({ start: 0, end: 3 })
    })

    it('should handle range at the end of the text', () => {
      const { result } = renderHook(() => useAnnotations(mockCallWithAnnotations, mockOnUpdateCall))
      const mockContainer = { textContent: 'abcdefgh' }
      const mockRange = createMockRange(5, 8)

      const offsets = result.current.getCharacterOffsetWithin(mockRange, mockContainer)
      expect(offsets).toEqual({ start: 5, end: 8 })
    })
  })
})