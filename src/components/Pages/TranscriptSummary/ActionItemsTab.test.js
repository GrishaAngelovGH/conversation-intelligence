import { render } from '@testing-library/react'

import ActionItemsTab from './ActionItemsTab'

test('should render component', () => {
  const container = render(<ActionItemsTab />)

  expect(container).toMatchSnapshot()
})