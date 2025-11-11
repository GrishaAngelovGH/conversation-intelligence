import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Header from './Header'

const onToggle = vi.fn()

describe('Header', () => {
  it('should render the Header component and match snapshot', () => {
    const { asFragment } = render(<Header onToggle={onToggle} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should show the information modal when the info button is clicked', () => {
    render(<Header onToggle={onToggle} />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    fireEvent.click(screen.getByLabelText('Information'))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('What is Conversation Intelligence?')).toBeInTheDocument()
  })

  it('should close the modal when the close button is clicked', () => {
    render(<Header onToggle={onToggle} />)

    fireEvent.click(screen.getByLabelText('Information'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Close'))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('should call onToggle when the menu button is clicked', () => {
    render(<Header onToggle={onToggle} />)
    fireEvent.click(screen.getByLabelText('Menu'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})