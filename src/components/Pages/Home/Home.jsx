import { useState } from 'react'

import UserGreet from './UserGreet'
import HistoryRange from './HistoryRange'
import StatisticRow from './StatisticRow'
import StatisticCards from './StatisticCards'
import TeamInsights from './TeamInsights'

const Home = () => {
  const [range, setRange] = useState('7d')

  const statisticsByRange = {
    '7d': [
      { type: 'Actual Rev.', value: '$300k' },
      { type: 'Open Rev.', value: '$150k' },
      { type: 'Deals-Won', value: '$280k' },
      { type: 'Win-Rate', value: '63%' },
      { type: 'Avg. Deal Size', value: '58%' }
    ],
    '30d': [
      { type: 'Actual Rev.', value: '$1.2M' },
      { type: 'Open Rev.', value: '$800k' },
      { type: 'Deals-Won', value: '$1.1M' },
      { type: 'Win-Rate', value: '75%' },
      { type: 'Avg. Deal Size', value: '68%' }
    ],
    '90d': [
      { type: 'Actual Rev.', value: '$4.5M' },
      { type: 'Open Rev.', value: '$2.1M' },
      { type: 'Deals-Won', value: '$4.2M' },
      { type: 'Win-Rate', value: '82%' },
      { type: 'Avg. Deal Size', value: '71%' }
    ]
  }

  return (
    <div className="flex justify-center text-center">
      <div className="md:w-11/12">
        <div className="flex p-3 items-center">
          <div className="md:w-6/12">
            <UserGreet username="James Smith" />
          </div>
          <div className="md:w-6/12">
            <HistoryRange range={range} onRangeChange={setRange} />
          </div>
        </div>

        <StatisticRow data={statisticsByRange[range]} />

        <StatisticCards />

        <TeamInsights />
      </div>
    </div>
  )
}

export default Home