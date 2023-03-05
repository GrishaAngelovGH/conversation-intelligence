import { render } from '@testing-library/react'

import SentimentCard from './SentimentCard'

test('should render SentimentCard component', () => {
  const view = render(<SentimentCard />)

  expect(view).toMatchSnapshot()
})