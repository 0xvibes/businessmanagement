import React from 'react'
import Link from 'next/link'

const footer = () => {
  return (
    <div className='sticky-footer'>
      <Link className='footer-link' href="/">All</Link>
      <Link className='footer-link' href="/crypto">Crypto</Link>
      <Link className='footer-link' href="/trad">Trad</Link>

    </div>
  )
}

export default footer