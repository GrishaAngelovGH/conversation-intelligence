import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CoachingDashboard from './CoachingDashboard'

describe('CoachingDashboard', () => {
  it('should render the CoachingDashboard component and match snapshot', () => {
    const { asFragment } = render(<CoachingDashboard />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should allow a user to add a comment', async () => {
    render(<CoachingDashboard />)

    const commentText = 'This is a test comment.'
    const commentTextarea = screen.getByPlaceholderText('Add a comment...')
    const addButton = screen.getByText('Add Comment')

    await userEvent.type(commentTextarea, commentText)
    await userEvent.click(addButton)

    expect(screen.getByText(commentText)).toBeInTheDocument()
  })
})
