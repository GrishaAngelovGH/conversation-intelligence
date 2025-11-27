import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import ResizeObserver from 'resize-observer-polyfill'
import '../src/chartSetup.js'

globalThis.ResizeObserver = ResizeObserver

// --- Global SpeechSynthesis Mock ---

// This object will hold the latest utterance instance so we can interact with it in tests
export const mockUtterance = {
  onstart: () => {},
  onend: () => {},
}

const mockSpeechSynthesis = {
  speak: vi.fn(utterance => {
    // When speak is called, immediately trigger onstart if it exists
    if (utterance.onstart) {
      utterance.onstart()
    }
    mockSpeechSynthesis.speaking = true
  }),
  cancel: vi.fn(() => {
    // When cancel is called, immediately trigger onend if it exists
    if (mockUtterance.onend) {
      mockUtterance.onend()
    }
    mockSpeechSynthesis.speaking = false
  }),
  speaking: false,
}

// Mock the constructor for SpeechSynthesisUtterance
const SpeechSynthesisUtteranceMock = vi.fn(function(text) {
  this.text = text
  // Assign the handlers from the component to our exported mockUtterance
  // so tests can trigger them if needed, or we can trigger them automatically.
  Object.defineProperty(this, 'onstart', {
    get: () => mockUtterance.onstart,
    set: (fn) => { mockUtterance.onstart = fn },
  })
  Object.defineProperty(this, 'onend', {
    get: () => mockUtterance.onend,
    set: (fn) => { mockUtterance.onend = fn },
  })
})

vi.stubGlobal('speechSynthesis', mockSpeechSynthesis)
vi.stubGlobal('SpeechSynthesisUtterance', SpeechSynthesisUtteranceMock)

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
  vi.clearAllMocks()
  mockSpeechSynthesis.speaking = false
  mockUtterance.onstart = () => {}
  mockUtterance.onend = () => {}
})