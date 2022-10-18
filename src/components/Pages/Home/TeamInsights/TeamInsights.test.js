import { render } from '@testing-library/react'

import TeamInsights from './TeamInsights'

test('should render component', () => {
  const container = render(<TeamInsights />)

  expect(container).toMatchSnapshot()
})