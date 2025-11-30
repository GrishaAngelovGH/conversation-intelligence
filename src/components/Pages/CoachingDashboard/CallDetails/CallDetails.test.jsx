import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useAnnotations } from 'hooks/useAnnotations'

import CallDetails from './CallDetails'

vi.mock('hooks/useAnnotations')

describe('CallDetails', () => {
  let mockUseAnnotations

  const mockSelectedCall = {
    id: 1,
    transcript: [
      { speaker: 'Agent', text: 'Hello, this is a test line.', annotations: [] },
      { speaker: 'Customer', text: 'Hi, I have a question about my order.', annotations: [] },
    ],
    keywords: [],
    comments: [{ id: 1, author: 'Manager', text: 'Good comment.' }],
  }

  const mockCallWithExistingAnnotation = {
    id: 2,
    transcript: [
      { speaker: 'Agent', text: 'Hello, this is another line.', annotations: [] },
      { speaker: 'Customer', text: 'This is the annotated part of the text.', annotations: [{ id: 101, text: 'annotated part', range: { start: 12, end: 26 }, note: 'Existing annotation note' }] },
    ],
    keywords: [],
    comments: [],
  }


  beforeEach(() => {
    vi.clearAllMocks()

    mockUseAnnotations = {
      transcriptLines: mockSelectedCall.transcript,
      selectedTextInfo: null,
      showNotePopup: false,
      tooltip: { visible: false },
      callDetailsRef: { current: null },
      handleTextSelect: vi.fn(),
      handleBubbleMenuClick: vi.fn(),
      handleNoteConfirm: vi.fn(),
      handleNoteCancel: vi.fn(),
      handleClearAnnotation: vi.fn(),
      getCharacterOffsetWithin: vi.fn(() => ({ start: 0, end: 1 })),
      renderContent: vi.fn((text, keywords, annotations, lineIndex) => {
        if (annotations && annotations.length > 0) {
          const firstAnnotation = annotations[0]
          return (
            <>
              {text.substring(0, firstAnnotation.range.start)}
              <span data-testid="annotated-text" className="underline bg-blue-100">
                {text.substring(firstAnnotation.range.start, firstAnnotation.range.end)}
                <span
                  data-testid="clear-annotation-button"
                  className="clear-icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    mockUseAnnotations.handleClearAnnotation(firstAnnotation.id, lineIndex)
                  }}
                >X</span>
              </span>
              {text.substring(firstAnnotation.range.end)}
            </>
          )
        }
        return text
      }),
    }

    useAnnotations.mockReturnValue(mockUseAnnotations)
  })

  it('should render the transcript and comments correctly', () => {
    render(<CallDetails selectedCall={mockSelectedCall} />)
    expect(screen.getByText('Hello, this is a test line.')).toBeInTheDocument()
    expect(screen.getByText('Good comment.')).toBeInTheDocument()
  })

  it('should display a message when no call is selected', () => {
    useAnnotations.mockReturnValue({
      ...mockUseAnnotations,
      transcriptLines: [],
    })
    render(<CallDetails selectedCall={null} />)
    expect(screen.getByText('Select a call from the list to view its details.')).toBeInTheDocument()
  })

  it('should handle playing and pausing the transcript', async () => {
    render(<CallDetails selectedCall={mockSelectedCall} />)

    const playButton = screen.getByText(/Play Transcript/i)
    await act(async () => {
      await userEvent.click(playButton)
    })

    const pauseButton = await screen.findByText(/Pause Transcript/i)
    expect(pauseButton).toBeInTheDocument()
    expect(speechSynthesis.speak).toHaveBeenCalledTimes(1)

    await act(async () => {
      await userEvent.click(pauseButton)
    })

    const playButtonAgain = await screen.findByText(/Play Transcript/i)
    expect(playButtonAgain).toBeInTheDocument()
    expect(speechSynthesis.cancel).toHaveBeenCalledTimes(1)
  })

  it('should call handleTextSelect on mouse up when text is selected', async () => {
    render(<CallDetails selectedCall={mockSelectedCall} />)

    const transcriptParagraph = screen.getByText('Hi, I have a question about my order.')

    const mockTextNode = {
      nodeType: Node.TEXT_NODE,
      textContent: 'Hi, I have a question about my order.',
      parentElement: transcriptParagraph,
    }

    vi.spyOn(transcriptParagraph, 'contains').mockReturnValue(true)

    const mockRange = {
      startContainer: mockTextNode,
      endContainer: mockTextNode,
      startOffset: mockTextNode.textContent.indexOf('question'),
      endOffset: mockTextNode.textContent.indexOf('question') + 'question'.length,
      getBoundingClientRect: () => ({ left: 50, top: 50, width: 60, height: 20 }),
    }
    const mockSelection = {
      toString: () => 'question',
      getRangeAt: () => mockRange,
      empty: vi.fn(),
    }
    vi.spyOn(window, 'getSelection').mockReturnValue(mockSelection)

    await userEvent.click(transcriptParagraph)

    expect(mockUseAnnotations.handleTextSelect).toHaveBeenCalledWith(
      'question',
      { start: 0, end: 1 },
      expect.any(Object),
      1
    )
    vi.spyOn(transcriptParagraph, 'contains').mockRestore()
  })

  it('should show annotation bubble and popup, and confirm a note', async () => {
    const { rerender } = render(<CallDetails selectedCall={mockSelectedCall} />)
    expect(screen.queryByRole('button', { name: 'Add a note' })).not.toBeInTheDocument()

    const selectedTextInfo = {
      text: 'question',
      range: { start: 10, end: 18 },
      position: { x: 100, y: 100, width: 50, height: 15 },
      lineIndex: 1,
    }
    useAnnotations.mockReturnValueOnce({
      ...mockUseAnnotations,
      selectedTextInfo,
    })
    rerender(<CallDetails selectedCall={mockSelectedCall} />)

    const bubbleButton = screen.getByRole('button', { name: 'Add a note' })
    expect(bubbleButton).toBeInTheDocument()

    await userEvent.click(bubbleButton)
    expect(mockUseAnnotations.handleBubbleMenuClick).toHaveBeenCalledTimes(1)

    useAnnotations.mockReturnValueOnce({
      ...mockUseAnnotations,
      selectedTextInfo,
      showNotePopup: true,
    })
    rerender(<CallDetails selectedCall={mockSelectedCall} />)

    const noteTextarea = screen.getByPlaceholderText('Add your note here...')
    const confirmButton = screen.getByText('Confirm')

    await userEvent.type(noteTextarea, 'This is a test note.')
    await userEvent.click(confirmButton)

    expect(mockUseAnnotations.handleNoteConfirm).toHaveBeenCalledWith('This is a test note.')
  })

  it('should allow adding a comment', async () => {
    const onNewCommentChange = vi.fn()
    const onAddComment = vi.fn()
    const commentText = 'This is a test comment.'

    render(
      <CallDetails
        selectedCall={mockSelectedCall}
        newComment={commentText}
        onNewCommentChange={onNewCommentChange}
        onAddComment={onAddComment}
      />
    )

    const commentTextarea = screen.getByPlaceholderText('Add a comment...')
    expect(commentTextarea).toHaveValue(commentText)

    const addButton = screen.getByText('Add Comment')
    await userEvent.click(addButton)

    expect(onAddComment).toHaveBeenCalledTimes(1)
    expect(onAddComment).toHaveBeenCalledWith(commentText)
  })

  it('should call handleClearAnnotation when the clear icon is clicked on an annotation', async () => {
    useAnnotations.mockReturnValue({
      ...mockUseAnnotations,
      transcriptLines: mockCallWithExistingAnnotation.transcript,
      handleClearAnnotation: vi.fn(),
      renderContent: vi.fn((text, keywords, annotations, lineIndex) => {
        if (annotations && annotations.length > 0) {
          const firstAnnotation = annotations[0]
          return (
            <>
              {text.substring(0, firstAnnotation.range.start)}
              <span data-testid="annotated-text" className="underline bg-blue-100">
                {text.substring(firstAnnotation.range.start, firstAnnotation.range.end)}
                <span
                  data-testid="clear-annotation-button"
                  className="clear-icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    useAnnotations().handleClearAnnotation(firstAnnotation.id, lineIndex)
                  }}
                >X</span>
              </span>
              {text.substring(firstAnnotation.range.end)}
            </>
          )
        }
        return text
      }),
    })

    render(<CallDetails selectedCall={mockCallWithExistingAnnotation} />)

    const clearButton = screen.getByTestId('clear-annotation-button')

    await act(async () => {
      await userEvent.click(clearButton)
    })

    expect(useAnnotations().handleClearAnnotation).toHaveBeenCalledTimes(1)
    expect(useAnnotations().handleClearAnnotation).toHaveBeenCalledWith(
      mockCallWithExistingAnnotation.transcript[1].annotations[0].id,
      1
    )
  })
})