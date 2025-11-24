import { useState } from 'react'

import CallList from './CallList'
import CallDetails from './CallDetails'

const mockCalls = [
  {
    id: 1,
    agent: 'John Doe',
    date: '2025-11-19',
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
    date: '2025-11-18',
    transcript: [
      { speaker: 'Agent', text: 'Thanks for calling, this is Jane.' },
      { speaker: 'Customer', text: 'I want to cancel my subscription.' },
    ],
    comments: []
  },
  {
    id: 3,
    agent: 'Peter Jones',
    date: '2025-11-17',
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
        <CallList
          calls={calls}
          selectedCall={selectedCall}
          onSelectCall={handleSelectCall}
        />
        <CallDetails
          selectedCall={selectedCall}
          newComment={newComment}
          onNewCommentChange={setNewComment}
          onAddComment={handleAddComment}
        />
      </div>
    </div>
  )
}

export default CoachingDashboard
