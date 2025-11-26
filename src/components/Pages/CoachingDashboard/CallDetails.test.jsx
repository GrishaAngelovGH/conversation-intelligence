import { render, screen, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, beforeEach } from 'vitest'

import CallDetails from './CallDetails'

const mockSelectedCall = {
  transcript: [
    { speaker: 'Agent', text: 'Hello, how can I help you today?' },
    { speaker: 'Customer', text: 'Hi, I have a question about my order.' },
  ],
  comments: [
    { id: 1, author: 'Manager', text: 'Good job handling the customer.' },
  ],
}

const mockUtteranceInstance = {
  text: '',
  pitch: 1,
  rate: 1,
  volume: 1,
  voice: null,
  lang: '',
  onstart: null,
  onend: null,
  onerror: null,
}

const SpeechSynthesisUtteranceMock = vi.fn(function (text) {
  this.text = text
  this.pitch = 1
  this.rate = 1
  this.volume = 1
  this.voice = null
  this.lang = ''
  this.onstart = vi.fn()
  this.onend = vi.fn()
  this.onerror = vi.fn()

  Object.assign(mockUtteranceInstance, this)
})

const mockSpeechSynthesis = {
  speak: vi.fn((utterance) => {
    if (utterance.onstart) {
      utterance.onstart()
    }
    mockSpeechSynthesis.speaking = true
  }),
  cancel: vi.fn(() => {
    if (mockUtteranceInstance.onend) {
      mockUtteranceInstance.onend()
    }
    mockSpeechSynthesis.speaking = false
  }),
  speaking: false
}

window.SpeechSynthesisUtterance = SpeechSynthesisUtteranceMock
window.speechSynthesis = mockSpeechSynthesis


describe('CallDetails', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockSpeechSynthesis.speaking = false
    Object.assign(mockUtteranceInstance, {
      onstart: vi.fn(),
      onend: vi.fn(),
      onerror: vi.fn(),
      text: '', pitch: 1, rate: 1, volume: 1, voice: null, lang: '',
    })
  })

  it('should render the transcript and comments correctly', () => {
    render(<CallDetails selectedCall={mockSelectedCall} />)
    expect(screen.getByText('Hello, how can I help you today?')).toBeInTheDocument()
    expect(screen.getByText('Good job handling the customer.')).toBeInTheDocument()
    expect(screen.getByText('Play Transcript')).toBeInTheDocument()
  })

  it('should display a message when no call is selected', () => {
    render(<CallDetails selectedCall={null} />)
    expect(screen.getByText('Select a call from the list to view its details.')).toBeInTheDocument()
  })

  it('should call speechSynthesis.cancel when selectedCall changes', async () => {
    const { rerender } = render(<CallDetails selectedCall={mockSelectedCall} />)

    fireEvent.click(screen.getByText('Play Transcript'))
    await act(async () => {
      mockUtteranceInstance.onstart()
      mockSpeechSynthesis.speaking = true
    })

    const newMockCall = { ...mockSelectedCall, id: 99 }
    rerender(<CallDetails selectedCall={newMockCall} />)

    expect(mockSpeechSynthesis.cancel).toHaveBeenCalledTimes(1)
  })

  it('should render correctly with empty transcript and comments', () => {
    const emptyCall = {
      ...mockSelectedCall,
      transcript: [],
      comments: [],
    }
    render(<CallDetails selectedCall={emptyCall} />)
    expect(screen.getByText('Call Transcript')).toBeInTheDocument()
    expect(screen.getByText('Manager Comments')).toBeInTheDocument()
    expect(screen.queryByText('Hello, how can I help you today?')).not.toBeInTheDocument()
    expect(screen.queryByText('Good job handling the customer.')).not.toBeInTheDocument()
  })

  it('should allow adding a comment', async () => {
    const onNewCommentChange = vi.fn()
    const onAddComment = vi.fn()
    render(
      <CallDetails
        selectedCall={mockSelectedCall}
        newComment=""
        onNewCommentChange={onNewCommentChange}
        onAddComment={onAddComment}
      />
    )

    const commentText = 'This is a test comment.'
    const commentTextarea = screen.getByPlaceholderText('Add a comment...')
    const addButton = screen.getByText('Add Comment')

    await userEvent.type(commentTextarea, commentText)
    fireEvent.click(addButton)

    expect(onAddComment).toHaveBeenCalledTimes(1)
  })
})