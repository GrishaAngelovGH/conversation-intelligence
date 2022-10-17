import { render } from '@testing-library/react'

import UserGreet from './UserGreet'

test('should render component', () => {
  const container = render(<UserGreet username="James Smith" />)

  expect(container).toMatchSnapshot()
})