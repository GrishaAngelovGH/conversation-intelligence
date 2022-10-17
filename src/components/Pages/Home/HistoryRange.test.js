import { render } from '@testing-library/react'

import HistoryRange from './HistoryRange'

test('should render component', () => {
  const container = render(<HistoryRange />)

  expect(container).toMatchSnapshot()
})