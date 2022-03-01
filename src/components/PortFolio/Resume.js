import React from 'react'
import ResumeLink from './Shubham.pdf'
import { FcDocument } from 'react-icons/fc'

function Resume() {
    return (
        <div>
            <div>
                <h1 className='flex justify-center text-3xl text-slate-200 font-semibold bg-gradient-to-r from-slate-500 to-slate-800
                   py-5 mt-5'>
                    <p className='bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200'>Resume</p>
                    <FcDocument size='2.5rem' style={{ margin: "0 0.5rem" }} />
                </h1>
                <iframe
                    src={ResumeLink}
                    frameBorder="0"
                    scrolling="auto"
                    height='600px'
                    width="100%"
                ></iframe>
            </div>
        </div>
    )
}

export default Resume