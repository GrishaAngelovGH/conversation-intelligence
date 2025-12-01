import { useRef } from 'react'
import MagnifyingGlass from './MagnifyingGlass'
import { useMagnifyingGlass } from 'hooks/useMagnifyingGlass'

const TranscriptView = ({ transcriptLines, onTextSelect, getCharacterOffsetWithin, renderContent, selectedCall }) => {
  const transcriptContainerRef = useRef(null)
  const { magnifiedText, magnifierPosition, handleMouseDown } = useMagnifyingGlass(transcriptContainerRef)

  const handleTextSelectionInTranscript = (el, lineIndex) => {
    if (el) {
      el.onmouseup = () => {
        const selection = window.getSelection()
        if (selection && selection.toString().length > 0) {
          const selectedText = selection.toString()
          const range = selection.getRangeAt(0)
          const rect = range.getBoundingClientRect()
          const { start, end } = getCharacterOffsetWithin(range, el)
          if (start !== null && end !== null) {
            onTextSelect(selectedText, { start, end }, { x: rect.left, y: rect.top, width: rect.width, height: rect.height }, lineIndex)
          } else {
            onTextSelect(null)
          }
        } else {
          onTextSelect(null)
        }
      }
    }
  }

  return (
    <div className="space-y-4 mb-6" ref={transcriptContainerRef} onMouseDown={handleMouseDown}>
      <MagnifyingGlass selectedText={magnifiedText} position={magnifierPosition} />

      {transcriptLines.map((line, index) => (
        <div
          key={index}
          className={`flex items-start ${line.speaker === 'Agent' ? 'justify-end' : 'justify-start'}`}
        >
          {line.speaker === 'Customer' && (
            <div className="shrink-0 mr-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
              <i className="bi bi-person-fill text-lg text-gray-600"></i>
            </div>
          )}
          <div className={`relative p-3 rounded-lg max-w-[70%] ${line.speaker === 'Agent' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
            <p className="font-semibold">{line.speaker}:</p>
            <p ref={(el) => handleTextSelectionInTranscript(el, index)}>
              {renderContent(line.text, selectedCall.keywords || [], line.annotations || [], index)}
            </p>
          </div>
          {line.speaker === 'Agent' && (
            <div className="shrink-0 ml-3 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500">
              <i className="bi bi-person-fill text-lg text-white"></i>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default TranscriptView
