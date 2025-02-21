import { render } from '@testing-library/react'

import StatisticCards from './StatisticCards'

test('should render StatisticCards component', () => {
  const view = render(<StatisticCards />)

  expect(view).toMatchSnapshot()
})