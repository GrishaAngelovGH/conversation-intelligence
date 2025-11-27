import { useState, useRef, useEffect } from 'react'

const AnnotationNotePopup = ({ position, selectedText, onConfirm, onCancel }) => {
  const [note, setNote] = useState('')
  const popupRef = useRef(null)

  // Effect to close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onCancel()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onCancel])

  if (!position) return null

  // Calculate position to point to the highlighted text
  const style = {
    position: 'absolute',
    left: `${position.x + position.width / 2}px`, // Center horizontally with selection
    top: `${position.y + position.height + 10}px`, // Below the selection, with a small gap
    transform: 'translateX(-50%)',
    zIndex: 1001,
    width: '250px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  }

  const handleConfirm = () => {
    onConfirm(note)
    setNote('')
  }

  return (
    <div ref={popupRef} style={style}>
      <p className="text-sm text-gray-600 mb-2">Note for: &quot;{selectedText}&quot;</p>
      <textarea
        className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
        placeholder="Add your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="flex justify-end mt-3 space-x-2">
        <button
          className="px-3 py-1 text-sm rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleConfirm}
          disabled={!note.trim()}
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export default AnnotationNotePopup
