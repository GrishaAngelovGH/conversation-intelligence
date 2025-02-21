import { render } from '@testing-library/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SidebarLayout from './SidebarLayout'

test('should render SidebarLayout component', () => {
  const view = render(
    <Router>
      <Routes>
        <Route
          path='/'
          element={(
            <SidebarLayout>
              <div>content</div>
            </SidebarLayout>
          )} />
      </Routes>
    </Router>
  )

  expect(view).toMatchSnapshot()
})