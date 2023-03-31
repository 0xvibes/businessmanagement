import React from 'react'
import Image from 'next/image'
import P from '../images/dog-test.gif'
import Tw from '../images/tw.png'
import Tg from '../images/tg.png'
import Ig from '../images/ig.png'

const lpHero = () => {
  return (
    <div className='hero-lp2'>
        <div className='hero-image-2'>
            <Image
            className='P-2'
            src={P}
            />
        </div>
        <div className='hero-text2'>
            <h3 className='lp-h3-2'>sub-headline niggaaaa</h3>
            <h1 className='lp-h1-2'>Make It Enough</h1>
            <div className='lp-button-div-2'>
            <button className='lp-button-2'>Go</button>
            <button className='lp-button2-2'>Stay</button>
            </div>
            <div className='social-icons'>
            <Image 
            className='icons'
            src={Tw}
            />
            <Image 
            className='icons'
            src={Tg}
            />
            <Image 
            className='icons'
            src={Ig}
            />
            </div>
        </div>
    </div>
  )
}

export default lpHero