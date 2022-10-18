import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar'

import Layout, { SidebarLayout } from './components/Layout'
import Header from './components/Header'

import Home from './components/Pages/Home'
import TranscriptSummary from './components/Pages/TranscriptSummary'
import SellerDetails from './components/Pages/SellerDetails'

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

const TranscriptSummaryRoute = () => (
  <ProSidebarProvider>
    <Layout
      header={<Header />}
      body={(
        <SidebarLayout>
          <TranscriptSummary />
        </SidebarLayout>
      )}
    />
  </ProSidebarProvider>
)

const SellerDetailsRoute = () => (
  <ProSidebarProvider>
    <Layout
      header={<Header />}
      body={(
        <SidebarLayout>
          <SellerDetails />
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
        <Route path='/transcript-summary' element={<TranscriptSummaryRoute />} />
        <Route path='/seller-details' element={<SellerDetailsRoute />} />
      </Routes>
    </Router>
  )
}

export default App