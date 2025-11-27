import { render, screen, fireEvent } from '@testing-library/react'

import KeywordPills from './KeywordPills'

describe('KeywordPills', () => {
  const mockOnAddKeyword = vi.fn()
  const mockOnRemoveKeyword = vi.fn()

  beforeEach(() => {
    mockOnAddKeyword.mockClear()
    mockOnRemoveKeyword.mockClear()
  })

  test('renders correctly with initial keywords', () => {
    const keywords = ['react', 'testing', 'component']
    const { asFragment } = render(
      <KeywordPills
        keywords={keywords}
        onAddKeyword={mockOnAddKeyword}
        onRemoveKeyword={mockOnRemoveKeyword}
      />
    )

    keywords.forEach(keyword => {
      expect(screen.getByText(keyword)).toBeInTheDocument()
    })

    expect(screen.getByPlaceholderText('Add new keyword')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot()
  })

  test('adds a new keyword on button click', () => {
    const keywords = ['existing']
    render(
      <KeywordPills
        keywords={keywords}
        onAddKeyword={mockOnAddKeyword}
        onRemoveKeyword={mockOnRemoveKeyword}
      />
    )

    const input = screen.getByPlaceholderText('Add new keyword')
    const addButton = screen.getByRole('button', { name: /add/i })

    fireEvent.change(input, { target: { value: 'newkeyword' } })
    fireEvent.click(addButton)

    expect(mockOnAddKeyword).toHaveBeenCalledTimes(1)
    expect(mockOnAddKeyword).toHaveBeenCalledWith('newkeyword')
    expect(input).toHaveValue('')
  })

  test('adds a new keyword on Enter key press', () => {
    const keywords = ['existing']
    render(
      <KeywordPills
        keywords={keywords}
        onAddKeyword={mockOnAddKeyword}
        onRemoveKeyword={mockOnRemoveKeyword}
      />
    )

    const input = screen.getByPlaceholderText('Add new keyword')

    fireEvent.change(input, { target: { value: 'enterkey' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(mockOnAddKeyword).toHaveBeenCalledTimes(1)
    expect(mockOnAddKeyword).toHaveBeenCalledWith('enterkey')
    expect(input).toHaveValue('')
  })

  test('removes a keyword on "x" button click', () => {
    const keywords = ['toremove']
    render(
      <KeywordPills
        keywords={keywords}
        onAddKeyword={mockOnAddKeyword}
        onRemoveKeyword={mockOnRemoveKeyword}
      />
    )

    const removeButton = screen.getByRole('button', { name: /remove toremove/i })
    fireEvent.click(removeButton)

    expect(mockOnRemoveKeyword).toHaveBeenCalledTimes(1)
    expect(mockOnRemoveKeyword).toHaveBeenCalledWith('toremove')
  })

  test('does not add duplicate keywords', () => {
    const keywords = ['duplicate']
    render(
      <KeywordPills
        keywords={keywords}
        onAddKeyword={mockOnAddKeyword}
        onRemoveKeyword={mockOnRemoveKeyword}
      />
    )

    const input = screen.getByPlaceholderText('Add new keyword')
    const addButton = screen.getByRole('button', { name: /add/i })

    fireEvent.change(input, { target: { value: 'duplicate' } })
    fireEvent.click(addButton)

    expect(mockOnAddKeyword).not.toHaveBeenCalled()
    expect(input).toHaveValue('duplicate')
  })

  test('does not add empty or whitespace-only keywords', () => {
    const keywords = []
    render(
      <KeywordPills
        keywords={keywords}
        onAddKeyword={mockOnAddKeyword}
        onRemoveKeyword={mockOnRemoveKeyword}
      />
    )

    const input = screen.getByPlaceholderText('Add new keyword')
    const addButton = screen.getByRole('button', { name: /add/i })

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.click(addButton)
    expect(mockOnAddKeyword).not.toHaveBeenCalled()

    fireEvent.change(input, { target: { value: '   ' } })
    fireEvent.click(addButton)
    expect(mockOnAddKeyword).not.toHaveBeenCalled()
  })
})
