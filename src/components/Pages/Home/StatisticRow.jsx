const StatisticRow = ({ data }) => (
  <div className='row border border-2 rounded'>
    <div className='col'>
      <div className='fw-bold'>Tuesday 18</div>
    </div>
    <div className='col'>
      <div className='fw-bold'>Q2, 48 days left</div>
    </div>
    {
      data.map((v, i) => (
        <div key={i} className='col'>
          <div className='fw-bold'>{v.type}: {v.value}</div>
        </div>
      ))
    }
  </div>
)

export default StatisticRow