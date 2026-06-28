import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Causes from './pages/Causes'
import CauseDetail from './pages/CauseDetail'
import NGOs from './pages/NGOs'
import NGODetail from './pages/NGODetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import DonorDashboard from './pages/DonorDashboard'
import NGODashboard from './pages/NGODashboard'
import AdminPanel from './pages/AdminPanel'
import Donate from './pages/Donate'
import Fundraise from './pages/Fundraise'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-bg font-sans text-brand-charcoal">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/cause/:id" element={<CauseDetail />} />
            <Route path="/ngos" element={<NGOs />} />
            <Route path="/ngo/:id" element={<NGODetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/donate/:id" element={<Donate />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/fundraise" element={<Fundraise />} />
            {/* Dashboard and panel sub-routes are nested in their respective components */}
            <Route path="/dashboard/*" element={<DonorDashboard />} />
            <Route path="/ngo/dashboard/*" element={<NGODashboard />} />
            <Route path="/admin/*" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
