import { render } from '@testing-library/react'

import SellerDetails, { StatisticSummary, SellerInsights, CallHistory } from './SellerDetails'

test('should render SellerDetails component', () => {
  const view = render(<SellerDetails />)

  expect(view).toMatchSnapshot()
})

test('should render StatisticSummary component', () => {
  const view = render(<StatisticSummary />)

  expect(view).toMatchSnapshot()
})

test('should render SellerInsights component', () => {
  const view = render(<SellerInsights />)

  expect(view).toMatchSnapshot()
})

test('should render CallHistory component', () => {
  const view = render(<CallHistory />)

  expect(view).toMatchSnapshot()
})