import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  test('should toggle details panel on row click', async () => {
    render(<TeamInsight insight={mockInsight} />)
    const detailsPanel = screen.getByTestId('details-panel')

    expect(detailsPanel).toHaveClass('max-h-0')
    expect(detailsPanel).not.toHaveClass('max-h-250')

    await userEvent.click(screen.getByText(mockInsight.name))

    expect(detailsPanel).not.toHaveClass('max-h-0')
    expect(detailsPanel).toHaveClass('max-h-250')

    await userEvent.click(screen.getByText(mockInsight.name))

    expect(detailsPanel).toHaveClass('max-h-0')
    expect(detailsPanel).not.toHaveClass('max-h-250')
  })

  test('should toggle details panel on button click', async () => {
    render(<TeamInsight insight={mockInsight} />)
    const toggleButton = screen.getByRole('button', { name: 'Toggle details' })
    const detailsPanel = screen.getByTestId('details-panel')

    expect(detailsPanel).toHaveClass('max-h-0')

    await userEvent.click(toggleButton)

    expect(detailsPanel).toHaveClass('max-h-250')
  })

  test('should rotate chevron icon on toggle', async () => {
    render(<TeamInsight insight={mockInsight} />)
    const toggleButton = screen.getByRole('button', { name: 'Toggle details' })

    expect(toggleButton.style.transform).toBe('rotate(0deg)')

    await userEvent.click(toggleButton)

    expect(toggleButton.style.transform).toBe('rotate(180deg)')
  })
})