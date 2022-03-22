import React, { Component } from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/login'

export class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<Login />}  />
          <Route exact path="/home" element={<Home/>} />
      
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router