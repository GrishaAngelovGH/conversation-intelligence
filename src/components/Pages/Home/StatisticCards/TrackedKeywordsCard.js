import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js'

import { Bubble } from 'react-chartjs-2'

import StatisticCard from './StatisticCard'
ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

export const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

export const data = {
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

const TrackedKeywordsCard = () => {
  const chart = (<Bubble options={options} data={data} />)

  const description = (
    <div>
      <h4>Tracked keywords <span className='fw-bold'>3D Printing</span> and <span className='fw-bold'>Manufacturing</span> are trending upward across sales calls</h4>
      <p className='text-muted'>Tracked keywords can provide insights into what your customers are talking about, which could surface sales opportunities.</p>
    </div>
  )

  return (<StatisticCard chart={chart} description={description} />)
}

export default TrackedKeywordsCard