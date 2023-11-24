import React from 'react';
import Lottie from "lottie-react";
import employeeRegisterLottie from "../../../assets/Lottie_Files/employeeRegister.json";
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import toast from 'react-hot-toast';

const JoinAsEmployee = () => {
    let { signUp, googleLogin } = useAuth();
    let navigate = useNavigate();
    let axiosInstance = useAxiosInstance();
    let handleJoinAsEmployee = (e) => {
        e.preventDefault();
        let fullName = e.target.fullName.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let image = e.target.image.value;
        let dob = e.target.dob.value;
        // console.log(fullName, email, password,image, dob)
        if (password.length < 6) {
            return toast.error("Password Length should atleast be 6 Characters!")
        }

        if (!/[A-Z]/.test(password)) {
            return toast.error("Password should contain at least one capital letter!")
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return toast.error("Password should contain at least one special character!")
        }
        signUp(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                let employeeInfo = { email: email, role: "employee", fullName: fullName, date_of_birth: dob, image: image, companyName: "null", companyLogo: "null" };

                axiosInstance.post("/employeeRegister", employeeInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate("/")
                    })

                toast.success("Succesfully Logged In");
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    return toast.error("Email is already being used");
                }
            });
    }

    let handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                let employeeInfo = { email: user?.email, role: "employee", fullName: user?.displayName, date_of_birth: "", image: user?.photoURL, companyName: "null", companyLogo: "null" }

                axiosInstance.post("/employeeSocialRegister", employeeInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate("/")
                    })
                toast.success('Logged In Successfully!', {
                    duration: 3000,
                });
                navigate('/');
            }).catch((error) => {
                console.log(error);
            });
    }


    return (
        <div className='h-fit'>
            <div className='w-[85%] bg-[#5CDB95] mx-auto px-12 my-12 h-fit rounded-md shadow-xl'>
                <div className='py-6'>
                    <h1 className='text-white text-center font-bold text-4xl'>Join As An Employee</h1>
                    <p className='text-white text-center font-bold text-lg mt-1'>Please Put down your details to register yourself as an Employee</p>
                </div>

                <div>
                    <form onSubmit={handleJoinAsEmployee} className='pb-12 gap-8 flex justify-center items-center'>
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
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="image">Image:</label> <br />
                                <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter Your Image URL' type="text" id='image' name='image' required />
                            </div>

                            <div className='w-full mt-3'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="password">Password:</label> <br />
                                <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter Your Password' type="password" id='password' name='password' required />
                            </div>

                            <div className='w-full mt-3'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="dob">Date of Birth:</label> <br />
                                <input className='py-3 px-4 rounded-md mt-2 w-full' type="date" name="dob" id="" />
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
                        <div onClick={handleGoogleLogin} className='flex justify-center items-center cursor-pointer hover:bg-[#05386B] hover:text-white gap-2 p-3 border-2  mt-2 text-2xl rounded-md border-[#05386B] w-[30%] mx-auto'>
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