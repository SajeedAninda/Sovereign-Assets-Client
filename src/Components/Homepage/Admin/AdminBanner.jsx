import React from 'react';
import adminLottie from "../../../assets/Lottie_Files/adminLottie.json"
import Lottie from 'lottie-react';

const AdminBanner = () => {
    return (
        <div className='h-fit py-12'>
            <div className='w-[85%] mx-auto flex justify-center items-center'>
                <div className='w-[60%]'>
                    <h1 className='text-6xl mb-4 text-[#05386B] font-bold text-left'>Admin Command Center</h1>
                    <p className='text-2xl text-[#05386B] font-bold text-left'>
                        List Assets, Include New Staff, Modify Your Plan, Review Your Workforce, Handle Employee Requests, and More.
                    </p>
                </div>
                <div className='w-[40%]'>
                    <Lottie animationData={adminLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default AdminBanner;