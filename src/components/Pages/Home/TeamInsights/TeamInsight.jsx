const TeamInsight = ({ insight }) => (
  <div className='flex flex-col md:flex-row items-center py-5 border-b border-gray-200 last:border-b-0'>
    <div className='w-full md:w-3/12 flex items-center mb-2 md:mb-0'>
      <img src={insight.avatar} alt={insight.name} className='w-10 h-10 rounded-full mr-3' />
      <span className='font-semibold text-gray-800'>{insight.name}</span>
    </div>
    <div className='w-full md:w-3/12 text-gray-600 mb-2 md:mb-0'>
      {insight.metric}
    </div>
    <div className='w-full md:w-3/12 font-bold text-gray-800 mb-2 md:mb-0'>
      {insight.value}
    </div>
    <div className='w-full md:w-3/12 text-gray-500 text-sm'>
      {insight.comparison}
    </div>
  </div>
)

export default TeamInsight