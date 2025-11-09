import UserGreet from './UserGreet'
import HistoryRange from './HistoryRange'
import StatisticRow from './StatisticRow'
import StatisticCards from './StatisticCards'
import TeamInsights from './TeamInsights'

const Home = () => {

  const statisticData = [
    { type: 'Actual Rev.', value: '$300k' },
    { type: 'Open Rev.', value: '$150k' },
    { type: 'Deals-Won', value: '$280k' },
    { type: 'Win-Rate', value: '63%' },
    { type: 'Avg. Deal Size', value: '58%' }
  ]

  return (
    <div className='flex justify-center text-center'>
      <div className='md:w-11/12'>

        <div className='flex p-3 items-center'>
          <div className='md:w-6/12'>
            <UserGreet username='James Smith' />
          </div>
          <div className='md:w-6/12'>
            <HistoryRange />
          </div>
        </div>

        <StatisticRow data={statisticData} />

        <StatisticCards />

        <TeamInsights />
      </div>
    </div>
  )
}

export default Home