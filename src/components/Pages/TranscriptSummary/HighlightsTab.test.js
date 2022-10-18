import { render } from '@testing-library/react'

import HighlightsTab from './HighlightsTab'

test('should render component', () => {
  const container = render(<HighlightsTab />)

  expect(container).toMatchSnapshot()
})