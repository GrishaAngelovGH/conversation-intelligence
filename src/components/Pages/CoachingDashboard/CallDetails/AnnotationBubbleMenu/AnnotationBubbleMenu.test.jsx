import { render, screen, fireEvent } from '@testing-library/react'

import AnnotationBubbleMenu from './AnnotationBubbleMenu'

describe('AnnotationBubbleMenu', () => {
  it('should not render when position is null', () => {
    const { container } = render(<AnnotationBubbleMenu position={null} onClick={() => { }} />)
    expect(container.firstChild).toBeNull()
  })

  it('should render correctly when a position is provided', () => {
    const position = { x: 100, y: 150, width: 50, height: 20 }
    render(<AnnotationBubbleMenu position={position} onClick={() => { }} />)

    const bubbleButton = screen.getByRole('button', { name: 'Add a note' })
    expect(bubbleButton).toBeInTheDocument()

    expect(bubbleButton).toHaveStyle({
      left: `${position.x + position.width}px`,
      top: `${position.y - 40}px`,
    })
  })

  it('should call onClick handler when clicked', () => {
    const handleClick = vi.fn()
    const position = { x: 100, y: 150, width: 50, height: 20 }
    render(<AnnotationBubbleMenu position={position} onClick={handleClick} />)

    const bubbleButton = screen.getByRole('button', { name: 'Add a note' })
    fireEvent.click(bubbleButton)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
