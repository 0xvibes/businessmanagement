import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function figma() {
  return (
    <div className='figma-background'>
        <div className='figma-desktop-nav'>
        <Link
        href="/"
        className='figma-nav-links'
        >
        <h1>Home</h1>
        </Link>
        <Link
        href="/"
        className='figma-nav-links'
        >
        <h1>Presale</h1>
        </Link
        >
        <button
        className='figma-nav-links-btn1'
        >
            Follow Twitter
        </button>
        <button
        className='figma-nav-links-btn2'
        >
            Join Telegram
        </button>
        </div>
        <div className='figma-hero-div'>
            <div className='figma-hero-sectiona'>

            </div>
            <div className='figma-hero-sectionb'>

            </div>
        </div>


        </div>
  )
}

export default figma