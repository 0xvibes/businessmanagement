import React from 'react'
import Link from 'next/link'

const music = () => {
  return (
    <>
    <div className='main-div'>
    <div className='main-trad-div'>
    <h1 className='main-h1'>Current Open Projects:</h1>
    <div className='row'>
      <Link
      href="aproject"
      >
      <div className='square-icons'>
        <h1>A project</h1>
      </div>
      </Link>
      <Link
      href="aproject"
      >
      <div className='square-icons'>
        <h1>B project</h1>
      </div>
      </Link>
      <Link
      href="aproject"
      >
      <div className='square-icons'>
        <h1>C project</h1>
      </div>
      </Link>
    
      </div>

    </div>
    
    </div>
    
    <div className='category-div'>
      <Link href="newprojectmessage">
        <button className='new-project-button'>New Project</button>
      </Link>
    </div>
    </>
  )
}

export default music