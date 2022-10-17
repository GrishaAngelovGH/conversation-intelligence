import { render } from '@testing-library/react'

import StatisticCard from './StatisticCard'

test('should render component', () => {
  const container = render(
    <StatisticCard
      chart={<div>chart</div>}
      description={<div>description</div>}
    />)

  expect(container).toMatchSnapshot()
})