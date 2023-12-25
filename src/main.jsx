import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import IntroPage from './Components/IntroPage'
import CategariesPage from './Components/CategariesPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <IntroPage />
    <CategariesPage/>
  </React.StrictMode>,
)
