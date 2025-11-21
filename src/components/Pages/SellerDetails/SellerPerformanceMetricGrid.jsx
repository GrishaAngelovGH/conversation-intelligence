import MetricCard from './MetricCard'

const SellerPerformanceMetricGrid = () => {
  const performanceMetrics = [
    { title: 'Win Rate', value: '72%', icon: 'bi-trophy' },
    { title: 'Avg. Deal Size', value: '$48,300', icon: 'bi-currency-dollar' },
    { title: 'Calls This Week', value: '34', icon: 'bi-telephone' },
    { title: 'Avg. Call Duration', value: '28m', icon: 'bi-clock' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {performanceMetrics.map((metric) => (
        <MetricCard key={metric.title} title={metric.title} value={metric.value} icon={metric.icon} />
      ))}
    </div>
  )
}

export default SellerPerformanceMetricGrid