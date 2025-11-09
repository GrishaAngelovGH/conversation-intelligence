import TeamInsight from './TeamInsight'

const TeamInsights = () => {
  const insights = [
    {
      id: 1,
      content: (<div><span className='text-blue-400'>John Smith</span> and <span className='text-blue-400'>Peter Potter</span> appear to talk the most, averaging <span className='font-bold'>68%</span> during calls.</div>),
      statistic: (<div>This is <span className='font-bold'>21%</span> higher than your top performers who average <span className='font-bold'>56%</span> during calls.</div>)
    },
    {
      id: 2,
      content: (<div><span className='text-blue-400'>Jane Smith</span> appears to talk the least, averaging <span className='font-bold'>51%</span> during calls.</div>),
      statistic: (<div>This is <span className='font-bold'>9%</span> lower than your top performers who average <span className='font-bold'>56%</span> during calls.</div>)
    },
    {
      id: 3,
      content: (<div><span className='text-blue-400'>Simon Doe</span> and <span className='text-blue-400'>William Blake</span> have the lowest talking speed, averaging <span className='font-bold'>118</span> words per minute.</div>),
      statistic: (<div>This is <span className='font-bold'>21%</span> lower than your top performers who average <span className='font-bold'>146</span> words per minute.</div>)
    }
  ]

  return (
    <div className='flex mt-3'>
      <div className='w-full'>
        <h3 className='font-bold'>Team Insights</h3>

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