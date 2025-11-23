import { render } from '@testing-library/react'

import CoachingDashboard from './CoachingDashboard'

describe('CoachingDashboard', () => {
  it('should render the CoachingDashboard component and match snapshot', () => {
    const { asFragment } = render(<CoachingDashboard />)
    expect(asFragment()).toMatchSnapshot()
  })
})
