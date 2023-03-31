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
            <h1 className='nav-logo-text'>Logo</h1>
        </div>
        <button className='nav-button'>Play Game</button>

    </div>
  )
}

export default lpNav