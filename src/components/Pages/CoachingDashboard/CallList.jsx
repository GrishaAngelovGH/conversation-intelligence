const CallList = ({ calls, selectedCall, onSelectCall }) => (
  <div className="w-1/3 bg-white p-4 rounded-lg shadow-md mr-4 overflow-y-auto">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Call Reviews</h2>
    <ul className="space-y-3">
      {calls.map((call) => (
        <li
          key={call.id}
          className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out ${selectedCall?.id === call.id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'
            }`}
          onClick={() => onSelectCall(call)}
        >
          <div className="flex items-center">
            <div className={`shrink-0 mr-3 w-10 h-10 flex items-center justify-center rounded-full ${selectedCall?.id === call.id ? 'bg-blue-500' : 'bg-gray-200'}`}>
              <i className={`bi bi-person-fill text-xl ${selectedCall?.id === call.id ? 'text-white' : 'text-gray-600'}`}></i>
            </div>
            <div>
              <p className={`font-bold text-md ${selectedCall?.id === call.id ? 'text-white' : 'text-gray-900'}`}>
                {call.agent}
              </p>
              <p className={`text-sm ${selectedCall?.id === call.id ? 'text-blue-200' : 'text-gray-500'}`}>
                {call.date}
              </p>
            </div>
          </div>
          <p className={`mt-2 text-sm ${selectedCall?.id === call.id ? 'text-blue-100' : 'text-gray-700'}`}>
            {call.topic_summary}
          </p>
        </li>
      ))}
    </ul>
  </div>
)

export default CallList
