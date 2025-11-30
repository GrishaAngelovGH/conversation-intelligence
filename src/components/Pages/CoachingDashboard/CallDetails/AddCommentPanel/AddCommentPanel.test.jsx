import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddCommentPanel from './AddCommentPanel'

describe('AddCommentPanel', () => {
  let mockOnNewCommentChange
  let mockOnAddComment
  let currentNewComment

  beforeEach(() => {
    currentNewComment = ''
    mockOnNewCommentChange = vi.fn((value) => {
      currentNewComment = value
    })
    mockOnAddComment = vi.fn()
  })

  it('should render the textarea and button', () => {
    render(
      <AddCommentPanel
        newComment={currentNewComment}
        onNewCommentChange={mockOnNewCommentChange}
        onAddComment={mockOnAddComment}
      />
    )

    expect(screen.getByPlaceholderText('Add a comment...')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Add Comment/i })).toBeInTheDocument()
  })

  it('should call onNewCommentChange when textarea value changes', async () => {
    const { rerender } = render(
      <AddCommentPanel
        newComment={currentNewComment}
        onNewCommentChange={mockOnNewCommentChange}
        onAddComment={mockOnAddComment}
      />
    )

    const textarea = screen.getByPlaceholderText('Add a comment...')

    fireEvent.change(textarea, { target: { value: 'New text' } })

    rerender(
      <AddCommentPanel
        newComment={currentNewComment}
        onNewCommentChange={mockOnNewCommentChange}
        onAddComment={mockOnAddComment}
      />
    )

    await waitFor(() => {
      expect(mockOnNewCommentChange).toHaveBeenLastCalledWith('New text')
      expect(textarea).toHaveValue('New text')
    })
  })

  it('should call onAddComment when button is clicked with content', async () => {
    currentNewComment = 'Some text'
    const { rerender } = render(
      <AddCommentPanel
        newComment={currentNewComment}
        onNewCommentChange={mockOnNewCommentChange}
        onAddComment={mockOnAddComment}
      />
    )

    rerender(
      <AddCommentPanel
        newComment={currentNewComment}
        onNewCommentChange={mockOnNewCommentChange}
        onAddComment={mockOnAddComment}
      />
    )

    const addButton = screen.getByRole('button', { name: /Add Comment/i })
    expect(addButton).not.toBeDisabled()

    await userEvent.click(addButton)

    expect(mockOnAddComment).toHaveBeenCalledTimes(1)
    expect(mockOnAddComment).toHaveBeenCalledWith('Some text')
  })

  it('should not call onAddComment when button is clicked with empty content (disabled)', async () => {
    currentNewComment = ''
    const { rerender } = render(
      <AddCommentPanel
        newComment={currentNewComment}
        onNewCommentChange={mockOnNewCommentChange}
        onAddComment={mockOnAddComment}
      />
    )

    rerender(
      <AddCommentPanel
        newComment={currentNewComment}
        onNewCommentChange={mockOnNewCommentChange}
        onAddComment={mockOnAddComment}
      />
    )

    const addButton = screen.getByRole('button', { name: /Add Comment/i })
    expect(addButton).toBeDisabled()

    await userEvent.click(addButton)

    expect(mockOnAddComment).not.toHaveBeenCalled()
  })
})
