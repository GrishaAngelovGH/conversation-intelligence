import { render } from '@testing-library/react'

import Tabs from './Tabs'

test('should render component', () => {
  const container = render(<Tabs />)

  expect(container).toMatchSnapshot()
})