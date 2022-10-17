import { render } from '@testing-library/react'

import InputGroup from './InputGroup'

test('should render component', () => {
  const container = render(<InputGroup />)

  expect(container).toMatchSnapshot()
})