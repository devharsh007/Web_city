import React from 'react'
import ReactDOM from 'react-dom/client'
import IntroPage from './Components/IntroPage'
import CategariesPage from './Components/CategariesPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IntroPage />
    <CategariesPage/>
  </React.StrictMode>,
)
