import { render } from '@testing-library/react'

import Header from './Header'

test('should render component', () => {
  const container = render(<Header />)

  expect(container).toMatchSnapshot()
})