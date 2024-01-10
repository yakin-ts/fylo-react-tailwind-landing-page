import React from "react";
import { illustrationIntro } from '../constants/images'
import { intro } from "../constants/content";

const Intro: React.FC = () => {
    return (
        <div className='flex flex-col text-neutral-white  bg-primary-intro mx-auto w-full'>
            <div className='bg-mobile md:bg-desktop bg-bottom bg-no-repeat px-5 bg-contain'>
                <img className='mx-auto lg:w-2/5' src={illustrationIntro} alt='Fylo Logo' />
                <h1 className='text-3xl text-center font-semibold py-5 lg:w-2/5 mx-auto font-raleway'>{intro.title}</h1>
            </div>
            <div className='flex flex-col bg-primary-main w-full mx-auto font-open-sans'>
                <p className='text-center text-neutral-white/70  px-5 lg:w-1/3 lg:mx-auto '>{intro.description}</p>
                <button className='px-20 my-5 mx-auto h-10 bg-accent-blue hover:bg-accent-cyan text-netural-white rounded-full cursor-pointer'>{intro.button}</button>
            </div>

        </div>
    );
}

export default Intro