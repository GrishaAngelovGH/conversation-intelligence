import { render } from '@testing-library/react'

import TranscriptSummary from './TranscriptSummary'

test('should render TranscriptSummary component', () => {
  const view = render(<TranscriptSummary />)

  expect(view).toMatchSnapshot()
})