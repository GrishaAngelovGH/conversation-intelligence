import AnnotationBubbleMenu from '../AnnotationBubbleMenu'
import AnnotationNotePopup from '../AnnotationNotePopup'
import AnnotationTooltip from '../AnnotationTooltip'

const AnnotationLayer = ({
  selectedTextInfo,
  showNotePopup,
  tooltip,
  bubbleMenuRef,
  annotationNotePopupRef,
  handleBubbleMenuClick,
  handleNoteConfirm,
  handleNoteCancel,
}) => {
  return (
    <>
      {selectedTextInfo && selectedTextInfo.position && !showNotePopup && (
        <AnnotationBubbleMenu
          ref={bubbleMenuRef}
          position={selectedTextInfo.position}
          onClick={handleBubbleMenuClick}
        />
      )}
      {showNotePopup && selectedTextInfo && selectedTextInfo.position && (
        <AnnotationNotePopup
          ref={annotationNotePopupRef}
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
    </>
  )
}

export default AnnotationLayer
