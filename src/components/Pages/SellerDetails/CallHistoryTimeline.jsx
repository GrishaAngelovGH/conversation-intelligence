const CallHistoryTimeline = () => {
  const callHistory = [
    { id: 1, title: 'Closing call with Acme Corp', added: '6 hours ago', duration: '31m 30s', relatedOpportunity: 'Opportunity-123', icon: 'bi-telephone-outbound' },
    { id: 2, title: 'Initial discussion with Tech Solutions', added: '3 days ago', duration: '35m 14s', relatedOpportunity: 'Opportunity-121', icon: 'bi-telephone-inbound' },
    { id: 3, title: 'Product Demo for Retail Inc.', added: '3 days ago', duration: '45m 20s', relatedOpportunity: 'Opportunity-119', icon: 'bi-camera-video' },
    { id: 4, title: 'Follow-up on Q4 proposal', added: '5 days ago', duration: '15m 50s', relatedOpportunity: 'Opportunity-117', icon: 'bi-telephone-outbound' },
    { id: 5, title: 'Quarterly Business Review', added: '1 week ago', duration: '55m 10s', relatedOpportunity: 'Opportunity-115', icon: 'bi-calendar-event' },
    { id: 6, title: 'Support call with Client-X', added: '2 weeks ago', duration: '12m 05s', relatedOpportunity: 'Ticket-4567', icon: 'bi-headset' },
  ]

  return (
    <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Call History</h3>
      <div className="relative pl-6">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        <div className="space-y-8">
          {callHistory.map((call) => (
            <div key={call.id} className="relative">
              <div className="absolute -left-1.5 top-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <i className={`bi ${call.icon}`}></i>
              </div>
              <div className="pl-12">
                <p className="font-semibold text-gray-800">{call.title}</p>
                <p className="text-sm text-gray-500">{call.added} - {call.duration}</p>
                <p className="text-sm text-gray-600 mt-1">{call.relatedOpportunity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CallHistoryTimeline