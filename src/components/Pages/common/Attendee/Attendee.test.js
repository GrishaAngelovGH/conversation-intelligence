import { render } from '@testing-library/react'

import Attendee from './Attendee'

test('should render component', () => {
  const container = render(<Attendee shortName='JS' fullName='James Smith' />)

  expect(container).toMatchSnapshot()
})