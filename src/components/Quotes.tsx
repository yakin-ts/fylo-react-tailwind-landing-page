import React from 'react'
import { quotes } from '../constants/content'
import { bgQuote } from '../constants/images'

const Quotes: React.FC = () => {

    return (
        <div className='flex flex-col md:flex-row  justify-center gap-5 pt-16 pb-80 px-16 bg-primary-main'>
            <img src={bgQuote} alt='quotes' className='pb-5  w-6 md:w-max md:h-max' />
            {
                quotes.map((quote, index) => {
                    return (
                        <div key={index} className='flex flex-col p-4 gap-3 bg-primary-testimoial rounded-md shodow-lg'>
                            <p className='text-white/80 text-md text-left font-open-sans'>{quote.body}</p>
                            <div className='flex items-center justify-start gap-4 '>
                                <img src={quote.avatar} alt='' className='w-10 rounded-full object-contain' />
                                <div className='flex flex-col justify-start gap-1'>
                                    <span className='text-white font-bold font-raleway'>{quote.name}</span>
                                    <span className='text-white/80 font-raleway'>{quote.title}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
            }

        </div>

    )

}


export default Quotes