import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const coins = () => {
  return (
    <main className={styles.main}>
    <div className='main-div'>
        <p className='main-h1'>Coins:</p>
        
        </div>

        <footer>
            <Link href="/">
            <p className='main-footer'>Back To My Businesses</p>
            </Link>
        </footer>
    </main>
  )
}

export default coins