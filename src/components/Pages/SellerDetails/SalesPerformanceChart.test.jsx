import { render, screen } from '@testing-library/react'

import SalesPerformanceChart from './SalesPerformanceChart'

describe('SalesPerformanceChart', () => {
  test('renders the chart component with a canvas element', () => {
    render(<SalesPerformanceChart />)

    expect(screen.getByText('Sales Performance (Last 6 Months)')).toBeInTheDocument()

    const canvas = screen.getByTestId('sales-chart-canvas')
    expect(canvas.tagName).toBe('CANVAS')
  })
})
