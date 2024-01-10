import React from "react";

const FormEmail: React.FC = () => {
    return (
        <div className="flex flex-col items-center  w-4/5 lg:w-3/5 mx-auto rounded-lg shadow-lg bg-primary-intro py-10 px-5 relative z-10 -mt-44 -mb-44 lg:-mt-48 lg:-mb-36">
            <h2 className="text-xl text-center text-neutral-white font-bold pb-4 font-raleway">
                Get early access today
            </h2>
            <p className="text-center text-neutral-white/80 text-md pb-4 lg:w-3/5 font-open-sans">
                It only takes a minute to sign up and our free starter tier is extremely
                generous. If you have any questions, our support team would be happy to
                help you.
            </p>
            <form className="flex flex-col lg:flex-row gap-3 w-4/5 lg:justify-between">
                <div className="flex flex-col gap-2 lg:w-full">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email@example.com"
                        className="py-2 px-5 bg-neutral-white text-primary-main text-md rounded-full focus:outline-none font-open-sans"
                    />
                    <span className="pl-5 text-accent-light-red text-xs hidden lg:inline-block font-open-sans">please enter a valid email address</span>
                </div>
                <div className="flex flex-col gap-2 lg:w-min ">
                    <input
                        type="submit"
                        value="Get Started For Free"
                        className="py-2 px-5 bg-accent-blue hover:bg-accent-cyan text-neutral-white font-bold text-md rounded-full font-raleway cursor-pointer"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormEmail;