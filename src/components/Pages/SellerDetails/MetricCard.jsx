const MetricCard = ({ title, value, icon }) => (
  <div className="bg-slate-100 p-4 rounded-lg shadow-md flex items-center space-x-4 transition-transform hover:scale-105">
    <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center">
      <i className={`bi ${icon} text-2xl`} role="img" aria-hidden="true"></i>
    </div>
    <div>
      <h4 className="text-sm font-semibold text-slate-500">{title}</h4>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
    </div>
  </div>
)

export default MetricCard