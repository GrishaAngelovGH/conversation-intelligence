import { render } from '@testing-library/react'

import Transcript from './Transcript'

test('should render component', () => {
  const container = render(<Transcript />)

  expect(container).toMatchSnapshot()
})