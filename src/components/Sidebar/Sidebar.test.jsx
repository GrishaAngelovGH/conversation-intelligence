import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from './Sidebar'

describe('Sidebar', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render correctly when not toggled (desktop view)', () => {
    const { asFragment } = render(
      <Router>
        <Sidebar isToggled={false} onToggle={vi.fn()} />
      </Router>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Transcript Summary')).toBeInTheDocument()
    expect(screen.getByText('Seller Details')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly when toggled (mobile overlay view)', () => {
    const { asFragment } = render(
      <Router>
        <Sidebar isToggled={true} onToggle={vi.fn()} />
      </Router>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Transcript Summary')).toBeInTheDocument()
    expect(screen.getByText('Seller Details')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call onToggle when a menu item is clicked and isToggled is true', () => {
    const onToggle = vi.fn()
    render(
      <Router>
        <Sidebar isToggled={true} onToggle={onToggle} />
      </Router>
    )
    fireEvent.click(screen.getByText('Home'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
