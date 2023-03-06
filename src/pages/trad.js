import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from './components/footer'

const trad = () => {
  return (
    <main className={styles.main}>
    <div className='main-trad-div'>
        <p className='main-h1'>Your Traditional Businesses:</p>
        <div className='main-buttons-div'>
        <div className='category-div'>
              <Link href="music">
              <button className='main-buttons'>Music</button>
              </Link>
              <div className='row'>
              <p className='category-details'>Earned:</p>
                <p className='category-input-green'>$5400</p>
                </div>
              <div className='row'>
              <p className='category-details'>Spent:</p>
                <p className='category-input-red'>$5400</p>
                </div>
              <div className='row'>
              <p className='category-details'>Incoming:</p>
                <p className='category-input-green'>$5400</p>
                </div>
            </div>

            <div className='category-div'>
              <Link href="crypto">
              <button className='main-buttons'>Content</button>
              </Link>
              <div className='row'>
              <p className='category-details'>Earned:</p>
                <p className='category-input-green'>$5400</p>
                </div>
              <div className='row'>
              <p className='category-details'>Spent:</p>
                <p className='category-input-red'>$5400</p>
                </div>
              <div className='row'>
              <p className='category-details'>Incoming:</p>
                <p className='category-input-green'>$5400</p>
                </div>
            </div>

            <div className='category-div'>
              <Link href="crypto">
              <button className='main-buttons'>Art</button>
              </Link>
              <div className='row'>
              <p className='category-details'>Earned:</p>
                <p className='category-input-green'>$5400</p>
                </div>
              <div className='row'>
              <p className='category-details'>Spent:</p>
                <p className='category-input-red'>$5400</p>
                </div>
              <div className='row'>
              <p className='category-details'>Incoming:</p>
                <p className='category-input-green'>$5400</p>
                </div>
            </div>

            <div className='category-div'>
              <Link href="crypto">
              <button className='main-buttons'>Games</button>
              </Link>
              <div className='row'>
              <p className='category-details'>Earned:</p>
                <p className='category-input-green'>$5400</p>
                </div>
              <div className='row'>
              <p className='category-details'>Spent:</p>
                <p className='category-input-red'>$5400</p>
                </div>
              <div className='row'>
              <p className='category-details'>Incoming:</p>
                <p className='category-input-green'>$5400</p>
                </div>
            </div>

            <div className='category-div'>
              <Link href="crypto">
              <button className='main-buttons'>Clothing</button>
              </Link>
              <div className='row'>
              <p className='category-details'>Earned:</p>
                <p className='category-input-green'>$5400</p>
                </div>
              <div className='row'>
              <p className='category-details'>Spent:</p>
                <p className='category-input-red'>$5400</p>
                </div>
              <div className='row'>
              <p className='category-details'>Incoming:</p>
                <p className='category-input-green'>$5400</p>
                </div>
            </div>

            </div>

        <footer>
            <Link href="/">
            <p className='main-footer'>Back To My Businesses</p>
            </Link>
        </footer>
        <Footer />
        </div>

        
    </main>
  )
}

export default trad