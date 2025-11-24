const CallDetails = ({ selectedCall, newComment, onNewCommentChange, onAddComment }) => (
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
            onChange={(e) => onNewCommentChange(e.target.value)}
          ></textarea>
          <button
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={onAddComment}
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
)

export default CallDetails
