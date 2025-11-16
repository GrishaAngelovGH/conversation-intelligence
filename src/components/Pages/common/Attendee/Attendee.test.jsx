import { render } from '@testing-library/react'

import Attendee from './Attendee'

test('should render Attendee component', () => {
  const view = render(<Attendee shortName="JS" fullName="James Smith" />)

  expect(view).toMatchSnapshot()
})