import { useRef, useEffect, useState } from 'react'

const MagnifyingGlass = ({ selectedText, position }) => {
  const magnifierRef = useRef(null)
  const [dynamicStyle, setDynamicStyle] = useState({
    top: -9999,
    left: -9999,
    opacity: 0,
    visibility: 'hidden'
  })

  useEffect(() => {
    const process = () => {
      let top = position.y - 60
      let left = position.x

      if (magnifierRef.current) {
        const magnifierRect = magnifierRef.current.getBoundingClientRect()
        top = position.y - magnifierRect.height - 10
        left = position.x - magnifierRect.width / 2

        if (top < 0) {
          top = position.y + 20
        }
        if (left < 0) {
          left = 5
        } else if (left + magnifierRect.width > window.innerWidth) {
          left = window.innerWidth - magnifierRect.width - 5
        }
      }

      setDynamicStyle({
        top: `${top}px`,
        left: `${left}px`,
        opacity: selectedText ? 1 : 0,
        visibility: selectedText ? 'visible' : 'hidden',
      })
    }
    process()
  }, [selectedText, position])

  return (
    <div
      ref={magnifierRef}
      style={dynamicStyle}
      className={'fixed px-4 py-2 bg-white/95 border border-gray-300 rounded-lg shadow-lg text-lg leading-relaxed z-50 flex items-center gap-2 transition-opacity duration-100 ease-out pointer-events-none'}
      data-testid="magnifying-glass"
    >
      <i className="bi bi-search"></i>
      <span>{selectedText}</span>
    </div>
  )
}

export default MagnifyingGlass
