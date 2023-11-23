import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const JoinAsAdmin = () => {
    const [adminPackage, setAdminPackage] = useState('');
    const handleChange = (event) => {
        setAdminPackage(event.target.value);
    };

    let handleJoinAsAdmin = (e) => {
        e.preventDefault();
        let fullName = e.target.fullName.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let dob = e.target.dob.value;
        console.log(fullName, email, password, dob, adminPackage)
    }


    return (
        <div className='h-fit'>
            <div className='w-[85%] bg-[#5CDB95] mx-auto px-12 my-12 h-fit rounded-md shadow-xl'>
                <div className='py-6'>
                    <h1 className='text-white text-center font-bold text-4xl'>Join As An Admin/HR</h1>
                    <p className='text-white text-center font-bold text-lg mt-1'>Please Put down your details to register yourself as an Admin/HR</p>
                </div>

                <div>
                    <form onSubmit={handleJoinAsAdmin} className='pb-12 gap-8 flex justify-center items-center'>
                        <div className='w-full'>
                            <div className='w-full'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="fullName">Full Name:</label> <br />
                                <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter Your Full Name' type="text" id='fullName' name='fullName' required />
                            </div>

                            <div className='mt-4 flex gap-6'>
                                <div className='w-full'>
                                    <label className='text-2xl text-[#05386B] font-bold' htmlFor="email">Email:</label> <br />
                                    <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter Your Email' type="email" id='email' name='email' required />
                                </div>

                                <div className='w-full'>
                                    <label className='text-2xl text-[#05386B] font-bold' htmlFor="password">Password:</label> <br />
                                    <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter Your Password' type="text" id='password' name='password' required />
                                </div>
                            </div>

                            <div className='flex mt-4 gap-6 items-center justify-center'>
                                <div className='w-full mt-3'>
                                    <label className='text-2xl text-[#05386B] font-bold' htmlFor="dob">Date of Birth:</label> <br />
                                    <input className='py-3 px-4 rounded-md mt-2 w-full' type="date" name="dob" id="" />
                                </div>

                                <div className='w-full mt-3'>
                                    <label className='text-2xl text-[#05386B] font-bold' htmlFor="package">Select a Package:</label> <br />
                                    <Box sx={{ minWidth: 120, marginTop:"8px", backgroundColor:"white" }}>
                                        <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Package</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={adminPackage}
                                                label="Package"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={5}>5 Members for $5</MenuItem>
                                                <MenuItem value={8}>10 Members for $8</MenuItem>
                                                <MenuItem value={15}>20 Members for $15</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </div>
                            <button className='py-3 w-full bg-[#05386B] border-2 border-[#05386B] text-white font-bold text-lg mt-4 rounded-md hover:bg-transparent hover:text-[#05386B] hover:border-2 hover:border-[#05386B]' type='submit'>
                                Sign Up
                            </button>
                        </div>
                        {/* <div className='w-[50%]'>
                            <Lottie animationData={employeeRegisterLottie} loop={true} />
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinAsAdmin;