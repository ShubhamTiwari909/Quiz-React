import React, { useState } from 'react'
import Main from './Main'
import { Routes, Route, Link } from 'react-router-dom'
import {FaUserGraduate} from 'react-icons/fa'

import './Portfolio.css'
function Portfolio() {
  const [display, setDisplay] = useState(true)
  const isDisplay = () => setDisplay(!display)
  return (
    <div>
      <h1 className='flex justify-center space-x-3 text-purple-300 bg-zinc-900 text-ellipsis text-3xl py-4 text-center'>
        <p>PORTFOLIO</p>
        <div>
          <FaUserGraduate size='2.2rem' />
        </div>
        </h1>
      <div style={{ display: display ? "grid" : "none" }} className="grid grid-cols-1 place-items-center text-slate-200 py-5 text-2xl Landing--Page">
        <h1 className='text-slate-200 font-mono font-semibold text-5xl px-10 text-center photoHeading'>Hello, I'm Shubham Tiwari, Frontend Web Developer</h1>
        <Link to='/blogs' onClick={isDisplay} className='ring-2 ring-slate-200 px-10 py-2 bg-slate-800 rounded-md shadow-lg shadow-slate-200'>Open »</Link>
      </div>
      <Routes>
        <Route exact path='/*' element={<Main display={display} isDisplay={isDisplay} />} />
      </Routes>
    </div>

  )
}

export default Portfolio