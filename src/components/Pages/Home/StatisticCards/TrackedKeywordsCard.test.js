import { render } from '@testing-library/react'

import TrackedKeywordsCard from './TrackedKeywordsCard'

test('should render component', () => {
  const container = render(<TrackedKeywordsCard />)

  expect(container).toMatchSnapshot()
})