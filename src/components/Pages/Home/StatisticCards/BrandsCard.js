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
    label: 'Brand 1',
    data: Array.from({ length: 50 }, () => ({
      x: Math.random() * 10,
      y: Math.random() * 20,
      r: Math.random() * 30
    })),
    backgroundColor: 'rgba(255, 103, 20, 0.5)'
  },
  {
    label: 'Brand 2',
    data: Array.from({ length: 50 }, () => ({
      x: Math.random() * 10,
      y: Math.random() * 20,
      r: Math.random() * 30
    })),
    backgroundColor: 'rgba(53, 242, 135, 0.5)'
  }]
}

const BrandsCard = () => {
  const chart = (<Bubble options={options} data={data} />)

  const description = (
    <div>
      <h4>Customer mentions of the brands <span className="fw-bold">Brand 1</span> and <span className="fw-bold">Brand 2</span> have been detected across sales calls</h4>
      <p className="text-muted">When customers mention brands, it can surface new competitors and opportunities to update sales strategies</p>
    </div>
  )

  return (<StatisticCard chart={chart} description={description} />)
}

export default BrandsCard