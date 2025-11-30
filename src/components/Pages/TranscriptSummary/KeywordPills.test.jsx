import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

  test('adds a new keyword on button click', async () => {
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

    await userEvent.type(input, 'newkeyword')
    await userEvent.click(addButton)

    expect(mockOnAddKeyword).toHaveBeenCalledTimes(1)
    expect(mockOnAddKeyword).toHaveBeenCalledWith('newkeyword')
    expect(input).toHaveValue('')
  })

  test('adds a new keyword on Enter key press', async () => {
    const keywords = ['existing']
    render(
      <KeywordPills
        keywords={keywords}
        onAddKeyword={mockOnAddKeyword}
        onRemoveKeyword={mockOnRemoveKeyword}
      />
    )

    const input = screen.getByPlaceholderText('Add new keyword')

    await userEvent.type(input, 'enterkey')
    await userEvent.keyboard('{Enter}')

    expect(mockOnAddKeyword).toHaveBeenCalledTimes(1)
    expect(mockOnAddKeyword).toHaveBeenCalledWith('enterkey')
    expect(input).toHaveValue('')
  })

  test('removes a keyword on "x" button click', async () => {
    const keywords = ['toremove']
    render(
      <KeywordPills
        keywords={keywords}
        onAddKeyword={mockOnAddKeyword}
        onRemoveKeyword={mockOnRemoveKeyword}
      />
    )

    const removeButton = screen.getByRole('button', { name: /remove toremove/i })
    await userEvent.click(removeButton)

    expect(mockOnRemoveKeyword).toHaveBeenCalledTimes(1)
    expect(mockOnRemoveKeyword).toHaveBeenCalledWith('toremove')
  })

  test('does not add duplicate keywords', async () => {
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

    await userEvent.type(input, 'duplicate')
    await userEvent.click(addButton)

    expect(mockOnAddKeyword).not.toHaveBeenCalled()
    expect(input).toHaveValue('duplicate')
  })

  test('does not add empty or whitespace-only keywords', async () => {
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

    await userEvent.clear(input)
    await userEvent.click(addButton)
    expect(mockOnAddKeyword).not.toHaveBeenCalled()

    await userEvent.type(input, '   ')
    await userEvent.click(addButton)
    expect(mockOnAddKeyword).not.toHaveBeenCalled()
  })
})
