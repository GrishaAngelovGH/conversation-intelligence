import { render } from '@testing-library/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ProSidebarProvider } from 'react-pro-sidebar'
import SidebarLayout from './SidebarLayout'

test('should render component', () => {
  const container = render(
    <Router>
      <Routes>
        <Route
          path='/'
          element={(
            <ProSidebarProvider>
              <SidebarLayout>
                <div>content</div>
              </SidebarLayout>
            </ProSidebarProvider>
          )} />
      </Routes>
    </Router>
  )

  expect(container).toMatchSnapshot()
})