import React, { Component } from 'react'
import CatererProfile from '../Component/caterersProfile'
import Header from './header'
import { assetsImages } from '../Constant/images';

export class Caterer extends Component {
  render() {
    return (
      <div className='caterer'>
          <div className='col-2'>

          </div>
          <div className='col-9'>
            <Header />
            <CatererProfile />
          </div>
        
         
      </div>
    )
  }
}

export default Caterer;