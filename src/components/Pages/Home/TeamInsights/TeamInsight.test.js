import { render } from '@testing-library/react'

import TeamInsight from './TeamInsight'

test('should render component', () => {
  const content = (<div>content</div>)
  const statistic = (<div>statistic</div>)

  const container = render(<TeamInsight content={content} statistic={statistic} />)

  expect(container).toMatchSnapshot()
})