import { renderHook } from '@testing-library/react'

import useHighlight from 'hooks/useHighlight'

describe('useHighlight', () => {
  test('should return original text if no keywords are provided', () => {
    const text = 'Hello world'
    const keywords = []
    const { result } = renderHook(() => useHighlight(text, keywords))
    expect(result.current).toBe(text)
  })

  test('should return original text if text is empty or null', () => {
    const keywords = ['test']
    const { result: emptyTextResult } = renderHook(() => useHighlight('', keywords))
    expect(emptyTextResult.current).toBe('')

    const { result: nullTextResult } = renderHook(() => useHighlight(null, keywords))
    expect(nullTextResult.current).toBe(null)
  })

  test('should highlight single keyword correctly', () => {
    const text = 'Hello world, this is a test.'
    const keywords = ['world']
    const { result } = renderHook(() => useHighlight(text, keywords))

    expect(result.current.length).toBe(3)
    expect(result.current[0]).toBe('Hello ')
    expect(result.current[1].type).toBe('span')
    expect(result.current[1].props.className).toBe('bg-yellow-200')
    expect(result.current[1].props.children).toBe('world')
    expect(typeof result.current[1].key).toBe('string')
    expect(result.current[2]).toBe(', this is a test.')
  })

  test('should highlight multiple distinct keywords correctly', () => {
    const text = 'Hello world, this is a test.'
    const keywords = ['world', 'test']
    const { result } = renderHook(() => useHighlight(text, keywords))

    expect(result.current.length).toBe(5)
    expect(result.current[0]).toBe('Hello ')
    expect(result.current[1].type).toBe('span')
    expect(result.current[1].props.className).toBe('bg-yellow-200')
    expect(result.current[1].props.children).toBe('world')
    expect(typeof result.current[1].key).toBe('string')
    expect(result.current[2]).toBe(', this is a ')
    expect(result.current[3].type).toBe('span')
    expect(result.current[3].props.className).toBe('bg-yellow-200')
    expect(result.current[3].props.children).toBe('test')
    expect(typeof result.current[3].key).toBe('string')
    expect(result.current[4]).toBe('.')
  })

  test('should handle case-insensitivity for keywords', () => {
    const text = 'Hello WORLD, this is a TeSt.'
    const keywords = ['world', 'test']
    const { result } = renderHook(() => useHighlight(text, keywords))

    expect(result.current.length).toBe(5)
    expect(result.current[0]).toBe('Hello ')
    expect(result.current[1].type).toBe('span')
    expect(result.current[1].props.className).toBe('bg-yellow-200')
    expect(result.current[1].props.children).toBe('WORLD')
    expect(typeof result.current[1].key).toBe('string')
    expect(result.current[2]).toBe(', this is a ')
    expect(result.current[3].type).toBe('span')
    expect(result.current[3].props.className).toBe('bg-yellow-200')
    expect(result.current[3].props.children).toBe('TeSt')
    expect(typeof result.current[3].key).toBe('string')
    expect(result.current[4]).toBe('.')
  })

  test('should handle overlapping keywords correctly', () => {
    const text = 'apple pie is made from apples'
    const keywords = ['apple', 'apple pie'] // Order matters in imperative processing
    const { result } = renderHook(() => useHighlight(text, keywords))

    // Expected output after processing "apple" then "apple pie" sequentially
    // The "apple" parts will be highlighted. "apple pie" as a whole won't be highlighted
    // if its "apple" part is already a span.

    expect(result.current.length).toBe(4) // Expect 4 parts
    expect(result.current[0].type).toBe('span')
    expect(result.current[0].props.className).toBe('bg-yellow-200')
    expect(result.current[0].props.children).toBe('apple')
    expect(typeof result.current[0].key).toBe('string')

    expect(result.current[1]).toBe(' pie is made from ')

    expect(result.current[2].type).toBe('span')
    expect(result.current[2].props.className).toBe('bg-yellow-200')
    expect(result.current[2].props.children).toBe('apple')
    expect(typeof result.current[2].key).toBe('string')

    expect(result.current[3]).toBe('s')
  })

  test('should handle keywords that are substrings of others correctly', () => {
    const text = 'testing tester'
    const keywords = ['test', 'tester'] // Order matters due to sequential processing
    const { result } = renderHook(() => useHighlight(text, keywords))

    // Expected behavior: "test" is highlighted wherever it appears.
    // "tester" as a whole will not be highlighted if its "test" portion is already a span.
    expect(result.current.length).toBe(4)
    expect(result.current[0].type).toBe('span')
    expect(result.current[0].props.className).toBe('bg-yellow-200')
    expect(result.current[0].props.children).toBe('test')
    expect(typeof result.current[0].key).toBe('string')

    expect(result.current[1]).toBe('ing ')

    expect(result.current[2].type).toBe('span')
    expect(result.current[2].props.className).toBe('bg-yellow-200')
    expect(result.current[2].props.children).toBe('test')
    expect(typeof result.current[2].key).toBe('string')

    expect(result.current[3]).toBe('er')
  })
})
