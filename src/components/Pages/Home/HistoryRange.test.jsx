import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import HistoryRange from './HistoryRange'

describe('HistoryRange', () => {
      const mockOnRangeChange = vi.fn()
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('should render HistoryRange component correctly', () => {
    const { asFragment } = render(
      <HistoryRange range='7d' onRangeChange={mockOnRangeChange} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('should call onRangeChange with the correct key when a button is clicked', () => {
    const { getByText } = render(
      <HistoryRange range='7d' onRangeChange={mockOnRangeChange} />
    )
    fireEvent.click(getByText('Last 30 days'))
    expect(mockOnRangeChange).toHaveBeenCalledWith('30d')
  })

  test('should apply active styles to the button corresponding to the current range', () => {
    const { getByText } = render(
      <HistoryRange range='30d' onRangeChange={mockOnRangeChange} />
    )
    const activeButton = getByText('Last 30 days')
    expect(activeButton).toHaveClass('bg-blue-700 text-white')
  })

  test('should apply correct rounding to the first and last buttons', () => {
    const { getByText } = render(
      <HistoryRange range='7d' onRangeChange={mockOnRangeChange} />
    )
    const firstButton = getByText('Last 7 days')
    const lastButton = getByText('Last 90 days')
    const middleButton = getByText('Last 30 days')

    expect(firstButton).toHaveClass('rounded-l-md')
    expect(lastButton).toHaveClass('rounded-r-md')
    expect(middleButton).not.toHaveClass('rounded-l-md')
    expect(middleButton).not.toHaveClass('rounded-r-md')
  })
})