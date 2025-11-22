const SellerProfileCard = () => (
  <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-lg flex flex-col sm:flex-row sm:items-center mb-8 gap-4">
    <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:space-x-6">
      <div className="w-16 h-16 sm:w-24 sm:h-24 bg-blue-200 rounded-full flex justify-center items-center text-gray-800 font-bold text-xl sm:text-3xl">
        JS
      </div>
      <div className="mt-4 sm:mt-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">James Smith</h2>
        <p className="text-blue-600 font-semibold text-base sm:text-lg">Senior Account Executive</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 text-sm text-gray-500 gap-2">
          <span>Team: Enterprise Sales</span>
          <span className="flex items-center"><i className="bi bi-envelope-fill mr-1"></i> james.smith@example.com</span>
          <span className="flex items-center"><i className="bi bi-telephone-fill mr-1"></i> (123) 456-7890</span>
        </div>
      </div>
    </div>



    <div className="flex flex-col items-center mt-4 sm:flex-row sm:items-center sm:space-x-4 sm:mt-0">
      <div className="relative w-24 h-24 sm:w-32 sm:h-32">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            className="text-gray-200"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            className="text-blue-600"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="85, 100" // 85% score
            strokeDashoffset="-25" // Start at the top
            transform="rotate(-90 18 18)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">85%</span>
          <span className="text-xs text-gray-500">Score</span>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700">Performance Score</h4>
        <p className="text-sm text-gray-500">Exceeds team average</p>
      </div>
    </div>
  </div>
)

export default SellerProfileCard