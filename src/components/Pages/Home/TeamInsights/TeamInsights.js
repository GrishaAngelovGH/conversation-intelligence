import TeamInsight from './TeamInsight'

const TeamInsights = () => {
  const insights = [
    {
      id: 1,
      content: (<div><span className='text-info'>John Smith</span> and <span className='text-info'>Peter Potter</span> appear to talk the most, averaging <span className='fw-bold'>68%</span> during calls.</div>),
      statistic: (<div>This is <span className='fw-bold'>21%</span> higher than your top performers who average <span className='fw-bold'>56%</span> during calls.</div>)
    },
    {
      id: 2,
      content: (<div><span className='text-info'>Jane Smith</span> appears to talk the least, averaging <span className='fw-bold'>51%</span> during calls.</div>),
      statistic: (<div>This is <span className='fw-bold'>9%</span> lower than your top performers who average <span className='fw-bold'>56%</span> during calls.</div>)
    },
    {
      id: 3,
      content: (<div><span className='text-info'>Simon Doe</span> and <span className='text-info'>William Blake</span> have the lowest talking speed, averaging <span className='fw-bold'>118</span> words per minute.</div>),
      statistic: (<div>This is <span className='fw-bold'>21%</span> lower than your top performers who average <span className='fw-bold'>146</span> words per minute.</div>)
    }
  ]

  return (
    <div className='row mt-3'>
      <div className='col-md-12'>
        <h3 className='fw-bold'>Team Insights</h3>

        {
          insights.map(v => (
            <TeamInsight key={v.id} content={v.content} statistic={v.statistic} />
          ))
        }

      </div>
    </div>
  )
}

export default TeamInsights