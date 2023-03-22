import React from 'react'
import Image from 'next/image'
import P from '../images/product.png'

const lpHero2 = () => {
  return (
    <div className='hero-center-bg'>
    <div className='hero-center-lp'>
        <div className='hero-image2'>
        <Image
            className='P2'
            src={P}
            />
        </div>
        <div className='hero-text'>
            <h3 className='lp-h3'>sub-headline niggaaaa</h3>
            <h1 className='lp-h1'>Make It Enough</h1>
            <button className='lp-button'>Go</button>
        </div>
    </div>
    </div>
  )
}

export default lpHero2