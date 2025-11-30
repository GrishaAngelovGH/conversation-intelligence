const CommentList = ({ comments }) => {
  return (
    <div className="space-y-4 mb-6">
      {comments.map((comment) => (
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
  )
}

export default CommentList
