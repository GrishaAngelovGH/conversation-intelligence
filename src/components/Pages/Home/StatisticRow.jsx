const StatisticRow = ({ data }) => (
  <div className='flex border-2 rounded'>
    <div className='flex-1'>
      <div className='font-bold'>Tuesday 18</div>
    </div>
    <div className='flex-1'>
      <div className='font-bold'>Q2, 48 days left</div>
    </div>
    {
      data.map((v, i) => (
        <div key={i} className='flex-1'>
          <div className='font-bold'>{v.type}: {v.value}</div>
        </div>
      ))
    }
  </div>
)

export default StatisticRow