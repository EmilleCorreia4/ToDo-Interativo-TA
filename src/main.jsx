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
      <Route path='Principal' element={<Principal/>}></Route>
    </Routes>
  </BrowserRouter>
)
/*
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/details/:id' element={<Details/>}></Route>
    </Routes>
    </BrowserRouter>
import Home from './pages/Home/Serie/index'
import Details from './pages/Details'
import Filtro from './pages/Home/Filtro'


);
*/