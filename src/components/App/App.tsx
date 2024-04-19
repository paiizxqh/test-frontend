import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import DomainsHome from '../../domains/Home'
import DomainsAbout from '../../domains/About'
import DomainsLogin from '../../domains/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DomainsHome />} />
        <Route path="/about" element={<DomainsAbout />} />
        <Route path="/login" element={<DomainsLogin />} />
      </Routes>
    </Router>
  )
}

export default App