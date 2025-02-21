import { render } from '@testing-library/react'

import BrandsCard from './BrandsCard'

test('should render BrandsCard component', () => {
  const view = render(<BrandsCard />)

  expect(view).toMatchSnapshot()
})