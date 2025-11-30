const TranscriptHeader = ({ isPlaying, onPlayPause }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800">Call Transcript</h2>
      <button
        onClick={onPlayPause}
        className="px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 ease-in-out flex items-center justify-center"
      >
        <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'} mr-2`}></i>
        {isPlaying ? 'Pause' : 'Play'} Transcript
      </button>
    </div>
  )
}

export default TranscriptHeader
