import { useState } from 'react'
import { mockCalls } from './mockData'

import CallList from './CallList'
import CallDetails from './CallDetails'

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
      <div className="flex flex-col md:flex-row gap-4 flex-1 pb-5">
        <CallList
          calls={calls}
          selectedCall={selectedCall}
          onSelectCall={handleSelectCall}
        />
        <CallDetails
          key={selectedCall ? selectedCall.id : 'no-call-selected'}
          selectedCall={selectedCall}
          newComment={newComment}
          onNewCommentChange={setNewComment}
          onAddComment={handleAddComment}
          onUpdateCall={updatedCall => {
            setCalls(calls.map(call => call.id === updatedCall.id ? updatedCall : call))
            setSelectedCall(updatedCall)
          }}
        />
      </div>
    </div>
  )
}

export default CoachingDashboard
