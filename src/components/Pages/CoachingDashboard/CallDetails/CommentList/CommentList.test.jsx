import { render, screen } from '@testing-library/react'
import CommentList from './CommentList'

describe('CommentList', () => {
  const mockComments = [
    { id: 1, author: 'Manager One', text: 'Great call!' },
    { id: 2, author: 'Manager Two', text: 'Good points were made.' },
  ]

  it('should render a list of comments correctly', () => {
    render(<CommentList comments={mockComments} />)

    expect(screen.getByText('Manager One')).toBeInTheDocument()
    expect(screen.getByText('Great call!')).toBeInTheDocument()
    expect(screen.getByText('Manager Two')).toBeInTheDocument()
    expect(screen.getByText('Good points were made.')).toBeInTheDocument()
  })

  it('should render correctly with an empty array of comments', () => {
    render(<CommentList comments={[]} />)
    expect(screen.queryByText('Manager One')).not.toBeInTheDocument()
  })
})
