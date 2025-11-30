import { render } from '@testing-library/react'
import AnnotationLayer from './AnnotationLayer'
import AnnotationBubbleMenu from '../AnnotationBubbleMenu'
import AnnotationNotePopup from '../AnnotationNotePopup'
import AnnotationTooltip from '../AnnotationTooltip'

// Mock the child components so we can assert on their props without rendering their full trees
// We explicitly return undefined as React does not call the component function if it is not rendered.
// This allows us to accurately test `not.toHaveBeenCalled()`
vi.mock('../AnnotationBubbleMenu', () => ({ default: vi.fn(() => undefined) }))
vi.mock('../AnnotationNotePopup', () => ({ default: vi.fn(() => undefined) }))
vi.mock('../AnnotationTooltip', () => ({ default: vi.fn(() => undefined) }))

describe('AnnotationLayer', () => {
  const commonProps = {
    bubbleMenuRef: { current: null },
    annotationNotePopupRef: { current: null },
    handleBubbleMenuClick: vi.fn(),
    handleNoteConfirm: vi.fn(),
    handleNoteCancel: vi.fn(),
  }

  beforeEach(() => {
    AnnotationBubbleMenu.mockClear()
    AnnotationNotePopup.mockClear()
    AnnotationTooltip.mockClear()
  })

  it('should render AnnotationTooltip even if selectedTextInfo is null, when tooltip.visible is false', () => {
    const mockTooltip = { visible: false, note: '', position: null }

    render(<AnnotationLayer {...commonProps} selectedTextInfo={null} showNotePopup={false} tooltip={mockTooltip} />)

    expect(AnnotationBubbleMenu).not.toHaveBeenCalled()
    expect(AnnotationNotePopup).not.toHaveBeenCalled()
    expect(AnnotationTooltip).toHaveBeenCalledWith(
      expect.objectContaining({
        note: mockTooltip.note,
        position: mockTooltip.position,
        visible: mockTooltip.visible,
      }),
      undefined
    )
  })

  it('should render AnnotationBubbleMenu when text is selected and popup is not shown', () => {
    const mockSelectedTextInfo = { text: 'test', position: { x: 0, y: 0 } }

    render(<AnnotationLayer {...commonProps} selectedTextInfo={mockSelectedTextInfo} showNotePopup={false} tooltip={{ visible: false }} />)

    expect(AnnotationBubbleMenu).toHaveBeenCalledWith(
      expect.objectContaining({
        position: mockSelectedTextInfo.position,
        onClick: commonProps.handleBubbleMenuClick,
        ref: commonProps.bubbleMenuRef,
      }),
      undefined
    )
    expect(AnnotationNotePopup).not.toHaveBeenCalled()
  })

  it('should render AnnotationNotePopup when showNotePopup is true', () => {
    const mockSelectedTextInfo = { text: 'test', position: { x: 0, y: 0 } }

    render(<AnnotationLayer {...commonProps} selectedTextInfo={mockSelectedTextInfo} showNotePopup={true} tooltip={{ visible: false }} />)

    expect(AnnotationNotePopup).toHaveBeenCalledWith(
      expect.objectContaining({
        position: mockSelectedTextInfo.position,
        selectedText: mockSelectedTextInfo.text,
        onConfirm: commonProps.handleNoteConfirm,
        onCancel: commonProps.handleNoteCancel,
        ref: commonProps.annotationNotePopupRef,
      }),
      undefined
    )
    expect(AnnotationBubbleMenu).not.toHaveBeenCalled()
  })

  it('should render AnnotationTooltip when tooltip.visible is true', () => {
    const mockTooltip = { visible: true, note: 'Hover Note', position: { x: 10, y: 20 } }

    render(<AnnotationLayer {...commonProps} selectedTextInfo={null} showNotePopup={false} tooltip={mockTooltip} />)

    expect(AnnotationTooltip).toHaveBeenCalledWith(
      expect.objectContaining({
        note: mockTooltip.note,
        position: mockTooltip.position,
        visible: mockTooltip.visible,
      }),
      undefined
    )
  })
})
