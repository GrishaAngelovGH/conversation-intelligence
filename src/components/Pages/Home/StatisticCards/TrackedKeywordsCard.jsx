import { Bubble } from 'react-chartjs-2'

import StatisticCard from './StatisticCard'

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

const data = {
  datasets: [{
    label: '3D Printing',
    data: Array.from({ length: 50 }, () => ({
      x: Math.random() * 10,
      y: Math.random() * 20,
      r: Math.random() * 30
    })),
    backgroundColor: 'rgba(255, 99, 132, 0.5)'
  },
  {
    label: 'Manufacturing',
    data: Array.from({ length: 50 }, () => ({
      x: Math.random() * 10,
      y: Math.random() * 20,
      r: Math.random() * 30
    })),
    backgroundColor: 'rgba(53, 162, 235, 0.5)'
  }]
}

const TrackedKeywordsCard = () => (
  <StatisticCard title='Tracked Keywords'>
    <div className='w-full md:w-1/2'>
      <div className='h-64'>
        <Bubble
          options={{
            responsive: true,
            maintainAspectRatio: false,
            ...options
          }}
          data={data}
        />
      </div>
    </div>
    <div className='w-full md:w-1/2 text-left p-4'>
      <p>
        Keywords <span className='font-bold'>3D Printing</span> and <span className='font-bold'>Manufacturing</span> are trending upward across sales calls.
      </p>
      <p className='text-gray-500 mt-2'>
        Tracked keywords can provide insights into what your customers are talking about, which could surface sales opportunities.
      </p>
    </div>
  </StatisticCard>
)

export default TrackedKeywordsCard