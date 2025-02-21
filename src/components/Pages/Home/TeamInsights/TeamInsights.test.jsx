import { render } from '@testing-library/react'

import TeamInsights from './TeamInsights'

test('should render TeamInsights component', () => {
  const view = render(<TeamInsights />)

  expect(view).toMatchSnapshot()
})