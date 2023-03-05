import { render } from '@testing-library/react'

import Home from './Home'

test('should render Home component', () => {
  const view = render(<Home />)

  expect(view).toMatchSnapshot()
})