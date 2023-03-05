import { render } from '@testing-library/react'

import OverviewTab from './OverviewTab'

test('should render OverviewTab component', () => {
  const view = render(<OverviewTab />)

  expect(view).toMatchSnapshot()
})