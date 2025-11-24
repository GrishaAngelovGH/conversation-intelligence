const CallList = ({ calls, selectedCall, onSelectCall }) => (
  <div className="w-1/3 bg-white p-4 rounded-lg shadow-md mr-4 overflow-y-auto">
    <h2 className="text-xl font-semibold mb-3">Call List</h2>
    <ul className="space-y-2">
      {calls.map((call) => (
        <li
          key={call.id}
          className={`p-2 border rounded-md cursor-pointer ${selectedCall?.id === call.id ? 'bg-blue-100' : 'hover:bg-gray-100'
            }`}
          onClick={() => onSelectCall(call)}
        >
          Call with {call.agent} ({call.date})
        </li>
      ))}
    </ul>
  </div>
)

export default CallList
