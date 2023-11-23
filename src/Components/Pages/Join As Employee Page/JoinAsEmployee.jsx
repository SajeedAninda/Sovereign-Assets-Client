import React from 'react';
import Lottie from "lottie-react";
import employeeRegisterLottie from "../../../assets/Lottie_Files/employeeRegister.json";
import GoogleIcon from '@mui/icons-material/Google';

const JoinAsEmployee = () => {
    return (
        <div className='h-fit'>
            <div className='w-[85%] bg-[#5CDB95] mx-auto px-12 my-12 h-fit rounded-md shadow-xl'>
                <div className='py-6'>
                    <h1 className='text-white text-center font-bold text-4xl'>Join As An Employee</h1>
                    <p className='text-white text-center font-bold text-lg mt-1'>Please Put down your details to register yourself as an Employee</p>
                </div>

                <div>
                    <form className='pb-12 gap-8 flex justify-center items-center'>
                        <div className='w-[50%]'>
                            <div className='w-full'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="fullName">Full Name:</label> <br />
                                <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter Your Full Name' type="text" id='fullName' name='fullName' required />
                            </div>

                            <div className='w-full mt-3'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="email">Email:</label> <br />
                                <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter Your Email' type="email" id='email' name='email' required />
                            </div>

                            <div className='w-full mt-3'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="password">Password:</label> <br />
                                <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter Your Password' type="text" id='password' name='password' required />
                            </div>

                            <div className='w-full mt-3'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="dob">Date of Birth:</label> <br />
                                <input className='py-3 px-4 rounded-md mt-2 w-full' type="date" name="" id="" />
                            </div>
                            <button className='py-3 w-full bg-[#05386B] border-2 border-[#05386B] text-white font-bold text-lg mt-4 rounded-md hover:bg-transparent hover:text-[#05386B] hover:border-2 hover:border-[#05386B]' type='submit'>
                                Sign Up
                            </button>
                        </div>
                        <div className='w-[50%]'>
                            <Lottie animationData={employeeRegisterLottie} loop={true} />
                        </div>
                    </form>
                    <div className='text-[#05386B] font-bold text-center pb-12'>
                        <h2 className='text-xl'>You can also</h2>
                        <div className='flex justify-center items-center cursor-pointer hover:bg-[#05386B] hover:text-white gap-2 p-4 border-2  mt-2 text-2xl rounded-md border-[#05386B] w-[30%] mx-auto'>
                            Join With Google
                            <GoogleIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinAsEmployee;