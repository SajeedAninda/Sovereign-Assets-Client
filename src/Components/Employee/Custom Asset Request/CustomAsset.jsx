import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const CustomAsset = () => {
    const [assetType, setAssetType] = useState('');
    const handleChange = (event) => {
        setAssetType(event.target.value);
    };
    const currentDate = new Date();

    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;


    let handleCustomRequest = (e) => {
        e.preventDefault();
        let assetName = e.target.assetName.value;
        let assetPrice = e.target.assetPrice.value;
        let assetTypes = assetType;
        let assetImage = e.target.assetImage.value;
        let whyNeed = e.target.whyNeed.value;
        let additionalInfo = e.target.additionalInfo.value;
        let status = "Pending";
        let requestDate = currentDate;
        let requestorEmail = currentUserEmail;
        let requestorName = userData?.fullName;
        let requestorTeam = userData?.companyName;

        let customRequest = { assetName, assetImage, assetTypes, assetPrice, whyNeed, additionalInfo, status, requestDate, requestorEmail, requestorName, requestorTeam };

        axiosInstance.post("/customRequest", customRequest)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    toast.success("Made a Custom Request")
                    e.target.assetName.value="";
                    e.target.assetPrice.value="";
                    e.target.assetImage.value="";
                    e.target.whyNeed.value="";
                    e.target.additionalInfo.value="";
                    setAssetType("")
                }
            })
    }



    return (
        <div className='mx-auto w-[85%] my-12 bg-gradient-to-bl from-[#5ebe88] to-[#3bf78f] shadow-2xl py-8 px-8'>
            <Helmet>
                <title>Employee | Custom Requests</title>
            </Helmet>
            <div className='py-3'>
                <h1 className='text-[#05386B] mb-2 text-center font-bold text-4xl'>Make a Custom Request</h1>
                <p className='text-[#05386B] text-center font-bold text-lg mt-1'>If you can't find the asset you need, Ask it for yourself through a Custom Request</p>
            </div>

            <div>
                <form onSubmit={handleCustomRequest}>
                    <div className='mt-4  flex-col md:flex-row gap-6'>
                        <div className='w-full'>
                            <label className='text-2xl text-[#05386B] font-bold' htmlFor="assetName">Asset Name:</label> <br />
                            <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter Your Required Asset Name' type="text" id='assetName' name='assetName' required />
                        </div>

                        <div className='w-full mt-4'>
                            <label className='text-2xl text-[#05386B] font-bold' htmlFor="assetPrice">Asset Price:</label> <br />
                            <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter The Price' type="number" id='assetPrice' name='assetPrice' required />
                        </div>
                    </div>

                    <div className='mt-4 flex flex-col md:flex-row gap-6'>
                        <div className='w-full'>
                            <label className='text-2xl text-[#05386B] font-bold' htmlFor="package">Asset Type:</label> <br />
                            <Box sx={{ minWidth: 120, marginTop: "4px", backgroundColor: "white" }}>
                                <FormControl fullWidth required>
                                    <InputLabel id="demo-simple-select-label">Asset Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={assetType}
                                        label="Asset Type"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"Returnable"}>Returnable</MenuItem>
                                        <MenuItem value={"Non-Returnable"}>Non-Returnable</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>

                        <div className='w-full'>
                            <label className='text-2xl text-[#05386B] font-bold' htmlFor="assetImage">Asset Image:</label> <br />
                            <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter The Asset Image URL' type="text" id='assetImage' name='assetImage' required />
                        </div>
                    </div>

                    <div className='mt-4 flex flex-col md:flex-row gap-6'>
                        <div className='w-full'>
                            <label className='text-2xl text-[#05386B] font-bold' htmlFor="whyNeed">Why You need this:</label> <br />
                            <textarea className='py-3 px-4 rounded-md mt-2 w-full' name="whyNeed" id="whyNeed" cols="20" rows="5"></textarea>
                        </div>

                        <div className='w-full'>
                            <label className='text-2xl text-[#05386B] font-bold' htmlFor="additionalInfo">Additional Information:</label> <br />
                            <textarea className='py-3 px-4 rounded-md mt-2 w-full' name="additionalInfo" id="additionalInfo" cols="20" rows="5"></textarea>
                        </div>
                    </div>

                    <button className='py-3 w-full bg-[#05386B] border-2 border-[#05386B] text-white font-bold text-lg mt-4 rounded-md hover:bg-transparent hover:text-[#05386B] hover:border-2 hover:border-[#05386B]' type='submit'>
                        Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CustomAsset;