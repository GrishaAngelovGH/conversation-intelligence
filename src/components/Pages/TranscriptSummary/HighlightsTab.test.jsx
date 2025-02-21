import { render } from '@testing-library/react'

import HighlightsTab from './HighlightsTab'

test('should render HighlightsTab component', () => {
  const view = render(<HighlightsTab />)

  expect(view).toMatchSnapshot()
})