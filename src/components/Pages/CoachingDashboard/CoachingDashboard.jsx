import { useState } from 'react';
import CallList from './CallList';
import CallDetails from './CallDetails';
import { mockCalls } from './mockData';

const CoachingDashboard = () => {
  const [calls, setCalls] = useState(mockCalls);
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
