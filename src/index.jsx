import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Routes, Route, HashRouter } from 'react-router-dom'

import './index.css'
import { Welcome } from './welcome.jsx'
import { Slides } from './presentation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> 
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/slides" element={<Slides />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)
