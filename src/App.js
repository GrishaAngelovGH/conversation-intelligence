import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar'

import Layout, { SidebarLayout } from './components/Layout'
import Header from './components/Header'

import Home from './components/Pages/Home'

const HomeRoute = () => (
  <ProSidebarProvider>
    <Layout
      header={<Header />}
      body={(
        <SidebarLayout>
          <Home />
        </SidebarLayout>
      )}
    />
  </ProSidebarProvider>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeRoute />} />
      </Routes>
    </Router>
  )
}

export default App