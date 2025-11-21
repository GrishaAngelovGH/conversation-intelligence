import { render, screen } from '@testing-library/react'

import SellerDetails from './SellerDetails'

test('should render SellerDetails component with its child components', () => {
  const { asFragment } = render(<SellerDetails />)

  expect(screen.getByText('James Smith')).toBeInTheDocument()
  expect(screen.getByText('Win Rate')).toBeInTheDocument()
  expect(screen.getByText('Sales Performance (Last 6 Months)')).toBeInTheDocument()
  expect(screen.getByText('Call History')).toBeInTheDocument()

  expect(asFragment()).toMatchSnapshot()
})