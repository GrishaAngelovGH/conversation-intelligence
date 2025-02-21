const StatisticCard = ({ chart, description }) => (
  <div className='row align-items-center mt-3 border border-2 rounded shadow'>
    <div className='col-md-6'>
      {chart}
    </div>
    <div className='col-md-6'>
      {description}
    </div>
  </div>
)

export default StatisticCard