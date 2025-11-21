import { render, screen } from '@testing-library/react'

import SellerPerformanceMetricGrid from './SellerPerformanceMetricGrid'

describe('SellerPerformanceMetricGrid', () => {
  test('renders a grid of performance metric cards', () => {
    render(<SellerPerformanceMetricGrid />)

    expect(screen.getByText('Win Rate')).toBeInTheDocument()
    expect(screen.getByText('Avg. Deal Size')).toBeInTheDocument()
    expect(screen.getByText('Calls This Week')).toBeInTheDocument()
    expect(screen.getByText('Avg. Call Duration')).toBeInTheDocument()

    expect(screen.getByText('72%')).toBeInTheDocument()
    expect(screen.getByText('$48,300')).toBeInTheDocument()
  })
})
