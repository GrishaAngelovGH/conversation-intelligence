import { render } from '@testing-library/react'

import ActionItemsTab, { EmailSuggestion } from './ActionItemsTab'

test('should render ActionItemsTab component', () => {
  const view = render(<ActionItemsTab />)

  expect(view).toMatchSnapshot()
})

test('should render EmailSuggestion component', () => {
  const view = render(<EmailSuggestion content='content' />)

  expect(view).toMatchSnapshot()
})