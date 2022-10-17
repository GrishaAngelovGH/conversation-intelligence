import { render } from '@testing-library/react'

import BrandsCard from './BrandsCard'

test('should render component', () => {
  const container = render(<BrandsCard />)

  expect(container).toMatchSnapshot()
})