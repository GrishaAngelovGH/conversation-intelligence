import { render } from '@testing-library/react'

import TeamInsight from './TeamInsight'

test('should render TeamInsight component', () => {
  const mockInsight = {
    id: 1,
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?u=johndoe',
    metric: 'Talk Ratio',
        value: '65%',
    comparison: '+10% vs. Top Performers',
    details: 'Some detailed insights here.'
  }

  const view = render(
    <TeamInsight insight={mockInsight} />
  )

  expect(view).toMatchSnapshot()
})