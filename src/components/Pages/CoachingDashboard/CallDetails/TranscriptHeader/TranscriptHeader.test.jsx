import { render, screen, fireEvent } from '@testing-library/react'
import TranscriptHeader from './TranscriptHeader'

describe('TranscriptHeader', () => {
  it('should render the component', () => {
    render(<TranscriptHeader isPlaying={false} onPlayPause={() => { }} />)
    expect(screen.getByText('Call Transcript')).toBeInTheDocument()
  })

  it('should call onPlayPause when the button is clicked', () => {
    const onPlayPause = vi.fn()
    render(<TranscriptHeader isPlaying={false} onPlayPause={onPlayPause} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onPlayPause).toHaveBeenCalledTimes(1)
  })

  it('should show "Pause" when isPlaying is true', () => {
    render(<TranscriptHeader isPlaying={true} onPlayPause={() => { }} />)
    expect(screen.getByText('Pause Transcript')).toBeInTheDocument()
  })

  it('should show "Play" when isPlaying is false', () => {
    render(<TranscriptHeader isPlaying={false} onPlayPause={() => { }} />)
    expect(screen.getByText('Play Transcript')).toBeInTheDocument()
  })
})
