import { render, screen, fireEvent } from '@testing-library/react'

import CallList from './CallList'

const mockCalls = [
  { id: 1, agent: 'John Doe', date: '2025-11-19' },
  { id: 2, agent: 'Jane Smith', date: '2025-11-18' },
]

describe('CallList', () => {
  it('should render a list of calls', () => {
    render(<CallList calls={mockCalls} />)
    expect(screen.getByText('Call with John Doe (2025-11-19)')).toBeInTheDocument()
    expect(screen.getByText('Call with Jane Smith (2025-11-18)')).toBeInTheDocument()
  })

  it('should call onSelectCall when a call is clicked', () => {
    const onSelectCall = vi.fn()
    render(<CallList calls={mockCalls} onSelectCall={onSelectCall} />)

    fireEvent.click(screen.getByText('Call with John Doe (2025-11-19)'))

    expect(onSelectCall).toHaveBeenCalledWith(mockCalls[0])
  })
})
