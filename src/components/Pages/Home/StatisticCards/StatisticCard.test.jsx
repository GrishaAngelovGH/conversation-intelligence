import { render } from '@testing-library/react'

import StatisticCard from './StatisticCard'

test('should render StatisticCard component', () => {
  const view = render(
    <StatisticCard
      chart={<div>chart</div>}
      description={<div>description</div>}
    />
  )

  expect(view).toMatchSnapshot()
})