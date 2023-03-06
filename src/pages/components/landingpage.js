import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Album from '../images/greenscreen.png'

const landingpage = () => {
  return (
    <>
<div className='land'>
<div className='album-art'>
<Image 
className='album-image'
src={Album}
width={499}
height={499}
/>
</div>
<h1 className='home-text'>What u tryna get into bruh?</h1>
<div className='home-buttons-div'>
<button className='home-buttons'>ey</button>
<button className='home-buttons'>bee</button>
</div>

</div>
    </>
  )
}

export default landingpage