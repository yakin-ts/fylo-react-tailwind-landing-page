import React from "react";
import { features } from "../constants/content";

const Features = () => {
    return (
        <div className='flex flex-col w-full bg-primary-main'>
            <div className="flex flex-col bg-primary-main pt-5 lg:grid lg:grid-cols-2 lg:w-2/3 lg:mx-auto">
                {
                    features.map((feature, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center justify-center py-10 px-5 lg:w-96">
                                <div className="flex flex-col items-center justify-center text-center gap-3">
                                    <img src={feature.icon} alt="feature" className='pb-5' />
                                    <h2 className="text-xl font-bold text-white font-raleway ">{feature.title}</h2>
                                    <p className="text-white/80 text-md font-open-sans">{feature.description}</p>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Features