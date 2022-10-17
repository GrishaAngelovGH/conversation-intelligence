import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Header from './components/Header'

import Home from './components/Pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout header={<Header />} body={<Home />} />} />
      </Routes>
    </Router>
  )
}

export default App