import { render, screen, fireEvent } from '@testing-library/react';
import CallList from './CallList';
import { describe, it, expect, vi } from 'vitest';

const mockCalls = [
  { id: 1, agent: 'John Doe', date: '2025-12-19', topic_summary: 'Damaged Package' },
  { id: 2, agent: 'Jane Smith', date: '2025-12-18', topic_summary: 'Subscription Cancellation' },
];

describe('CallList', () => {
  it('should render a list of calls with topic summaries', () => {
    render(<CallList calls={mockCalls} />);
    expect(screen.getByText('Call with John Doe (2025-12-19)')).toBeInTheDocument();
    expect(screen.getByText('Damaged Package')).toBeInTheDocument();
    expect(screen.getByText('Call with Jane Smith (2025-12-18)')).toBeInTheDocument();
    expect(screen.getByText('Subscription Cancellation')).toBeInTheDocument();
  });

  it('should call onSelectCall when a call is clicked', () => {
    const onSelectCall = vi.fn();
    render(<CallList calls={mockCalls} onSelectCall={onSelectCall} />);
    
    fireEvent.click(screen.getByText('Call with John Doe (2025-12-19)'));
    
    expect(onSelectCall).toHaveBeenCalledWith(mockCalls[0]);
  });
});
