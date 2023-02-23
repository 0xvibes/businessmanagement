import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const crypto = () => {
  return (
    <main className={styles.main}>
    <div className='main-div'>
        <p className='main-h1'>Your Crypto Businesses:</p>
        <div className='main-buttons-div'>
        <Link href="coins">
        <button className='main-buttons'>Memecoins</button>
        </Link>
        <Link href="shit">
        <button className='main-buttons'>Other Shit</button>
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

export default crypto