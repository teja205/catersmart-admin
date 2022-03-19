import React from 'react';
import Notification from '../Component/notification';
import { assetsImages } from '../Constant/images';

function header() {
  return (
    <div className='row justify-content-between align-items-center header'>
        <div className='col-4 '>
            <img
                  className=""
                  src={assetsImages.logo}
                  alt="Catersmart Logo"
                /> 
        </div>
        <div className='col-1 row align-items-center justify-content-end'>
            <Notification />
        </div>        
   
    </div>
  )
}

export default header