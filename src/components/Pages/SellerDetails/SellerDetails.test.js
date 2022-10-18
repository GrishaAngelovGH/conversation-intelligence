import { render } from '@testing-library/react'

import SellerDetails from './SellerDetails'

test('should render component', () => {
  const container = render(<SellerDetails />)

  expect(container).toMatchSnapshot()
})