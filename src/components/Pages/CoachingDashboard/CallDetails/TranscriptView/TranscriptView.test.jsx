import { render, screen, fireEvent, act } from '@testing-library/react'
import TranscriptView from './TranscriptView'

describe('TranscriptView', () => {
  const mockTranscriptLines = [
    { speaker: 'Agent', text: 'Hello, this is agent.' },
    { speaker: 'Customer', text: 'I have a question.' },
  ]
  const mockSelectedCall = { keywords: [], annotations: [] }
  const mockOnTextSelect = vi.fn()
  const mockGetCharacterOffsetWithin = vi.fn(() => ({ start: 0, end: 5 }))
  const mockRenderContent = vi.fn((content) => content)

  beforeEach(() => {
    mockOnTextSelect.mockClear()
    mockGetCharacterOffsetWithin.mockClear()
    mockRenderContent.mockClear()
  })

  it('should render transcript lines correctly', () => {
    render(
      <TranscriptView
        transcriptLines={mockTranscriptLines}
        selectedCall={mockSelectedCall}
        onTextSelect={mockOnTextSelect}
        getCharacterOffsetWithin={mockGetCharacterOffsetWithin}
        renderContent={mockRenderContent}
      />
    )

    expect(screen.getByText('Agent:')).toBeInTheDocument()
    expect(screen.getByText('Hello, this is agent.')).toBeInTheDocument()
    expect(screen.getByText('Customer:')).toBeInTheDocument()
    expect(screen.getByText('I have a question.')).toBeInTheDocument()
  })

  it('should apply speaker classes correctly', () => {
    render(
      <TranscriptView
        transcriptLines={mockTranscriptLines}
        selectedCall={mockSelectedCall}
        onTextSelect={mockOnTextSelect}
        getCharacterOffsetWithin={mockGetCharacterOffsetWithin}
        renderContent={mockRenderContent}
      />
    )

    // Get the outer divs that control text alignment
    const agentOuterDiv = screen.getByText('Agent:').closest('.flex.items-start')
    const customerOuterDiv = screen.getByText('Customer:').closest('.flex.items-start')

    expect(agentOuterDiv).toHaveClass('justify-end')
    expect(customerOuterDiv).toHaveClass('justify-start')

    // Get the inner divs that control background color
    const agentInnerDiv = screen.getByText('Hello, this is agent.').closest('div.relative')
    const customerInnerDiv = screen.getByText('I have a question.').closest('div.relative')

    expect(agentInnerDiv).toHaveClass('bg-blue-500')
    expect(customerInnerDiv).toHaveClass('bg-gray-200')
  })

  it('should call onTextSelect with selected text info on mouseup', () => {
    const mockSelection = {
      toString: () => 'Hello',
      getRangeAt: () => ({
        getBoundingClientRect: () => ({ x: 10, y: 20, width: 50, height: 15, left: 10, top: 20, right: 60, bottom: 35 }),
        startContainer: {},
        focusNode: {},
      }),
    }
    vi.spyOn(window, 'getSelection').mockReturnValue(mockSelection)

    render(
      <TranscriptView
        transcriptLines={mockTranscriptLines}
        selectedCall={mockSelectedCall}
        onTextSelect={mockOnTextSelect}
        getCharacterOffsetWithin={mockGetCharacterOffsetWithin}
        renderContent={mockRenderContent}
      />
    )

    // Find the paragraph element after it has rendered
    const paragraphElement = screen.getByText('Hello, this is agent.').closest('p')

    // Manually call the onmouseup handler that would be set by the ref callback
    act(() => {
      if (paragraphElement && paragraphElement.onmouseup) {
        paragraphElement.onmouseup()
      }
    })

    expect(mockGetCharacterOffsetWithin).toHaveBeenCalled()
    expect(mockOnTextSelect).toHaveBeenCalledWith(
      'Hello',
      { start: 0, end: 5 }, // Mocked return value
      { x: 10, y: 20, width: 50, height: 15 }, // Expect raw x, y from getBoundingClientRect
      0 // lineIndex
    )
  })

  it('should call onTextSelect with null if no text is selected on mouseup', () => {
    vi.spyOn(window, 'getSelection').mockReturnValue({
      toString: () => '',
      getRangeAt: () => ({}), // Empty range
    })

    render(
      <TranscriptView
        transcriptLines={mockTranscriptLines}
        selectedCall={mockSelectedCall}
        onTextSelect={mockOnTextSelect}
        getCharacterOffsetWithin={mockGetCharacterOffsetWithin}
        renderContent={mockRenderContent}
      />
    )

    const paragraph = screen.getByText('Hello, this is agent.').closest('p')
    act(() => {
      fireEvent.mouseUp(paragraph)
    })

    expect(mockOnTextSelect).toHaveBeenCalledWith(null)
  })
})
