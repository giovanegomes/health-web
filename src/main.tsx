import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './configuration.ts'
import Routes from './routes/index.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </StrictMode>,
)
