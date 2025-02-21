import { render } from '@testing-library/react'

import TeamInsight from './TeamInsight'

test('should render TeamInsight component', () => {
  const content = (<div>content</div>)
  const statistic = (<div>statistic</div>)

  const view = render(
    <TeamInsight
      content={content}
      statistic={statistic}
    />
  )

  expect(view).toMatchSnapshot()
})