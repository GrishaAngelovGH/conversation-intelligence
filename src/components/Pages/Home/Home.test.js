import { render } from '@testing-library/react'

import Home from './Home'

test('should render component', () => {
  const container = render(<Home />)

  expect(container).toMatchSnapshot()
})