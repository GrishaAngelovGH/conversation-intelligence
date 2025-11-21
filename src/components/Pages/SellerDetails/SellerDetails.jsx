import SellerProfileCard from './SellerProfileCard'
import SellerPerformanceMetricGrid from './SellerPerformanceMetricGrid';
import SalesPerformanceChart from './SalesPerformanceChart'
import CallHistoryTimeline from './CallHistoryTimeline'

const SellerDetails = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <SellerProfileCard />

      <SellerPerformanceMetricGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <SalesPerformanceChart />
        <CallHistoryTimeline />
      </div>
    </div>
  )
}

export default SellerDetails