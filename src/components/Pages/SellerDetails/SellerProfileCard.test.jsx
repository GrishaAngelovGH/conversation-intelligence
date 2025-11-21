import { render, screen } from '@testing-library/react'

import SellerProfileCard from './SellerProfileCard'

describe('SellerProfileCard', () => {
  test('renders the seller profile card with all details', () => {
    render(<SellerProfileCard />)

    expect(screen.getByText('James Smith')).toBeInTheDocument()
    expect(screen.getByText('Senior Account Executive')).toBeInTheDocument()

    expect(screen.getByText('Team: Enterprise Sales')).toBeInTheDocument()
    expect(screen.getByText('james.smith@example.com')).toBeInTheDocument()

    expect(screen.getByText('Performance Score')).toBeInTheDocument()
    expect(screen.getByText('85%')).toBeInTheDocument()
  })
})
