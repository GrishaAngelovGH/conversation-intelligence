import { render } from '@testing-library/react'

import StatisticCards from './StatisticCards'

test('should render component', () => {
  const container = render(<StatisticCards />)

  expect(container).toMatchSnapshot()
})