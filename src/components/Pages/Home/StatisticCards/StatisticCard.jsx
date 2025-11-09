const StatisticCard = ({ chart, description }) => (
  <div className='flex items-center mt-3 border-2 rounded shadow'>
    <div className='md:w-1/2'>
      {chart}
    </div>
    <div className='md:w-1/2'>
      {description}
    </div>
  </div>
)

export default StatisticCard