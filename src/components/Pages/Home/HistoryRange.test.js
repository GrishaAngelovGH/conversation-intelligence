import { render } from '@testing-library/react'

import HistoryRange from './HistoryRange'

test('should render HistoryRange component', () => {
  const view = render(<HistoryRange />)

  expect(view).toMatchSnapshot()
})