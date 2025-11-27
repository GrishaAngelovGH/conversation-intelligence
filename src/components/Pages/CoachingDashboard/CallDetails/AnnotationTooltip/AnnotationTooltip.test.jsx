import { render, screen } from '@testing-library/react'

import AnnotationTooltip from './AnnotationTooltip'

describe('AnnotationTooltip', () => {
  it('should not render when visible is false', () => {
    const { container } = render(
      <AnnotationTooltip note="Test note" position={{ x: 100, y: 100 }} visible={false} />
    )
    expect(container.firstChild).toBeNull()
  })

  it('should not render when position is null', () => {
    const { container } = render(
      <AnnotationTooltip note="Test note" position={null} visible={true} />
    )
    expect(container.firstChild).toBeNull()
  })

  it('should render with the correct note and style when visible and positioned', () => {
    const noteText = 'This is a tooltip note.'
    const position = { x: 150, y: 200 }
    render(<AnnotationTooltip note={noteText} position={position} visible={true} />)

    const tooltip = screen.getByText(noteText)
    expect(tooltip).toBeInTheDocument()

    expect(tooltip).toHaveStyle({
      left: `${position.x}px`,
      top: `${position.y}px`,
      position: 'fixed',
    })
  })

  it('should render multiline notes correctly', () => {
    const noteText = 'Line 1\nLine 2'
    render(<AnnotationTooltip note={noteText} position={{ x: 100, y: 100 }} visible={true} />)

    const tooltip = screen.getByText((content, element) => {
      const hasText = element.textContent === noteText
      const hasNoChildElements = element.children.length === 0
      return hasText && hasNoChildElements
    })

    expect(tooltip).toBeInTheDocument()
    expect(tooltip).toHaveStyle({
      whiteSpace: 'pre-wrap',
    })
  })
})
