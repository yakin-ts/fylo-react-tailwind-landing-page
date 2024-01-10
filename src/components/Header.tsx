import React from 'react'
import { logo } from '../constants/images'


const Header: React.FC = () => {
    return (
        <div className='flex justify-between px-5 md:px-10 py-10 text-neutral-white/70 bg-primary-intro w-full font-raleway'>
            <div className='w-24 lg:w-32 cursor-pointer'>
                <img className='' src={logo} alt='Fylo Logo' />
            </div>
            <div className='flex gap-4 text-md md:text-lg'>
                <span className='cursor-pointer hover:text-white hover:underline'>Features</span>
                <span className='cursor-pointer hover:text-white hover:underline'>Team</span>
                <span className='cursor-pointer hover:text-white hover:underline'>Sign In</span>
            </div>
        </div>
    )
}
export default Header