import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const trad = () => {
  return (
    <main className={styles.main}>
    <div className='main-div'>
        <p className='main-h1'>Your Traditional Businesses:</p>
        <div className='main-buttons-div'>
        <Link href="crypto">
        <button className='main-buttons'>Stuff</button>
        </Link>
        <Link href="trad">
        <button className='main-buttons'>More Stuff</button>
        </Link>
        </div>
        </div>

        <footer>
            <Link href="/">
            <p className='main-footer'>Back To My Businesses</p>
            </Link>
        </footer>
    </main>
  )
}

export default trad