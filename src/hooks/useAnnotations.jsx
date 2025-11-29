import { useState, useRef, useMemo, useEffect, Fragment } from 'react'

export const useAnnotations = (selectedCall, onUpdateCall) => {
  const [localAnnotations, setLocalAnnotations] = useState({})
  const [selectedTextInfo, setSelectedTextInfo] = useState(null)
  const [showNotePopup, setShowNotePopup] = useState(false)
  const [tooltip, setTooltip] = useState({ visible: false, note: '', position: null })
  const callDetailsRef = useRef(null)
  const bubbleMenuRef = useRef(null)
  const annotationNotePopupRef = useRef(null)

  // Derive the transcript lines to be rendered by merging the original transcript
  // with the locally created annotations. This is memoized for performance.
  const transcriptLines = useMemo(() => {
    const originalTranscript = selectedCall?.transcript || []
    return originalTranscript.map((line, index) => {
      const existingAnnotations = line.annotations || []
      const newAnnotations = localAnnotations[index] || []
      // We combine annotations from the original data and the new ones.
      // A more robust solution might involve deduplicating if IDs are stable.
      return {
        ...line,
        annotations: [...existingAnnotations, ...newAnnotations],
      }
    })
  }, [selectedCall?.transcript, localAnnotations])

  const handleTextSelect = (text, range, position, lineIndex) => {
    if (text && callDetailsRef.current) {
      const parentRect = callDetailsRef.current.getBoundingClientRect()
      const relativePosition = {
        x: position.x - parentRect.left,
        y: position.y - parentRect.top,
        width: position.width,
        height: position.height,
      }
      setSelectedTextInfo({ text, range, position: relativePosition, lineIndex })
      setShowNotePopup(false)
    } else {
      setSelectedTextInfo(null)
      setShowNotePopup(false)
    }
  }

  const handleBubbleMenuClick = () => {
    setShowNotePopup(true)
  }

  // When a note is confirmed, add it to our local annotation state
  // and inform the parent component of the fully updated transcript.
  const handleNoteConfirm = (note) => {
    if (!selectedTextInfo || !selectedCall) return

    const { lineIndex, text, range } = selectedTextInfo
    const newAnnotation = {
      id: Date.now(), // Simple unique ID
      text: text,
      range: range,
      note: note,
    }

    setLocalAnnotations(prev => ({
      ...prev,
      [lineIndex]: [...(prev[lineIndex] || []), newAnnotation],
    }))

    // Construct the fully updated transcript to send to the parent
    const updatedTranscript = transcriptLines.map((line, index) => {
      if (index === lineIndex) {
        return {
          ...line,
          annotations: [...line.annotations, newAnnotation],
        }
      }
      return line
    })

    onUpdateCall({
      ...selectedCall,
      transcript: updatedTranscript,
    })

    setShowNotePopup(false)
    setSelectedTextInfo(null)
  }

  const handleNoteCancel = () => {
    setShowNotePopup(false)
    setSelectedTextInfo(null)
  }

  // This function now needs to handle clearing annotations from both
  // the original data and the local state. For simplicity, we rebuild
  // the transcript and pass it up. A more complex implementation might
  // track local vs. original annotations separately.
  const handleClearAnnotation = (annotationId, lineIndex) => {
    const updatedTranscript = transcriptLines.map((line, idx) => {
      if (idx === lineIndex) {
        return {
          ...line,
          annotations: line.annotations.filter(ann => ann.id !== annotationId),
        }
      }
      return line
    })

    setLocalAnnotations(prev => {
      const newLineAnnotations = (prev[lineIndex] || []).filter(ann => ann.id !== annotationId)
      return {
        ...prev,
        [lineIndex]: newLineAnnotations,
      }
    })

    onUpdateCall({
      ...selectedCall,
      transcript: updatedTranscript,
    })

    setTooltip({ visible: false, note: '', position: null })
  }

  const getCharacterOffsetWithin = (range, containerElement) => {
    const preCaretRange = range.cloneRange()
    preCaretRange.selectNodeContents(containerElement)
    preCaretRange.setEnd(range.startContainer, range.startOffset)
    const start = preCaretRange.toString().length

    preCaretRange.selectNodeContents(containerElement)
    preCaretRange.setEnd(range.endContainer, range.endOffset)
    const end = preCaretRange.toString().length

    if (start > end) {
      return { start: end, end: start }
    }

    return { start, end }
  }

  useEffect(() => {
    const handleAnnotationDeselect = (event) => {
      // If the click is inside the bubble menu or note popup, do not hide.
      if (
        (bubbleMenuRef.current && bubbleMenuRef.current.contains(event.target)) ||
        (annotationNotePopupRef.current && annotationNotePopupRef.current.contains(event.target))
      ) {
        return
      }

      // For any other click, dismiss the annotation UI.
      // We add a small timeout to allow other events (like a new text selection) to process first.
      setTimeout(() => {
        const selection = window.getSelection()
        if (!selection || selection.toString().trim().length === 0) {
          setSelectedTextInfo(null)
          setShowNotePopup(false)
        }
      }, 0)
    }

    document.addEventListener('mouseup', handleAnnotationDeselect)

    return () => {
      document.removeEventListener('mouseup', handleAnnotationDeselect)
    }
  }, [selectedTextInfo, showNotePopup, callDetailsRef, bubbleMenuRef, annotationNotePopupRef])

  const renderContent = (contentToRender, lineKeywords, lineAnnotations, lineIndex) => {
    const elements = []
    let lastIndex = 0

    const marks = []

    const activeKeywords = lineKeywords.filter(k => k.active).map(k => k.text.toLowerCase())
    if (activeKeywords.length > 0) {
      activeKeywords.forEach(keyword => {
        let startIndex = contentToRender.toLowerCase().indexOf(keyword, 0)
        while (startIndex !== -1) {
          marks.push({
            start: startIndex,
            end: startIndex + keyword.length,
            type: 'highlight',
            value: keyword
          })
          startIndex = contentToRender.toLowerCase().indexOf(keyword, startIndex + keyword.length)
        }
      })
    }

    lineAnnotations.forEach(annotation => {
      marks.push({
        start: annotation.range.start,
        end: annotation.range.end,
        type: 'annotation',
        value: annotation.note,
        id: annotation.id,
        selectedText: annotation.text,
      })
    })

    marks.sort((a, b) => a.start - b.start)

    marks.forEach((mark, i) => {
      if (mark.start > lastIndex) {
        elements.push(<Fragment key={`text-${lastIndex}-${i}`}>{contentToRender.substring(lastIndex, mark.start)}</Fragment>)
      }

      const segmentStart = Math.max(lastIndex, mark.start)
      const segmentEnd = mark.end

      if (segmentStart < segmentEnd) {
        const markedText = contentToRender.substring(segmentStart, segmentEnd)
        let wrappedElement

        const handleMouseEnter = (e) => {
          setTooltip({
            visible: true,
            note: mark.value,
            position: { x: e.clientX, y: e.clientY },
          })
        }

        const handleMouseLeave = () => {
          setTooltip({ visible: false, note: '', position: null })
        }

        if (mark.type === 'highlight') {
          wrappedElement = (
            <span key={`highlight-${i}`} className="bg-yellow-200">
              {markedText}
            </span>
          )
        } else if (mark.type === 'annotation') {
          wrappedElement = (
            <span
              key={`annotation-wrapper-${mark.id}`}
              className="group relative inline-flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span
                key={`annotation-${mark.id}`}
                className="underline decoration-white bg-orange-400 cursor-pointer relative"
              >
                {markedText}
              </span>
              <span
                className="absolute -right-5 top-1/2 -translate-y-1/2 ml-1 text-white bg-black rounded-full w-5 h-5 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={(e) => {
                  e.stopPropagation()
                  handleClearAnnotation(mark.id, lineIndex)
                }}
              >
                <i className="bi bi-x-circle-fill text-base"></i>
              </span>
            </span>
          )
        }
        elements.push(wrappedElement)
      }
      lastIndex = Math.max(lastIndex, mark.end)
    })

    if (lastIndex < contentToRender.length) {
      elements.push(<Fragment key={`text-${lastIndex}`}>{contentToRender.substring(lastIndex)}</Fragment>)
    }
    return elements
  }

  return {
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
    handleClearAnnotation,
    getCharacterOffsetWithin,
    renderContent,
  }
}