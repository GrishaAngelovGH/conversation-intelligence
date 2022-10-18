import { render } from '@testing-library/react'

import OverviewTab from './OverviewTab'

test('should render component', () => {
  const container = render(<OverviewTab />)

  expect(container).toMatchSnapshot()
})