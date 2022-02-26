import React from "react";
import Myself from './Aboutmages/Myself.png'
import Skills from './Aboutmages/Skills.png'
import Education from './Aboutmages/Educations.png'
import {FcAbout} from 'react-icons/fc'
const About = () => {
    return (
        <div>
            <h1 className='flex justify-center text-3xl text-slate-200 font-semibold bg-gradient-to-r from-slate-500 to-slate-800
                          py-5 my-5'>
                <p>About</p>
                <div>
                    <FcAbout />
                </div>
            </h1>
            <div className="flex flex-col justify-center align-middle bg-slate-800 pb-20">
                <img alt="About Images" src={Myself} className="mb-5 ring-8 ring-blue-200" />
                <img alt="About Images" src={Skills} className="my-5 ring-8 ring-blue-200" />
                <img alt="About Images" src={Education} className="my-5 ring-8 ring-blue-200" />
            </div>
        </div>

    );
};
export default About