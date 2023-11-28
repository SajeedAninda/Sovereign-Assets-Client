import Lottie from 'lottie-react';
import React from 'react';
import noTeamLottie from "../../../assets/Lottie_Files/noTeam.json"

const NoTeam = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center w-[85%] mx-auto py-12'>
                <div className='w-[50%]'>
                <h1 className='text-5xl w-[80%] font-bold text-[#05386B]'>
                    You are Not affiliated to Any Team. Please Join a Team by Contacting your HR
                </h1>
                </div>
                <div className='w-full md:w-[70%] lg:w-[50%]'>
                <Lottie animationData={noTeamLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default NoTeam;