import { useState, useEffect } from 'react'
import { useAnnotations } from 'hooks/useAnnotations'

import AnnotationLayer from './AnnotationLayer'
import TranscriptHeader from './TranscriptHeader'
import TranscriptView from './TranscriptView'
import CommentList from './CommentList'
import AddCommentPanel from './AddCommentPanel'
import AnnotationWorkflowInfo from './AnnotationWorkflowInfo'

const CallDetails = ({ selectedCall, newComment, onNewCommentChange, onAddComment, onUpdateCall }) => {
  const {
    transcriptLines,
    selectedTextInfo,
    showNotePopup,
    tooltip,
    callDetailsRef,
    bubbleMenuRef,
    annotationNotePopupRef,
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
          <AnnotationWorkflowInfo />

          <TranscriptHeader isPlaying={isPlaying} onPlayPause={handlePlayTranscript} />

          <TranscriptView
            transcriptLines={transcriptLines}
            onTextSelect={handleTextSelect}
            getCharacterOffsetWithin={getCharacterOffsetWithin}
            renderContent={renderContent}
            selectedCall={selectedCall}
          />

          <h2 className="text-2xl font-bold mb-4 text-gray-800">Manager Comments</h2>

          <CommentList comments={selectedCall.comments} />

          <AddCommentPanel
            newComment={newComment}
            onNewCommentChange={onNewCommentChange}
            onAddComment={onAddComment}
          />

          <AnnotationLayer
            selectedTextInfo={selectedTextInfo}
            showNotePopup={showNotePopup}
            tooltip={tooltip}
            bubbleMenuRef={bubbleMenuRef}
            annotationNotePopupRef={annotationNotePopupRef}
            handleBubbleMenuClick={handleBubbleMenuClick}
            handleNoteConfirm={handleNoteConfirm}
            handleNoteCancel={handleNoteCancel}
          />
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-lg">Select a call from the list to view its details.</p>
        </div>
      )}
    </div>
  )
}

export default CallDetails