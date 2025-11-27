const AnnotationTooltip = ({ note, position, visible }) => {
  if (!visible || !position) return null

  const style = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: 'translate(-50%, -110%)',
    zIndex: 1002,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '4px',
    fontSize: '0.85rem',
    maxWidth: '200px',
    pointerEvents: 'none',
    whiteSpace: 'pre-wrap'
  }

  return (
    <div style={style}>
      {note}
    </div>
  )
}

export default AnnotationTooltip
