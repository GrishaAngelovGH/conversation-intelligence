import { useState } from 'react'

const mockCalls = [
  {
    id: 1,
    agent: 'John Doe',
    date: '2025-12-19',
    transcript: [
      { speaker: 'Agent', text: 'Hello John, thank you for calling. How can I assist you today?' },
      { speaker: 'Customer', text: 'Hi, I\'m having trouble with my recent order.' },
      { speaker: 'Agent', text: 'I see. Could you please provide your order number?' },
      { speaker: 'Customer', text: 'It\'s 12345.' },
      { speaker: 'Agent', text: 'Thank you. Let me check that for you.' },
    ],
    comments: [
      { id: 1, author: 'Manager', text: 'Good opening, but try to be more energetic.' },
      { id: 2, author: 'Manager', text: 'You should have offered a discount here.' },
    ]
  },
  {
    id: 2,
    agent: 'Jane Smith',
    date: '2025-12-18',
    transcript: [
      { speaker: 'Agent', text: 'Thanks for calling, this is Jane.' },
      { speaker: 'Customer', text: 'I want to cancel my subscription.' },
    ],
    comments: []
  },
  {
    id: 3,
    agent: 'Peter Jones',
    date: '2025-12-17',
    transcript: [
      { speaker: 'Agent', text: 'Hello, you\'re speaking with Peter.' },
    ],
    comments: []
  },
]

const CoachingDashboard = () => {
  const [calls, setCalls] = useState(mockCalls)
  const [selectedCall, setSelectedCall] = useState(mockCalls[0])
  const [newComment, setNewComment] = useState('')

  const handleSelectCall = (call) => {
    setSelectedCall(call)
  }

  const handleAddComment = () => {
    if (newComment.trim() === '') return

    const updatedCall = {
      ...selectedCall,
      comments: [
        ...selectedCall.comments,
        {
          id: Date.now(),
          author: 'Manager',
          text: newComment,
        },
      ],
    }

    const updatedCalls = calls.map((call) =>
      call.id === updatedCall.id ? updatedCall : call
    )

    setCalls(updatedCalls)
    setSelectedCall(updatedCall)
    setNewComment('')
  }

  return (
    <div className="p-4 h-full flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Coaching Dashboard</h1>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/3 bg-white p-4 rounded-lg shadow-md mr-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-3">Call List</h2>
          <ul className="space-y-2">
            {calls.map((call) => (
              <li
                key={call.id}
                className={`p-2 border rounded-md cursor-pointer ${selectedCall?.id === call.id ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                onClick={() => handleSelectCall(call)}
              >
                Call with {call.agent} ({call.date})
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 bg-white p-4 rounded-lg shadow-md overflow-y-auto">
          {selectedCall ? (
            <>
              <h2 className="text-xl font-semibold mb-3">Selected Call Transcript</h2>
              <div className="border p-3 rounded-md bg-gray-50 mb-4">
                {selectedCall.transcript.map((line, index) => (
                  <p key={index}>
                    <strong>{line.speaker}:</strong> {line.text}
                  </p>
                ))}
              </div>

              <h2 className="text-xl font-semibold mb-3">Comments</h2>
              <div className="space-y-3">
                {selectedCall.comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-100 p-3 rounded-md">
                    <p className="font-semibold">{comment.author}</p>
                    <p>{comment.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <textarea
                  className="w-full p-2 border rounded-md"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  onClick={handleAddComment}
                >
                  Add Comment
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a call to see the details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CoachingDashboard
