import { render } from '@testing-library/react'

import InputGroup from './InputGroup'

test('should render InputGroup component', () => {
  const view = render(<InputGroup />)

  expect(view).toMatchSnapshot()
})