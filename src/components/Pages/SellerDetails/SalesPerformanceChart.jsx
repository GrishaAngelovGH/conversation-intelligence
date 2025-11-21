import { useEffect, useRef } from 'react'

import Chart from 'chart.js/auto'

const SalesPerformanceChart = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    let chartInstance = null
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d')
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            label: 'Sales Performance ($)',
            data: [65000, 59000, 80000, 81000, 56000, 72000],
            fill: true,
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: 'rgba(59, 130, 246, 1)',
            tension: 0.3,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            }
          }
        }
      })
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy()
      }
    }
  }, [])

  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Sales Performance (Last 6 Months)</h3>
      <div className="relative h-96">
        <canvas ref={chartRef} data-testid="sales-chart-canvas"></canvas>
      </div>
    </div>
  )
}

export default SalesPerformanceChart