import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar'

import Layout, { SidebarLayout } from './components/Layout'
import Header from './components/Header'

import Home from './components/Pages/Home'
import TranscriptSummary from './components/Pages/TranscriptSummary'
import SellerDetails from './components/Pages/SellerDetails'

const withLayout = Component => (
  <ProSidebarProvider>
    <Layout
      header={<Header />}
      body={(
        <SidebarLayout>
          <Component />
        </SidebarLayout>
      )}
    />
  </ProSidebarProvider>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={withLayout(Home)} />
        <Route path='/transcript-summary' element={withLayout(TranscriptSummary)} />
        <Route path='/seller-details' element={withLayout(SellerDetails)} />
      </Routes>
    </Router>
  )
}

export default App