const AddCommentForm = ({ newComment, onNewCommentChange, onAddComment }) => {
  const isButtonDisabled = !(newComment || '').trim()

  const handleClick = () => {
    if (!isButtonDisabled) {
      onAddComment(newComment)
    }
  }

  return (
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
        onClick={handleClick}
        disabled={isButtonDisabled}
      >
        <i className="bi bi-chat-dots-fill mr-2"></i> Add Comment
      </button>
    </div>
  )
}

export default AddCommentForm
