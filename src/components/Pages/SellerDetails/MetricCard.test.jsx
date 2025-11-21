import { render, screen } from '@testing-library/react'

import MetricCard from './MetricCard'

describe('MetricCard', () => {
  test('renders the metric card with title, value, and icon', () => {
    const mockProps = {
      title: 'Win Rate',
      value: '72%',
      icon: 'bi-trophy',
    }

    render(<MetricCard {...mockProps} />)

    expect(screen.getByText('Win Rate')).toBeInTheDocument()
    expect(screen.getByText('72%')).toBeInTheDocument()
    expect(screen.getByRole('img', { hidden: true })).toHaveClass('bi-trophy')
  })
})
