import React, { Component } from 'react'
import { BrowserRouter ,Routes ,Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/login'
import CatererLogin from '../Pages/catererLogin'
import ProtectedRoute from '../Pages/ProtectedRoutes'
import Caterer from '../Pages/caterer'

export class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Routes>
          <Route exact path="/" element={<Login />}  />
          <Route exact path="/home" element={<Home/>} />
      
          </Routes> */}
          <Switch>
          <Route exact path="/" component={Login}  />
          <Route exact path="/catererlogin" component={CatererLogin}  />
         
         <Route exact path="/home"  >
            <ProtectedRoute  component={Home} />
         </Route>
         <Route exact path="/caterer"  >
            <ProtectedRoute  component={Caterer} />
         </Route>
      
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router