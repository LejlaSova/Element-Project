import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Contact from './components/Contact'

function App() {


  return (
    <div className="container">
    <Router>

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations/>} />
        </Route>
      </Routes>
      

    </Router>
  </div>
  )
}

export default App
