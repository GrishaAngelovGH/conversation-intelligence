import UserGreet from './UserGreet'
import HistoryRange from './HistoryRange'
import StatisticRow from './StatisticRow'
import StatisticCards from './StatisticCards'

const Home = () => {

  const statisticData = [
    { type: 'Actual Rev.', value: '$300k' },
    { type: 'Open Rev.', value: '$150k' },
    { type: 'Deals-Won', value: '$280k' },
    { type: 'Win-Rate', value: '63%' },
    { type: 'Avg. Deal Size', value: '58%' }
  ]

  return (
    <div className="row g-0 justify-content-center text-center">
      <div className="col-md-11">

        <div className="row g-0 p-3">
          <div className="col-md-6">
            <UserGreet username="James Smith" />
          </div>
          <div className="col-md-6">
            <HistoryRange />
          </div>
        </div>

        <StatisticRow data={statisticData} />

        <StatisticCards />
      </div>
    </div>
  )
}

export default Home