import { render } from '@testing-library/react'

import StatisticRow from './StatisticRow'

test('should render component', () => {
  const statisticData = [
    { type: 'Actual Rev.', value: '$300k' },
    { type: 'Open Rev.', value: '$150k' },
    { type: 'Deals-Won', value: '$280k' },
    { type: 'Win-Rate', value: '63%' },
    { type: 'Avg. Deal Size', value: '58%' }
  ]

  const container = render(<StatisticRow data={statisticData} />)

  expect(container).toMatchSnapshot()
})