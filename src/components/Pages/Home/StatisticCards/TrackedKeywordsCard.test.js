import { render } from '@testing-library/react'

import TrackedKeywordsCard from './TrackedKeywordsCard'

test('should render TrackedKeywordsCard component', () => {
  const view = render(<TrackedKeywordsCard />)

  expect(view).toMatchSnapshot()
})