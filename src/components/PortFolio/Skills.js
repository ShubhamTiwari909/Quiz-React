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
import LightSpeed from 'react-reveal/LightSpeed';

function Skills() {
  const SkillsData = [
    {
      SkillName: "HTML",
      SkillPercentage: "85%",
      Color: "bg-gradient-to-r from-red-900 via-red-600 to-red-400",
      SkillLogo: <SiHtml5 size='1.5rem' color='crimson' />
    },
    {
      SkillName: "CSS",
      SkillPercentage: "75%",
      Color: "bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400",
      SkillLogo: <DiCss3 size='1.5rem' color='#007FFF' />
    },
    {
      SkillName: "JAVASCRIPT",
      SkillPercentage: "65%",
      Color: "bg-gradient-to-r from-yellow-900 via-yellow-600 to-yellow-400",
      SkillLogo: <IoLogoJavascript size='1.5rem' color='yellow' />
    },
    {
      SkillName: "TAILWIND",
      SkillPercentage: "55%",
      Color: "bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-400",
      SkillLogo: <SiTailwindcss size='1.5rem' color='#002D62' />
    },
    {
      SkillName: "BOOTSTRAP",
      SkillPercentage: "85%",
      Color: "bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400",
      SkillLogo: <SiBootstrap size='1.5rem' color='purple' />
    },
    {
      SkillName: "REACT",
      SkillPercentage: "55%",
      Color: "bg-gradient-to-r from-cyan-900 via-cyan-600 to-cyan-400",
      SkillLogo: <FaReact size='1.5rem' color='#00FFFF' />
    },
    {
      SkillName: "mysql",
      SkillPercentage: "55%",
      Color: "bg-gradient-to-r from-gray-600 via-gray-400 to-gray-300",
      SkillLogo: <GrMysql size='1.5rem' color='gray' />
    },
    {
      SkillName: "NODE",
      SkillPercentage: "35%",
      Color: "bg-gradient-to-r from-green-700 via-green-500 to-green-300",
      SkillLogo: <GrNode size='1.5rem' color='#00FF40' />
    }
  ]
  return (
    <div className=''
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/26174.png')",
        backgroundSize: "cover"
      }}>
      <h1 className='flex justify-center text-3xl text-slate-200 font-semibold bg-gradient-to-r from-slate-500 to-slate-800
      py-6'>
        Skills <GiSkills size='2.5rem' style={{ margin: "0 1rem" }} />
      </h1>
      {
        SkillsData.map(item => {
          return (
            <div className="grid grid-cols-2 place-items-center w-full my-4 py-5">
              <LightSpeed left>
                <h1 className='flex font-semibold font-mono text-slate-100'><p>{item.SkillName}</p> {item.SkillLogo}</h1>
                <div className={`${item.Color} h-10 text-purple-100 font-bold text-center rounded-md place-self-start py-2 animate-pulse`} style={{ width: item.SkillPercentage }}>{item.SkillPercentage}</div>
              </LightSpeed>
            </div>
          )
        })
      }
    </div>
  )
}

export default Skills