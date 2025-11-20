import { render, screen } from '@testing-library/react'

import Transcript, { TranscriptRow } from './Transcript'

describe('Transcript', () => {
  test('should render Transcript component and KeywordPills with initial keywords', () => {
    const mockInitialTranscriptData = [
      { id: 1, attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' }, duration: '00:05', content: 'Hello world.' },
    ]
    const mockKeywords = ['madison', 'james', 'quote', 'yesterday', 'isabel', 'today']
    const mockOnAddKeyword = vi.fn()
    const mockOnRemoveKeyword = vi.fn()

    const view = render(
      <Transcript
        initialTranscriptData={mockInitialTranscriptData}
        keywords={mockKeywords}
        onAddKeyword={mockOnAddKeyword}
        onRemoveKeyword={mockOnRemoveKeyword}
      />
    )

    expect(screen.getByText('Keywords')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /remove madison/i }).closest('span')).toHaveTextContent('madison')
    expect(screen.getByRole('button', { name: /remove james/i }).closest('span')).toHaveTextContent('james')
    expect(screen.getByRole('button', { name: /remove quote/i }).closest('span')).toHaveTextContent('quote')
    expect(screen.getByRole('button', { name: /remove yesterday/i }).closest('span')).toHaveTextContent('yesterday')
    expect(screen.getByRole('button', { name: /remove isabel/i }).closest('span')).toHaveTextContent('isabel')
    expect(screen.getByRole('button', { name: /remove today/i }).closest('span')).toHaveTextContent('today')

    expect(view).toMatchSnapshot()
  })
})

describe('TranscriptRow', () => {
  test('should render TranscriptRow component with content and highlights', () => {
    const transcriptItem = {
      attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' },
      duration: '00:10',
      content: 'Good morning, <span className="font-bold">Madison</span>, how are you?',
    }
    const keywords = ['madison']

    const { asFragment } = render(
      <TranscriptRow
        attendee={transcriptItem.attendee}
        duration={transcriptItem.duration}
        content={transcriptItem.content}
        keywords={keywords}
      />
    )

    const highlightedSpan = screen.getByText('Madison', { exact: false })
    expect(highlightedSpan).toBeInTheDocument()
    expect(highlightedSpan).toHaveClass('bg-yellow-200')

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render TranscriptRow component without highlights if no keywords', () => {
    const transcriptItem = {
      attendee: { shortName: 'JS', fullName: 'James Smith', color: 'bg-blue-200' },
      duration: '00:10',
      content: 'Good morning, Madison, how are you?',
    }
    const keywords = []

    const { asFragment } = render(
      <TranscriptRow
        attendee={transcriptItem.attendee}
        duration={transcriptItem.duration}
        content={transcriptItem.content}
        keywords={keywords}
      />
    )

    const textElement = screen.getByText('Madison', { exact: false })
    expect(textElement).toBeInTheDocument()
    expect(textElement).not.toHaveClass('bg-yellow-200')

    expect(asFragment()).toMatchSnapshot()
  })
})