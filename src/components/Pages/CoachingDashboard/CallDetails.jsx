const CallDetails = ({ selectedCall, newComment, onNewCommentChange, onAddComment }) => (
  <div className="flex-1 bg-white p-4 rounded-lg shadow-md overflow-y-auto">
    {selectedCall ? (
      <>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Call Transcript</h2>
        <div className="space-y-4 mb-6">
          {selectedCall.transcript.map((line, index) => (
            <div
              key={index}
              className={`flex items-start ${line.speaker === 'Agent' ? 'justify-end' : 'justify-start'
                }`}
            >
              {line.speaker === 'Customer' && (
                <div className="shrink-0 mr-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
                  <i className="bi bi-person-fill text-lg text-gray-600"></i>
                </div>
              )}
              <div
                className={`relative p-3 rounded-lg max-w-[70%] ${line.speaker === 'Agent'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
                  }`}
              >
                <p className="font-semibold">{line.speaker}:</p>
                <p>{line.text}</p>
              </div>
              {line.speaker === 'Agent' && (
                <div className="shrink-0 ml-3 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500">
                  <i className="bi bi-person-fill text-lg text-white"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">Manager Comments</h2>
        <div className="space-y-4 mb-6">
          {selectedCall.comments.map((comment) => (
            <div key={comment.id} className="flex items-start bg-gray-100 p-4 rounded-lg shadow-sm">
              <div className="shrink-0 mr-3 w-8 h-8 flex items-center justify-center rounded-full bg-purple-200">
                <i className="bi bi-person-fill text-lg text-purple-600"></i>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{comment.author}</p>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-y"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => onNewCommentChange(e.target.value)}
            rows="3"
          ></textarea>
          <button
            className="mt-3 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
            onClick={onAddComment}
          >
            <i className="bi bi-chat-dots-fill mr-2"></i> Add Comment
          </button>
        </div>
      </>
    ) : (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 text-lg">Select a call from the list to view its details.</p>
      </div>
    )}
  </div>
);

export default CallDetails;
