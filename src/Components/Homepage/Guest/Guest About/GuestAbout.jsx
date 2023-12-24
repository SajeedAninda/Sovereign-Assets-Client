import React from 'react';
import aboutLottie from "../../../../assets/Lottie_Files/aboutLottie.json"
import Lottie from 'lottie-react';

const GuestAbout = () => {
    return (
        <section className="bg-gradient-to-tr from-[#05386B] to-[#2d77c0]">
            <div className="py-8 px-4 mx-auto w-[90%] lg:py-16 lg:px-6">
                <h1 className='text-center text-white font-bold text-4xl lg:text-5xl mt-12 lg:mt-0 '>About Us</h1>
                <div class="text-center">
                            <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-40 h-1 rounded-full bg-white"></span>
                            <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                        </div>
                <div className=' flex flex-col lg:flex-row justify-center items-center gap-10 mt-6 lg:mt-0'>
                    <div className="max-w-screen-lg flex-1 text-white">
                        <h2 className=" text-3xl lg:text-4xl tracking-tight font-bold text-white text-center lg:text-left mb-8 lg:mb-4">Energizing Asset Management for an extensive number of companies globally.</h2>
                        <p className='mt-4'>Welcome to Sovereign Asset Solution, where innovation meets efficiency in asset and product management. Our cutting-edge web application is designed to revolutionize the way businesses oversee their resources, ensuring seamless operations and heightened productivity.</p>

                        <p className='mt-4'>With our web app, any company can effortlessly manage its assets and products by subscribing to our intuitive platform. Our primary focus is to simplify the task of HR/Admin professionals in monitoring how employees utilize company assets.</p>

                        <p className='mt-4'>At Sovereign Asset Solution, we are committed to providing businesses with a powerful tool that not only streamlines asset management but also enhances the overall organizational experience. Join us on this journey to transform the way you track and optimize your valuable resources.</p>

                    </div>
                    <div className='w-fulllg:w-[40%]'>
                        <Lottie animationData={aboutLottie} loop={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuestAbout;