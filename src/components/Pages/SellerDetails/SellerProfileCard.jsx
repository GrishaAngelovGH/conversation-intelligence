const SellerProfileCard = () => (
  <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center mb-8">
    <div className="flex items-center space-x-6">
      <div className="w-24 h-24 bg-blue-200 rounded-full flex justify-center items-center text-gray-800 font-bold text-3xl">
        JS
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900">James Smith</h2>
        <p className="text-blue-600 font-semibold">Senior Account Executive</p>
        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
          <span>Team: Enterprise Sales</span>
          <span className="flex items-center"><i className="bi bi-envelope-fill mr-1"></i> james.smith@example.com</span>
          <span className="flex items-center"><i className="bi bi-telephone-fill mr-1"></i> (123) 456-7890</span>
        </div>
      </div>
    </div>

    <div className="grow"></div>

    <div className="flex items-center space-x-4">
      <div className="relative w-32 h-32">
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