import React from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import Project1 from './images/Project1.png'
import Project2 from './images/Project2.png'

function Project() {
  const ProjectData = [
    {
      ProjectTitle : "Photo Globe",
      ProjectLink : "https://relaxed-wright-c3ff59.netlify.app/",
      ProjectImage : Project2,
      Date : "December 2021",
      LanguagesUsed : "HTML5, CSS3, JAVASCRIPT(ES6), TAILWIND, REACT JS",
      API : "API USED : UNSPLASH API",
      ProjectDescription : "This Project is related to Image searching and Downloading using unsplash Api. The searching is Done without Reloading the Page and it is responsive Design too"
    },
    {
      ProjectTitle : "Knowledge Earth",
      ProjectLink : "https://knowledge-earth2k99.netlify.app/",
      ProjectImage : Project1,
      Date : "January 2022",
      LanguagesUsed : "HTM5L, CSS3, JAVASCRIPT(ES6), TAILWIND, REACT JS",
      API : "API USED : WIKIPEDIA API",
      ProjectDescription : "This Project is related to Wikipedia searching Api where a user can search things and then can read the whole content by redirecting to that wikipedia page and it also has a voice assistance"
    }
  ]
  return (
    <div>
      <h1 className='flex justify-center text-3xl text-slate-200 font-semibold bg-gradient-to-r from-slate-500 to-slate-800
      py-5 mt-5'>
        Projects <AiOutlineFundProjectionScreen size='2.5rem' style={{ margin: "0 1rem" }} />
      </h1>

      <div className='grid grid-cols-1 place-items-center my-5 py-5'>
        {ProjectData.map(item => {
          return (
            <div key={item.ProjectTitle} className="grid grid-cols-1 place-items-center bg-neutral-900
            my-8 pb-10 px-3 mx-10 ring-8 ring-indigo-400 rounded-md shadow-xl shadow-slate-400">
              <img src={item.ProjectImage} alt="Blogs Thumbnail" className='border-2 border-b-blue-300' />
              <h1 className='text-slate-200 text-xl text-center font-mono font-semibold py-6 border-b-2 border-solid border-indigo-300'>Project : {item.ProjectTitle}</h1>
              <h1 className='text-slate-200 text-xl text-center font-mono font-semibold py-6 border-b-2 border-solid border-indigo-300'>Languages : {item.LanguagesUsed}</h1>
              <h1 className='text-slate-200 text-xl text-center font-mono font-semibold py-6 border-b-2 border-solid border-indigo-300'>{item.API}</h1>
              <h1 className='text-slate-200 text-xl text-center font-mono font-semibold py-6 border-b-2 border-solid border-indigo-300'>{item.ProjectDescription}</h1>
              <a href={item.ProjectLink} target='_blank' rel="noreferrer"
              className='ring-2 ring-indigo-300 rounded-md bg-gradient-to-r from-indigo-500 via-purple-700 to pink-800 
              py-2 px-5 my-10 text-slate-200 font-bold'>Open Project</a>
              <h2 className='text-slate-200 py-6'>Date Published : {item.Date}</h2>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Project