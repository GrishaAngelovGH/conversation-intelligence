import { useState, useEffect } from 'react'
import { useAnnotations } from 'hooks/useAnnotations'

import AnnotationBubbleMenu from './AnnotationBubbleMenu'
import AnnotationNotePopup from './AnnotationNotePopup'
import AnnotationTooltip from './AnnotationTooltip'

const CallDetails = ({ selectedCall, newComment, onNewCommentChange, onAddComment, onUpdateCall }) => {
  const {
    transcriptLines,
    selectedTextInfo,
    showNotePopup,
    tooltip,
    callDetailsRef,
    handleTextSelect,
    handleBubbleMenuClick,
    handleNoteConfirm,
    handleNoteCancel,
    getCharacterOffsetWithin,
    renderContent,
  } = useAnnotations(selectedCall, onUpdateCall)

  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    return () => {
      speechSynthesis.cancel()
    }
  }, [selectedCall])

  const handlePlayTranscript = () => {
    if (!selectedCall || !selectedCall.transcript.length) return

    if (speechSynthesis.speaking) {
      speechSynthesis.cancel()
      return
    }

    const fullTranscriptText = selectedCall.transcript.map(line => `${line.speaker} says ${line.text}.`).join(' ')
    const utterance = new SpeechSynthesisUtterance(fullTranscriptText)

    utterance.onstart = () => setIsPlaying(true)
    utterance.onend = () => {
      setIsPlaying(false)
    }
    utterance.onerror = () => {
      setIsPlaying(false)
    }

    speechSynthesis.speak(utterance)
  }

  return (
    <div ref={callDetailsRef} className="flex-1 bg-white p-4 rounded-lg shadow-md overflow-y-auto relative">
      {selectedCall ? (
        <>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-md">
            <div className="flex">
              <div className="shrink-0">
                <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700 font-medium">
                  <strong>Annotation Workflow:</strong>
                  <br />
                  1. To create an annotation, highlight any text in the transcript. A small bubble icon will appear next to your selection. Click it to add your note.
                  <br />
                  2. To view an annotation&apos;s message, hover over the annotated text.
                  <br />
                  3. To clear an annotation, hover over the annotated text. A small &apos;X&apos; icon will appear; click it to remove the annotation.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Call Transcript</h2>
            <button
              onClick={handlePlayTranscript}
              className="px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 ease-in-out flex items-center justify-center"
            >
              <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'} mr-2`}></i>
              {isPlaying ? 'Pause' : 'Play'} Transcript
            </button>
          </div>
          <div className="space-y-4 mb-6">
            {transcriptLines.map((line, index) => (
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
                  <p ref={el => {
                    if (el) {
                      el.onmouseup = () => {
                        const selection = window.getSelection()
                        if (selection && selection.toString().length > 0 && el.contains(selection.anchorNode) && el.contains(selection.focusNode)) {
                          const selectedText = selection.toString()
                          const range = selection.getRangeAt(0)
                          const rect = range.getBoundingClientRect()
                          const { start, end } = getCharacterOffsetWithin(range, el)
                          if (start !== null && end !== null) {
                            handleTextSelect(selectedText, { start, end }, { x: rect.left, y: rect.top, width: rect.width, height: rect.height }, index)
                          } else {
                            handleTextSelect(null)
                          }
                        } else {
                          handleTextSelect(null)
                        }
                      }
                    }
                  }}>{renderContent(line.text, selectedCall.keywords || [], line.annotations || [], index)}</p>
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
      {selectedTextInfo && selectedTextInfo.position && !showNotePopup && (
        <AnnotationBubbleMenu
          position={selectedTextInfo.position}
          onClick={handleBubbleMenuClick}
        />
      )}
      {showNotePopup && selectedTextInfo && selectedTextInfo.position && (
        <AnnotationNotePopup
          position={selectedTextInfo.position}
          selectedText={selectedTextInfo.text}
          onConfirm={handleNoteConfirm}
          onCancel={handleNoteCancel}
        />
      )}
      <AnnotationTooltip
        note={tooltip.note}
        position={tooltip.position}
        visible={tooltip.visible}
      />
    </div>
  )
}

export default CallDetails
