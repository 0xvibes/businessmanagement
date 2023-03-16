import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Album from '../images/greenscreen.png'
import bg from '../images/glyfz-transparent-gradientc.png'

function herotemplate1b() {
  return (
    <>
    <div className='desktop-background-bg'>


      <div className='desktop-background'>

        <div
        className='bg-div'
        >
      <Image 
      className='bg-image'
      src={bg}
      z-index='-99'
      height='100vh'
      />
        </div>
        <div className='desktop-nav'>

          <h1 className='desktop-logo'>The Website</h1>
          <div className='desktop-nav-div'>
          <h2 className='desktop-nav-links'>Home</h2>
          <h2 className='desktop-nav-links'>About</h2>
          <h2 className='desktop-nav-links'>Go Aweay</h2>
        </div>
      </div>

      
      <div className='desktop-hero-layout'>
        
        <div className='desktop-hero-image'><Image 
            className='album-image-b'
            src={Album}
            /></div>
        <div className='desktop-hero-text'>
            <h1 className='desktop-hero-h1'>The Best Freakin Thing Ever</h1>
            <p className='desktop-hero-p'>this part explains more shit.</p>
            <button className='desktop-hero-button'>Do It Now</button>
        </div>
        
    </div>
<div className='new-section'>Hello</div>

</div>
</div>
</>
  )
}

export default herotemplate1b