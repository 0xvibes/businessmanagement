import React from 'react'
import Image from 'next/image'
import Img from '../images/product.png'
import styles from '../styles/Features.module.css'

const lpFeatureCards = () => {
  return (
    <>
    <div className='feature-cards'>
    <div className='feature-card'>
    <div className='feature-image'>
        <Image
        className='feature-icon'
        src={Img}
        height='300px'
        width='300px'
        />
    </div>
    <div className='feature-text'>
    <h1 className='lp-h1'>Feature Name</h1>
    <p className='lp-h3'>this is a feature description motherfuckaaaaaa</p>
    </div>
    </div>

    <div className='feature-cardb'>
    <div className='feature-text'>
    <h1 className='lp-h1'>Feature Name</h1>
    <p className='lp-h3'>this is a feature description motherfuckaaaaaa</p>
    </div>
    <div className='feature-image'>
        <Image 
        className='feature-icon'
        src={Img}
        height='300px'
        width='300px'
        />
    </div>
    </div>

    <div className='feature-card'>
    <div className='feature-image'>
        <Image 
        className='feature-icon'
        src={Img}
        height='300px'
        width='300px'
        />
    </div>
    <div className='feature-text'>
    <h1 className='lp-h1'>Feature Name</h1>
    <p className='lp-h3'>this is a feature description motherfuckaaaaaa</p>
    </div>
    </div>

    </div>
    </>
  )
}

export default lpFeatureCards