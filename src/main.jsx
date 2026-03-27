import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TrangChu from './Pages/TrangChu.jsx'
createRoot(document.getElementById('root')).render(
  <TrangChu />
)
