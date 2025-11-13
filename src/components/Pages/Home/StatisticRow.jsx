const StatisticRow = ({ data }) => {
  const iconMap = {
    'Actual Rev.': 'bi-cash-coin',
    'Open Rev.': 'bi-wallet2',
    'Deals-Won': 'bi-trophy',
    'Win-Rate': 'bi-graph-up-arrow',
    'Avg. Deal Size': 'bi-pie-chart'
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 my-4 cursor-default'>
      {data.map((v, i) => (
        <div key={i} className='bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center'>
          <i className={`bi ${iconMap[v.type]} text-3xl text-blue-500 mb-2`}></i>
          <div className='text-2xl font-bold'>{v.value}</div>
          <div className='text-sm text-gray-500'>{v.type}</div>
        </div>
      ))}
    </div>
  )
}

export default StatisticRow