import React from 'react'
import LookscoutDark from '../logo/LookscoutDark.png'
import LookscoutLight from '../logo/Lookscoutlight.png'
import Body from './Body'

const OnBoarding = ({darkmode}) => {
  let Icon=LookscoutLight

  if(!darkmode) Icon=LookscoutDark;

  return (
    <div>
      <div className='logo'>
        <img src={Icon} alt="logo" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Body />
      </div>
    </div>
  )
}

export default OnBoarding;
