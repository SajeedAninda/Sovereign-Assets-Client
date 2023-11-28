import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import addAssetLottie from "../../../assets/Lottie_Files/addAsset.json";
import Lottie from 'lottie-react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const AddAsset = () => {
    const [assetType, setAssetType] = useState('');
    const handleChange = (event) => {
        setAssetType(event.target.value);
    };

    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();

    let currentDate = new Date();



    let handleAddAsset = (e) => {
        e.preventDefault();
        let productName = e.target.productName.value;
        let productType = assetType;
        let productQuantity = parseFloat(e.target.productQuantity.value);
        let status = "Not-Requested";
        let assetPostedBy = userData.email;
        let dateAdded = currentDate;
        let assetCompany = userData.companyName;
        let assetList = { productName, productType, productQuantity, status, assetPostedBy, assetCompany, dateAdded };

        axiosInstance.post("/addAsset", assetList)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Assets Added Succesfully")
                }
                e.target.productName.value = "";
                e.target.productQuantity.value = "";
                setAssetType('');
            })

    }



    return (
        <div className='mx-auto w-[85%] my-12 bg-[#5CDB95] shadow-2xl py-8 px-8'>
            <Helmet>
                <title>Admin | Add Asset</title>
            </Helmet>
            <h1 className='text-4xl text-[#05386B] text-center font-bold'>
                Add an Asset
            </h1>
            <p className='text-xl mt-2 w-[75%] mx-auto text-[#05386B] text-center font-bold'>
                Streamline your workflow by effortlessly adding new assets for your team. Equip your employees with the tools they need for success.
            </p>

            <div className='flex mt-2 justify-center items-center'>
                <form onSubmit={handleAddAsset} className='w-full md:w-[60%] border-4 border-[#05386B] rounded-md p-4'>
                    <div className='w-full'>
                        <label className='text-2xl text-[#05386B] font-bold' htmlFor="productName">Product Name:</label> <br />
                        <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter The Product Name' type="text" id='productName' name='productName' required />
                    </div>

                    <div className='w-full mt-4'>
                        <div className='w-full mt-3'>
                            <label className='text-2xl text-[#05386B] font-bold' htmlFor="productType">Product Type:</label> <br />
                            <Box sx={{ minWidth: 120, marginTop: "8px", backgroundColor: "white" }}>
                                <FormControl fullWidth required>
                                    <InputLabel id="demo-simple-select-label">Product Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={assetType}
                                        label="Package"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"Returnable"}>Returnable</MenuItem>
                                        <MenuItem value={"Non-Returnable"}>Non-Returnable</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </div>

                    <div className='w-full'>
                        <label className='text-2xl text-[#05386B] font-bold' htmlFor="productQuantity">Product Quantity:</label> <br />
                        <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Input Available Product Quantity' type="number" id='productQuantity' name='productQuantity' required />
                    </div>

                    <button type='submit' className='w-full mt-4 rounded-md py-3 bg-[#05386B] text-white font-bold text-xl border-2 border-[#05386B] hover:bg-transparent hover:text-[#05386B] hover:border-2 hover:border-[#05386B]'>
                        Add Asset
                    </button>
                </form>
                <div className='hidden md:block md:w-[60%] lg:w-[40%]'>
                    <Lottie animationData={addAssetLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default AddAsset;