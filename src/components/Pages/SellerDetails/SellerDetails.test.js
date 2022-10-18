import { render } from '@testing-library/react'

import SellerDetails, { StatisticSummary, SellerInsights, CallHistory } from './SellerDetails'

test('should render component', () => {
  const container = render(<SellerDetails />)

  expect(container).toMatchSnapshot()
})

test('should render StatisticSummary', () => {
  const container = render(<StatisticSummary />)

  expect(container).toMatchSnapshot()
})

test('should render SellerInsights', () => {
  const container = render(<SellerInsights />)

  expect(container).toMatchSnapshot()
})

test('should render CallHistory', () => {
  const container = render(<CallHistory />)

  expect(container).toMatchSnapshot()
})