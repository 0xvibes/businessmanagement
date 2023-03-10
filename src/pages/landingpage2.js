import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Art from '../images/ocncrstls.png'

const landingpage2 = () => {
  return (
    <>
    <div className='lp-main-div'>
        <div className='art-div'>
        <Image 
        className='art'
        src={Art}
        // width={700}
        // height={700}
        />
        </div>

        <div className='lp-btns-div'>
            <Link
            href="aproject"
            >
            <button className='lp-btn'>
                <b>
                Go
                </b>
            </button >
            </Link>

            <Link
            href="aproject"
            >
            <button className='lp-btn'>
                Stay
            </button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default landingpage2