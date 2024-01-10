import React from 'react';
import { productive } from '../constants/content';


const StayProductive: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center px-8 py-10 bg-primary-main gap-4">
            <img src={productive.image} alt="stay productive" className='pb-5 px-5 object-contain' />
            <div className='lg:w-96 flex flex-col gap-4'>
                <h2 className='text-xl text-neutral-white font-bold text-start font-raleway'>{productive.title}</h2>
                <p className='text-left text-md text-neutral-white/80 font-open-sans'>{productive.descriptionOne}</p>
                <p className='text-left text-md text-neutral-white/80 font-open-sans'>{productive.descriptionTwo}</p>
                <a href={`#`} target="_blank" rel="noopener noreferrer" className='flex  text-accent-cyan border-b-2 hover:text-neutral-white hover:border-neutral-white border-accent-cyan gap-3 w-fit pb-1 font-open-sans cursor-pointer'>
                    {productive.button}
                    <img src={productive.icon} alt='' className='' />
                </a>
            </div>
        </div>
    );
}

export default StayProductive;


