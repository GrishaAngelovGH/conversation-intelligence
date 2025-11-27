import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AnnotationNotePopup from './AnnotationNotePopup'

describe('AnnotationNotePopup', () => {
  const mockPosition = { x: 100, y: 150, width: 50, height: 20 }
  const mockSelectedText = 'selected text'
  let mockOnConfirm
  let mockOnCancel

  beforeEach(() => {
    mockOnConfirm = vi.fn()
    mockOnCancel = vi.fn()
  })

  it('should not render when position is null', () => {
    const { container } = render(
      <AnnotationNotePopup
        position={null}
        selectedText={mockSelectedText}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    )
    expect(container.firstChild).toBeNull()
  })

  it('should render correctly with provided text and position', () => {
    render(
      <AnnotationNotePopup
        position={mockPosition}
        selectedText={mockSelectedText}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    )

    expect(screen.getByText(`Note for: "${mockSelectedText}"`)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Add your note here...')).toBeInTheDocument()
    expect(screen.getByText('Confirm')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  it('should call onConfirm with the note text when Confirm is clicked', async () => {
    render(
      <AnnotationNotePopup
        position={mockPosition}
        selectedText={mockSelectedText}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    )
    const textarea = screen.getByPlaceholderText('Add your note here...')
    const confirmButton = screen.getByText('Confirm')

    const noteText = 'This is a test note.'
    await userEvent.type(textarea, noteText)

    expect(confirmButton).not.toBeDisabled()
    fireEvent.click(confirmButton)

    expect(mockOnConfirm).toHaveBeenCalledWith(noteText)
  })

  it('should call onCancel when Cancel is clicked', () => {
    render(
      <AnnotationNotePopup
        position={mockPosition}
        selectedText={mockSelectedText}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    )
    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)
    expect(mockOnCancel).toHaveBeenCalledTimes(1)
  })

  it('should disable the Confirm button when the textarea is empty', () => {
    render(
      <AnnotationNotePopup
        position={mockPosition}
        selectedText={mockSelectedText}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    )
    const confirmButton = screen.getByText('Confirm')
    expect(confirmButton).toBeDisabled()
  })

  it('should call onCancel when clicking outside the popup', () => {
    render(
      <AnnotationNotePopup
        position={mockPosition}
        selectedText={mockSelectedText}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    )

    fireEvent.mouseDown(document.body)
    expect(mockOnCancel).toHaveBeenCalledTimes(1)
  })
})
