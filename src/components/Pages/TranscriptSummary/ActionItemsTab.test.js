import { render } from '@testing-library/react'

import ActionItemsTab, { EmailSuggestion } from './ActionItemsTab'

test('should render component', () => {
  const container = render(<ActionItemsTab />)

  expect(container).toMatchSnapshot()
})

test('should render EmailSuggestion', () => {
  const container = render(<EmailSuggestion content='content' />)

  expect(container).toMatchSnapshot()
})