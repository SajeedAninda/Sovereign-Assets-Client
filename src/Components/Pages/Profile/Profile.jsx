import React, { useState } from 'react';
import employeeRegisterLottie from "../../../assets/Lottie_Files/employeeRegister.json";
import Lottie from 'lottie-react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser, profileUpdate } = useAuth();
    let currentUserEmail = loggedInUser?.email;
    const [editMode, setEditMode] = useState(false);
    let navigate = useNavigate();

    const [editedValues, setEditedValues] = useState({
        fullName: userData?.fullName || '',
        email: userData?.email || '',
        dateOfBirth: userData?.date_of_birth || '',
    });

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        let fullName = e.target.fullName.value;
        let dob = e.target.dateOfBirth.value;
        let updateData = { fullName, dob };
        axiosInstance.patch(`/updateProfile/${userData?._id}`, updateData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success("Profile Updated");
                    navigate("/");
                    setEditMode(false);
                }
            })
    };



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <div className='w-[85%] bg-[#5CDB95] mx-auto px-12 my-12 h-fit rounded-md shadow-xl'>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className='py-6'>
                <h1 className='text-[#05386B] text-center font-bold text-4xl'>Profile Information</h1>
                <p className='text-[#05386B] text-center font-bold text-lg mt-1'>
                    View Your Profile Information & Update
                </p>

                <div>
                    <form onSubmit={handleProfileUpdate} className='pb-12 gap-8 flex justify-center items-center'>
                        <div className='w-full md:w-[50%]'>
                            {/* Full Name */}
                            <div className='w-full'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="fullName">
                                    Full Name:
                                </label>{' '}
                                <br />
                                {editMode ? (
                                    <input
                                        value={editedValues.fullName}
                                        onChange={handleInputChange}
                                        name="fullName"
                                        className='py-3 px-4 rounded-md mt-2 w-full'
                                        placeholder='Enter Your Full Name'
                                        type="text"
                                        required
                                    />
                                ) : (
                                    <span className='text-2xl text-[white] font-bold mt-1'>{userData?.fullName}</span>
                                )}
                            </div>

                            {/* Email */}
                            <div className='w-full mt-3'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="email">
                                    Email:
                                </label>{' '}
                                <br />
                                {editMode ? (
                                    <input
                                        readOnly
                                        value={editedValues.email}
                                        onChange={handleInputChange}
                                        name="email"
                                        className='py-3 px-4 rounded-md mt-2 w-full'
                                        placeholder='Enter Your Email'
                                        type="email"
                                        required
                                    />
                                ) : (
                                    <span className='text-2xl text-[white] font-bold mt-1'>{userData?.email}</span>
                                )}
                            </div>

                            {/* Date of Birth */}
                            <div className='w-full mt-3'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="dob">
                                    Date of Birth:
                                </label>{' '}
                                <br />
                                {editMode ? (
                                    <input
                                        value={editedValues.dateOfBirth}
                                        onChange={handleInputChange}
                                        name="dateOfBirth"
                                        className='py-3 px-4 rounded-md mt-2 w-full'
                                        type="date"
                                    />
                                ) : (
                                    <span className='text-2xl text-[white] font-bold mt-1'>{userData?.date_of_birth}</span>
                                )}
                            </div>

                            {/* Buttons */}
                            <button
                                className={`py-3 w-full bg-[#05386B] border-2 border-[#05386B] text-white font-bold text-lg mt-4 rounded-md hover:bg-transparent hover:text-[#05386B] hover:border-2 hover:border-[#05386B]`}
                                type='button'
                                onClick={toggleEditMode}
                            >
                                {editMode ? 'Cancel' : 'Edit'}
                            </button>

                            {editMode && (
                                <button
                                    className='py-3 w-full bg-[#05386B] border-2 border-[#05386B] text-white font-bold text-lg mt-4 rounded-md hover:bg-transparent hover:text-[#05386B] hover:border-2 hover:border-[#05386B]'
                                    type='submit'
                                >
                                    Update
                                </button>
                            )}
                        </div>
                        <div className='hidden md:block w-[50%]'>
                            <Lottie animationData={employeeRegisterLottie} loop={true} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
