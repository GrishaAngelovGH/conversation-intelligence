import { render, screen } from '@testing-library/react'

import CallHistoryTimeline from './CallHistoryTimeline'

describe('CallHistoryTimeline', () => {
  test('renders the call history timeline with multiple items', () => {
    render(<CallHistoryTimeline />)

    expect(screen.getByText('Closing call with Acme Corp')).toBeInTheDocument()
    expect(screen.getByText('Initial discussion with Tech Solutions')).toBeInTheDocument()
    expect(screen.getByText('Product Demo for Retail Inc.')).toBeInTheDocument()

    expect(screen.getByText('6 hours ago - 31m 30s')).toBeInTheDocument()
  })
})
