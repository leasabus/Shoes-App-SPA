import React from 'react'
import ReactDOM from 'react-dom/client'
import { ShoesApp } from './ShoesApp'
import { BrowserRouter } from 'react-router-dom'

import './app.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <ShoesApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>


)
