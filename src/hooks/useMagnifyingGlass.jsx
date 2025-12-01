import { useState, useCallback, useRef, useLayoutEffect } from 'react'

export const useMagnifyingGlass = (containerRef) => {
  const [magnifiedText, setMagnifiedText] = useState('')
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 })
  const animationFrame = useRef()

  const handleMouseMoveRef = useRef(null)
  const handleMouseUpRef = useRef(null)

  const handleSelectionChange = useCallback(() => {
    const selection = window.getSelection()
    if (selection && containerRef.current && selection.anchorNode && containerRef.current.contains(selection.anchorNode)) {
      const selectedText = selection.toString()
      if (selectedText) {
        const range = selection.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        setMagnifiedText(selectedText)
        setMagnifierPosition({
          x: rect.left + rect.width / 2,
          y: rect.top - 10,
        })
      }
    }
  }, [containerRef])

  const handleMouseMove = useCallback(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current)
    }
    animationFrame.current = requestAnimationFrame(handleSelectionChange)
  }, [handleSelectionChange])

  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', handleMouseMoveRef.current)
    document.removeEventListener('mouseup', handleMouseUpRef.current)
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current)
    }
  }, [])

  useLayoutEffect(() => {
    handleMouseMoveRef.current = handleMouseMove
    handleMouseUpRef.current = handleMouseUp
  }, [handleMouseMove, handleMouseUp])

  const handleMouseDown = useCallback(() => {
    setMagnifiedText('')
    document.addEventListener('mousemove', handleMouseMoveRef.current)
    document.addEventListener('mouseup', handleMouseUpRef.current)
  }, [])

  return { magnifiedText, magnifierPosition, handleMouseDown }
}
