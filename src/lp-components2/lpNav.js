import React from 'react'
import Image from 'next/image'
import menubar from '../images/menub.png'

const lpNav = () => {
  return (
    <div className='navbar'>
        <Image 
            className='menubar'
            src={menubar}
        />
        <div className='nav-logo'>
            <h1 className='nav-logo-text'>LOGO</h1>
        </div>
        <button className='nav-button'>Join Whitelist</button>

    </div>
  )
}

export default lpNav