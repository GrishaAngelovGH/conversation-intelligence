import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar'

import Layout, { SidebarLayout } from './components/Layout'
import Header from './components/Header'

import Home from './components/Pages/Home'
import TranscriptSummary from './components/Pages/TranscriptSummary'

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeRoute />} />
        <Route path='/transcript-summary' element={<TranscriptSummaryRoute />} />
      </Routes>
    </Router>
  )
}

export default App