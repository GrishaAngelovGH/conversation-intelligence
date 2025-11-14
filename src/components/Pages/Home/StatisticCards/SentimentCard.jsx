import { Doughnut } from 'react-chartjs-2'

import StatisticCard from './StatisticCard'

const data = {
  labels: ['Positive', 'Neutral', 'Negative'],
  datasets: [
    {
      label: 'Sentiment',
      data: [75, 25, 0],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }
  ]
}

const SentimentCard = () => (
  <StatisticCard title='Sentiment'>
    <div className='w-full md:w-1/2'>
      <div className='h-64'>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      </div>
    </div>
    <div className='w-full md:w-1/2 text-left p-4'>
      <p>
        <span className='font-bold'>35 sales calls</span> have noticeably higher positive sentiment than average.
      </p>
      <p className='text-gray-500 mt-2'>
        Negative sentiment might indicate that customers are expressing pain points, which could present coaching opportunities.
      </p>
    </div>
  </StatisticCard>
)

export default SentimentCard