import { render } from '@testing-library/react'

import Layout from './Layout'

const header = (<div>Header</div>)
const body = (<div>Body</div>)

test('should render Layout component', () => {
  const view = render(<Layout header={header} body={body} />)

  expect(view).toMatchSnapshot()
})

test('should render Layout.Header component', () => {
  const view = render(<Layout.Header content={header} />)

  expect(view).toMatchSnapshot()
})

test('should render Layout.Body component', () => {
  const view = render(<Layout.Body content={body} />)

  expect(view).toMatchSnapshot()
})