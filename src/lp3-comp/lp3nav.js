import React from 'react'
import Image from 'next/image'
import Menu from '../images/circle-menu.png'

const lp3nav = () => {
  return (
    <div className='lp3navbar'>
        <Image
        className='lp3menu' 
        src={Menu}
        />
        
        <div className='nav-right'>
        <h1 className='lp3logo'>Logo</h1>
        
        </div>
        <button className='lp3btn'>Do Something</button>
        
    </div>
  )
}

export default lp3nav