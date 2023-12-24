import React from 'react';
import employeeLottie from "../../../assets/Lottie_Files/employeeLottie.json"
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';

const EmployeeBanner = () => {
    return (
        <div className='h-fit py-28 bg-gradient-to-tr from-[#05386B] to-[#2d77c0]'>
            <Helmet>
                <title>Employee | Home</title>
            </Helmet>
            <div className='w-[85%] mx-auto flex flex-col md:flex-row justify-center items-center '>
                <div className='w-[60%]'>
                    <h1 className='text-6xl mb-4 text-[white] font-bold text-center md:text-left'>Employee Action Center</h1>
                    <p className='text-2xl text-[white] font-bold text-center md:text-left'>
                        Join the Team, Initiate Asset Requests, Generate Custom Inquiries, Observe Your Team Members, and Beyond.
                    </p>
                </div>
                <div className='w-full md:w-[60%] lg:w-[40%]'>
                    <Lottie animationData={employeeLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default EmployeeBanner;