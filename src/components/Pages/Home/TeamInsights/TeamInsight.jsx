const TeamInsight = ({ content, statistic }) => (
  <div className='flex mt-3 mb-3 p-3 bg-gray-100 border rounded'>
    <div className='w-full'>

      <div className='flex'>
        <div className='w-full'>
          {content}
        </div>
      </div>

      <div className='flex mt-3 text-gray-500'>
        <div className='w-full'>
          {statistic}
        </div>
      </div>
    </div>
  </div>
)

export default TeamInsight