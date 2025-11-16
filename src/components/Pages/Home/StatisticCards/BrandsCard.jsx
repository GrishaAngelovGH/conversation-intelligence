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

const BrandsCard = () => (
  <StatisticCard title="Brands">
    <div className="w-full md:w-1/2">
      <div className="h-64">
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
    <div className="w-full md:w-1/2 text-left p-4">
      <p>
        Customer mentions of the brands <span className="font-bold">Brand 1</span> and <span className="font-bold">Brand 2</span> have been detected across sales calls.
      </p>
      <p className="text-gray-500 mt-2">
        When customers mention brands, it can surface new competitors and opportunities to update sales strategies.
      </p>
    </div>
  </StatisticCard>
)

export default BrandsCard