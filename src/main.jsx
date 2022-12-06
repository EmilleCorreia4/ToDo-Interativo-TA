import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home/App'
import './global.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Principal from './Principal/Principal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/principal' element={<Principal/>}></Route>
    </Routes>
  </BrowserRouter>
)