import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import TeamInsight from './TeamInsight'

describe('TeamInsight', () => {
  const mockInsight = {
    id: 1,
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?u=johndoe',
    metric: 'Talk Ratio',
    value: '65%',
    comparison: '+10% vs. Top Performers',
    details: 'Some detailed insights here.'
  }

  test('should render TeamInsight component correctly', () => {
    const { asFragment } = render(<TeamInsight insight={mockInsight} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('should toggle details panel on row click', () => {
    render(<TeamInsight insight={mockInsight} />)
    const detailsPanel = screen.getByTestId('details-panel')

    // Details panel should be closed initially
    expect(detailsPanel).toHaveClass('max-h-0')
    expect(detailsPanel).not.toHaveClass('max-h-250')

    // Click the row
    fireEvent.click(screen.getByText(mockInsight.name))

    // Details panel should now be open
    expect(detailsPanel).not.toHaveClass('max-h-0')
    expect(detailsPanel).toHaveClass('max-h-250')

    // Click the row again
    fireEvent.click(screen.getByText(mockInsight.name))

    // Details panel should be closed again
    expect(detailsPanel).toHaveClass('max-h-0')
    expect(detailsPanel).not.toHaveClass('max-h-250')
  })

  test('should toggle details panel on button click', () => {
    render(<TeamInsight insight={mockInsight} />)
    const toggleButton = screen.getByRole('button', { name: 'Toggle details' })
    const detailsPanel = screen.getByTestId('details-panel')

    // Details panel should be closed initially
    expect(detailsPanel).toHaveClass('max-h-0')

    // Click the button
    fireEvent.click(toggleButton)

    // Details panel should now be open
    expect(detailsPanel).toHaveClass('max-h-250')
  })

  test('should rotate chevron icon on toggle', () => {
    render(<TeamInsight insight={mockInsight} />)
    const toggleButton = screen.getByRole('button', { name: 'Toggle details' })

    // Chevron should not be rotated initially
    expect(toggleButton.style.transform).toBe('rotate(0deg)')

    // Click the button
    fireEvent.click(toggleButton)

    // Chevron should be rotated
    expect(toggleButton.style.transform).toBe('rotate(180deg)')
  })
})