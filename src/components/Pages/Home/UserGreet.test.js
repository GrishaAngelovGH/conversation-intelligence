import { render } from '@testing-library/react'

import UserGreet from './UserGreet'

test('should render UserGreet component', () => {
  const view = render(<UserGreet username='James Smith' />)

  expect(view).toMatchSnapshot()
})