import { render } from '@testing-library/react'

import { ProSidebarProvider } from 'react-pro-sidebar'
import SidebarLayout from './SidebarLayout'

test('should render component', () => {
  const container = render(
    <ProSidebarProvider>
      <SidebarLayout>
        <div>content</div>
      </SidebarLayout>
    </ProSidebarProvider>
  )

  expect(container).toMatchSnapshot()
})