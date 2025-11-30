import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'

import Header from './Header'

const onToggle = vi.fn()

describe('Header', () => {
  it('should render the Header component and match snapshot', () => {
    const { asFragment } = render(<Header onToggle={onToggle} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should show the information modal when the info button is clicked', async () => {
    render(<Header onToggle={onToggle} />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await userEvent.click(screen.getByLabelText('Information'))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('What is Conversation Intelligence?')).toBeInTheDocument()
  })

  it('should close the modal when the close button is clicked', async () => {
    render(<Header onToggle={onToggle} />)

    await userEvent.click(screen.getByLabelText('Information'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await userEvent.click(screen.getByText('Close'))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('should call onToggle when the menu button is clicked', async () => {
    render(<Header onToggle={onToggle} />)
    await userEvent.click(screen.getByLabelText('Menu'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})