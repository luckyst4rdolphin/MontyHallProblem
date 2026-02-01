import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Intro from './components/Intro.jsx'
import Middle from './components/Middle.jsx'
import MidScroll from './components/MidScroll.jsx'
import PostScroll from './components/PostScroll.jsx'
import Distribution from './components/Distribution.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App />
  </StrictMode>
   
)
