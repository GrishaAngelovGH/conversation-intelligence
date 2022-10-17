import { render } from '@testing-library/react'

import Layout from './Layout'

const header = (<div>Header</div>)
const body = (<div>Body</div>)

test('should render component', () => {
  const container = render(<Layout header={header} body={body} />)

  expect(container).toMatchSnapshot()
})

test('should render Layout.Header', () => {
  const container = render(<Layout.Header content={header} />)

  expect(container).toMatchSnapshot()
})

test('should render Layout.Body', () => {
  const container = render(<Layout.Body content={body} />)

  expect(container).toMatchSnapshot()
})