import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { describe, it, expect } from 'vitest';

describe('Header', () => {
  it('should render the Header component and match snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show the information modal when the info button is clicked', () => {
    render(<Header />);
    
    // Modal should be hidden initially
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // Click the info button
    fireEvent.click(screen.getByLabelText('Information'));

    // Modal should be visible
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('What is Conversation Intelligence?')).toBeInTheDocument();
  });

  it('should close the modal when the close button is clicked', () => {
    render(<Header />);
    
    // Open the modal first
    fireEvent.click(screen.getByLabelText('Information'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Click the close button
    fireEvent.click(screen.getByText('Close'));

    // Modal should be hidden
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});