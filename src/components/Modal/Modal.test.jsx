import { render, screen, fireEvent } from '@testing-library/react'
import Modal from './Modal'
import { describe, it, expect, vi } from 'vitest'

describe('Modal', () => {
  it('should match snapshot when open', () => {
    const { asFragment } = render(
      <Modal isOpen={true} title="Snapshot Modal Title">
        <p>This is the content for the snapshot test.</p>
      </Modal>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should match snapshot when closed', () => {
    const { asFragment } = render(
      <Modal isOpen={false} title="Snapshot Modal Title">
        <p>This is the content for the snapshot test.</p>
      </Modal>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not render when isOpen is false', () => {
    render(<Modal isOpen={false} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('should render when isOpen is true', () => {
    render(<Modal isOpen={true} title="Test Modal"><div>Modal Content</div></Modal>)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Modal Content')).toBeInTheDocument()
  })

  it('should call onClose when the close button is clicked', () => {
    const onClose = vi.fn()
    render(<Modal isOpen={true} onClose={onClose} />)
    fireEvent.click(screen.getByText('Close'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
