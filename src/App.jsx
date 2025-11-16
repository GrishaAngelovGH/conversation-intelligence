import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

import Home from 'components/Pages/Home'
import TranscriptSummary from 'components/Pages/TranscriptSummary'
import SellerDetails from 'components/Pages/SellerDetails'

function App() {
  const [isToggled, setIsToggled] = useState(false)

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  return (
    <Router>
      <Layout
        header={<Header onToggle={handleToggle} />}
        body={
          <div className="h-full flex flex-1 overflow-hidden">
            <Sidebar isToggled={isToggled} onToggle={handleToggle} />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transcript-summary" element={<TranscriptSummary />} />
                <Route path="/seller-details" element={<SellerDetails />} />
              </Routes>
            </main>
          </div>
        }
      />
    </Router>
  )
}

export default App