import { render } from '@testing-library/react'

import TranscriptSummary from './TranscriptSummary'

test('should render component', () => {
  const container = render(<TranscriptSummary />)

  expect(container).toMatchSnapshot()
})