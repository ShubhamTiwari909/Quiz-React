import React from "react";
import Myself from './Aboutmages/Myself.png'
import Skills from './Aboutmages/Skills.png'
import Education from './Aboutmages/Educations.png'
import { FcAbout } from 'react-icons/fc'
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className='bg-neutral-900'>
            <h1 className='flex justify-center text-3xl text-slate-200 font-semibold bg-gradient-to-r from-slate-500 to-slate-800
                          py-5 my-5 border-4 border-y-violet-500'>
                <p className='bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200'>
                    About
                </p>
                <div>
                    <FcAbout />
                </div>
            </h1>

            <div className="flex flex-col justify-center align-middle bg-slate-800 pb-20">
                <Fade bottom> <img alt="About Images" src={Myself} className="mb-5 ring-8 ring-blue-200" /> </Fade>
                <Fade left> <img alt="About Images" src={Skills} className="my-5 ring-8 ring-blue-200" /></Fade>
                <Fade right> <img alt="About Images" src={Education} className="my-5 ring-8 ring-blue-200" /></Fade>
            </div>


        </div>

    );
};
export default About