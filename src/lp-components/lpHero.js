import React from 'react'
import Image from 'next/image'
import P from '../images/product.png'

const lpHero = () => {
  return (
    <div className='hero-lp'>
        <div className='hero-image'>
            <Image
            className='P'
            src={P}
            />
        </div>
        <div className='hero-text'>
            <h3 className='lp-h3'>sub-headline niggaaaa</h3>
            <h1 className='lp-h1'>Make It Enough</h1>
            <div className='lp-button-div'>
            <button className='lp-button'>Go</button>
            <button className='lp-button2'>Stay</button>
            </div>
        </div>
    </div>
  )
}

export default lpHero