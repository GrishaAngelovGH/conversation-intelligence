import TeamInsight from './TeamInsight'

const TeamInsights = () => {
  const insights = [
    {
      id: 1,
      name: 'John Smith',
      avatar: 'https://i.pravatar.cc/150?u=johnsmith',
      metric: 'Talk Ratio',
      value: '68%',
      comparison: '+21% vs. Top Performers',
      details: 'John spoke for 41 minutes out of a 60-minute call, significantly higher than the team average. Coaching opportunity: practice active listening.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?u=janesmith',
      metric: 'Talk Ratio',
      value: '51%',
      comparison: '-9% vs. Top Performers',
      details: 'Jane maintains a healthy talk-listen balance, closely aligning with top performers. A good example for team training.'
    },
    {
      id: 3,
      name: 'Simon Doe',
      avatar: 'https://i.pravatar.cc/150?u=simondoe',
      metric: 'Words Per Minute',
      value: '118',
      comparison: '-21% vs. Top Performers',
      details: 'Simon speaks at a slower pace, which can be good for clarity but may affect engagement on shorter calls. Consider context.'
    },
    {
      id: 4,
      name: 'William Blake',
      avatar: 'https://i.pravatar.cc/150?u=williamblake',
      metric: 'Words Per Minute',
      value: '118',
      comparison: '-21% vs. Top Performers',
      details: 'Similar to Simon, William speaks at a slower pace. This might be a team-wide trend for this particular metric.'
    }
  ]

  return (
    <div className="flex p-3 pb-10 cursor-default">
      <div className="w-full bg-white rounded-lg shadow-md p-6 mt-6">
        <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
          Team Insights
        </h4>
        <div className="hidden md:flex text-sm text-gray-500 font-semibold mb-2">
          <div className="w-3/12">SELLER</div>
          <div className="w-3/12">METRIC</div>
          <div className="w-3/12">VALUE</div>
          <div className="w-3/12">COMPARISON</div>
        </div>
        <div className="flex flex-col">
          {insights.map((insight) => (
            <TeamInsight key={insight.id} insight={insight} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamInsights