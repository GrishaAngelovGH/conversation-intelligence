const AnnotationBubbleMenu = ({ position, onClick, ref }) => {
  if (!position) return null

  // Calculate position to be slightly above and to the right of the selection
  const style = {
    position: 'absolute',
    left: `${position.x + position.width}px`, // To the right of the selection
    top: `${position.y - 40}px`, // Slightly above the selection
    transform: 'translate(-50%, -50%)', // Center the bubble relative to its calculated position
    zIndex: 1000
  }

  return (
    <div
      ref={ref}
      role="button"
      aria-label="Add a note"
      style={style}
      className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer shadow-lg"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
      </svg>
    </div>
  )
}

export default AnnotationBubbleMenu
