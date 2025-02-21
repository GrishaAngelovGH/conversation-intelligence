import { render } from '@testing-library/react'

import Tabs from './Tabs'

test('should render Tabs component', () => {
  const view = render(<Tabs />)

  expect(view).toMatchSnapshot()
})