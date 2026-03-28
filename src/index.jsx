import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'

import './index.css'
import { Welcome } from './welcome.jsx'
import { Title } from './slides/title.jsx'

const basename = import.meta.env.BASE_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> 
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/slides" element={<Title hasPrevious={false} />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)
