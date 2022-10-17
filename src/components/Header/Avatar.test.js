import { render } from '@testing-library/react'

import Avatar from './Avatar'

test('should render component', () => {
  const container = render(<Avatar />)

  expect(container).toMatchSnapshot()
})