import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import StatisticCard from './StatisticCard'

ChartJS.register(ArcElement, Tooltip, Legend)

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

const SentimentCard = () => {
  const chart = (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false
      }}
    />
  )

  const description = (
    <div>
      <h4>35 sales calls have noticeably higher positive sentiment than average</h4>
      <p className='text-gray-500'>Negative sentiment might indicate that customers are expressing pain points, which could present coaching opportunities.</p>
    </div>
  )

  return (<StatisticCard chart={chart} description={description} />)
}

export default SentimentCard