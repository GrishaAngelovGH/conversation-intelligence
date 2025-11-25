import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CallDetails from './CallDetails'


const mockSelectedCall = {
  transcript: [
    { speaker: 'Agent', text: 'Hello' },
    { speaker: 'Customer', text: 'Hi' },
  ],
  comments: [
    { id: 1, author: 'Manager', text: 'Good job' },
  ],
}

describe('CallDetails', () => {
  it('should render the transcript and comments', () => {
    render(<CallDetails selectedCall={mockSelectedCall} />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('Good job')).toBeInTheDocument()
  })

  it('should call onNewCommentChange when the user types in the textarea', async () => {
    const onNewCommentChange = vi.fn()
    render(
      <CallDetails
        selectedCall={mockSelectedCall}
        newComment=""
        onNewCommentChange={onNewCommentChange}
      />
    )

    const commentTextarea = screen.getByPlaceholderText('Add a comment...')
    await userEvent.type(commentTextarea, 'a')

    expect(onNewCommentChange).toHaveBeenCalledWith('a')
  })

  it('should call onAddComment when the add comment button is clicked', () => {
    const onAddComment = vi.fn()
    render(<CallDetails selectedCall={mockSelectedCall} onAddComment={onAddComment} />)

    const addButton = screen.getByText('Add Comment')
    fireEvent.click(addButton)

    expect(onAddComment).toHaveBeenCalled()
  })

  it('should show a message when no call is selected', () => {
    render(<CallDetails selectedCall={null} />)
    expect(screen.getByText('Select a call from the list to view its details.')).toBeInTheDocument();
  })
})
