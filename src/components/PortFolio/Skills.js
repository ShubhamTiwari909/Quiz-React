import React from 'react'
import { GiSkills } from 'react-icons/gi'
import { SiHtml5 } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { SiBootstrap } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { GrNode } from 'react-icons/gr'

function Skills() {
  return (
    <div className='py-10'>
      <h1 className='flex justify-center text-3xl text-slate-200 font-semibold bg-gradient-to-r from-slate-500 to-slate-800
      py-5'>
        Skills <GiSkills size='2.5rem' style={{ margin: "0 1rem" }} />
      </h1>
      <div className="grid grid-cols-2 place-items-center w-full bg-zinc-900 h-5 my-6 py-5">
        <h1 className='flex font-semibold font-mono text-slate-100'><p>HTML</p> <SiHtml5 size='1.5rem' color='crimson' /></h1>
        <div className="bg-red-500 h-10 text-slate-100 text-center rounded-md place-self-start py-2" style={{ width: "85%" }}>85%</div>
      </div>
      <div className="grid grid-cols-2 place-items-center w-full bg-zinc-900 h-5 my-6 py-5">
        <h1 className='flex font-semibold font-mono text-slate-100'><p>CSS</p> <DiCss3 size='1.5rem' color='#007FFF' /></h1>
        <div className="bg-blue-600 h-10 text-slate-100 text-center rounded-md place-self-start py-2" style={{ width: "75%" }}>75%</div>
      </div>
      <div className="grid grid-cols-2 place-items-center w-full bg-zinc-900 h-5 my-6 py-5">
        <h1 className='flex font-semibold font-mono text-slate-100'><p>JAVASCRIPT</p> <IoLogoJavascript size='1.5rem' color='yellow' /></h1>
        <div className="bg-yellow-500 h-10 text-slate-100 text-center rounded-md place-self-start py-2" style={{ width: "65%" }}>65%</div>
      </div>
      <div className="grid grid-cols-2 place-items-center w-full bg-zinc-900 h-5 my-6 py-5">
        <h1 className='flex font-semibold font-mono text-slate-100'><p>TAILWIND</p> <SiTailwindcss size='1.5rem' color='#002D62' /></h1>
        <div className="bg-indigo-600 h-10 text-slate-100 text-center rounded-md place-self-start py-2" style={{ width: "65%" }}>65%</div>
      </div>
      <div className="grid grid-cols-2 place-items-center w-full bg-zinc-900 h-5 my-6 py-5">
        <h1 className='flex font-semibold font-mono text-slate-100'><p>BOOTSTRAP</p> <SiBootstrap size='1.5rem' color='purple' /></h1>
        <div className="bg-purple-800 h-10 text-slate-100 text-center rounded-md place-self-start py-2" style={{ width: "75%" }}>75%</div>
      </div>
      <div className="grid grid-cols-2 place-items-center w-full bg-zinc-900 h-5 my-6 py-5">
        <h1 className='flex font-semibold font-mono text-slate-100'><p>REACT JS</p> <FaReact size='1.5rem' color='#00FFFF' /></h1>
        <div className="bg-cyan-600 h-10 text-slate-100 text-center rounded-md place-self-start py-2" style={{ width: "55%" }}>55%</div>
      </div>
      <div className="grid grid-cols-2 place-items-center w-full bg-zinc-900 h-5 my-6 py-5">
        <h1 className='flex font-semibold font-mono text-slate-100'><p>MYSQL</p> <GrMysql size='1.5rem' color='gray' /></h1>
        <div className="bg-gray-600 h-10 text-slate-100 text-center rounded-md place-self-start py-2" style={{ width: "55%" }}>55%</div>
      </div>
      <div className="grid grid-cols-2 place-items-center w-full bg-zinc-900 h-5 my-6 py-5">
        <h1 className='flex font-semibold font-mono text-slate-100'><p>NODE</p> <GrNode size='1.5rem' color='#00FF40' /></h1>
        <div className="bg-green-600 h-10 text-slate-100 text-center rounded-md place-self-start py-2" style={{ width: "35%" }}>35%</div>
      </div>
    </div>
  )
}

export default Skills