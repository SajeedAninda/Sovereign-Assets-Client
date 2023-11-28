import React from 'react';
import adminLottie from "../../../assets/Lottie_Files/adminLottie.json"
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';

const AdminBanner = () => {
    return (
        <div className='h-fit py-12'>
            <div className='w-[85%] mx-auto flex flex-col md:flex-row justify-center items-center'>
            <Helmet>
                <title>Admin | Homepage</title>
            </Helmet>
                <div className='w-[60%]'>
                    <h1 className='text-6xl mb-4 text-[#05386B] font-bold text-center md:text-left'>Admin Command Center</h1>
                    <p className='text-2xl text-[#05386B] font-bold text-center md:text-left'>
                        List Assets, Include New Staff, Modify Your Plan, Review Your Workforce, Handle Employee Requests, and More.
                    </p>
                </div>
                <div className='w-full md:w-[60%] lg:w-[40%]'>
                    <Lottie animationData={adminLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default AdminBanner;