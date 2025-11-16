const StatisticCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mt-4 hover:shadow-lg transition-shadow duration-300">
    <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
      {title}
    </h4>
    <div className="flex flex-col md:flex-row items-center">
      {children}
    </div>
  </div>
)

export default StatisticCard