import React from 'react'
import { iconLocation, logo } from '../constants/images'
import { footer } from '../constants/content'
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";


const Footer: React.FC = () => {
    return (
        <div className='flex flex-col px-10 bg-primary-footer text-neutral-white pt-52 pb-10 font-raleway '>
            <div className='py-5'>
                <img src={logo} alt='Fylo Logo' className='pb-5 w-48' />
            </div>
            <div className='flex flex-col lg:grid lg:grid-cols-6'>
                <div className='flex flex-col lg:col-span-2 gap-4 pb-4'>
                    <div className='flex items-center gap-4 lg:pr-5'>
                        <img src={iconLocation} alt='location Icon' className='' />
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className=' flex flex-col gap-4 pb-12 '>
                    {
                        footer.map((item, index) => {
                            return (
                                <div key={index} className='flex gap-4 items-center lg:justify-center'>
                                    <img src={item.icon} alt={item.alt} className='h-4' />
                                    <div className='text-neutral-white text-md'>{item.text}</div>
                                </div>
                            )
                        }
                        )


                    }
                </div>
                <div className='flex flex-col gap-4 pb-12 lg:items-center'>
                    <span className=''>About Us</span>
                    <span className=''>Jobs</span>
                    <span className=''>Press</span>
                    <span className=''>Blogs</span>
                </div>
                <div className='flex flex-col gap-4 lg:items-center'>
                    <span className=''>Contact Us</span>
                    <span className=''>Terms</span>
                    <span className=''>Privacy</span>
                </div>
                <div className=' flex h-fit gap-3 pt-16 lg:pt-0 justify-center'>
                    <span className='text-neutral-white/90 text-md p-2 border border-white w-fit rounded-full'> <TiSocialFacebook /></span>
                    <span className='text-neutral-white/90 text-md p-2 border border-white w-fit rounded-full'> <TiSocialTwitter /></span>
                    <span className='text-neutral-white/90 text-md p-2 border border-white w-fit rounded-full'> <FaInstagram /></span>

                </div>
            </div>
            {/* made with love by john doe */}
            <div className='flex justify-center gap-2 text-neutral-white/60 pt-10'>
                <span>Made with</span>
                <span className='text-red-600'>♥</span>
                <span>by</span>
                <span className='text-accent-cyan'>Yakin T.</span>
            </div>
        </div>
    )
}
export default Footer