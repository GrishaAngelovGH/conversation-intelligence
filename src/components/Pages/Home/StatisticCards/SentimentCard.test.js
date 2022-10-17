import { render } from '@testing-library/react'

import SentimentCard from './SentimentCard'

test('should render component', () => {
  const container = render(<SentimentCard />)

  expect(container).toMatchSnapshot()
})