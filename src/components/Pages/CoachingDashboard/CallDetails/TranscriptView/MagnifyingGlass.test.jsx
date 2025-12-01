import { render, screen } from '@testing-library/react'

import MagnifyingGlass from './MagnifyingGlass'

describe('MagnifyingGlass', () => {
  it('should be hidden when no text is selected', () => {
    render(<MagnifyingGlass selectedText="" position={{ x: 0, y: 0 }} />)
    const magnifier = screen.getByTestId('magnifying-glass')
    expect(magnifier).toHaveStyle('visibility: hidden')
  })

  it('should be visible when text is selected', () => {
    render(<MagnifyingGlass selectedText="Hello" position={{ x: 100, y: 100 }} />)
    const magnifier = screen.getByTestId('magnifying-glass')
    expect(magnifier).toHaveStyle('visibility: visible')
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
