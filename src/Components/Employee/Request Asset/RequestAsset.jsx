import React, { useEffect, useState } from 'react';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAuth from '../../Hooks/useAuth';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ColorRing } from 'react-loader-spinner';

const RequestAsset = () => {
    let [searchField, setSearchField] = useState('');
    let [status, setStatus] = useState('');
    let [assetType, setAssetType] = useState('');
    let [screenWidth, setScreenWidth] = useState(window.innerWidth);

    let [openAssets, setOpenAssets] = useState([]);
    let [open, setOpen] = useState(false);

    let [additionalInfo, setAdditionalInfo] = useState('');

    let handleOpen = (assetId) => {
        setOpenAssets((prevOpenAssets) => ({
            ...prevOpenAssets,
            [assetId]: true,
        }));
    };
    let handleClose = (assetId) => {
        setOpenAssets((prevOpenAssets) => ({
            ...prevOpenAssets,
            [assetId]: false,
        }));
    };

    let handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    let handleAssetTypeChange = (event) => {
        setAssetType(event.target.value);
    };

    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;
    let [userData] = useCurrentUserData();
    let axiosInstance = useAxiosInstance();

    let { data: assetData, isLoading, refetch } = useQuery({
        queryKey: ['assetData', userData, assetType, status, searchField],
        queryFn: async () => {
            let response = await axiosInstance.get(`/getTeamAssets/${userData?.companyName}?productType=${assetType}&status=${status}&productName=${searchField}`);
            return response.data;
        },
        enabled: !!userData,
    })

    useEffect(() => {
        let handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: screenWidth > 600 ? '700px' : '90%',
        bgcolor: 'background.paper',
        border: '8px solid #05386B',
        boxShadow: 24,
        p: 4,
    };
    let currentDate = new Date();

    let handleRequest = (id) => {
        //GET INDIVIDUAL ASSET BASED ON ID
        let foundAssetData = assetData?.find(asset => asset._id === id);
        let assetName = foundAssetData?.productName;
        let assetType = foundAssetData?.productType;
        let requestedDate = currentDate;
        let requestStatus = "Pending";
        let requestorEmail = currentUserEmail;
        let requestorName = userData?.fullName;
        let requestorTeam = userData?.companyName;
        let assetId = id;
        let approvalDate = "null"
        let assetPostedBy = foundAssetData?.assetPostedBy;
        let assetCompany = foundAssetData?.assetCompany;
        let assetAddedOn = foundAssetData?.dateAdded;
        let extraAdditionalInfo = additionalInfo;
        let requestData = {
            assetName,
            assetType,
            requestedDate,
            requestStatus,
            requestorEmail,
            requestorName,
            requestorTeam,
            assetId,
            approvalDate,
            assetPostedBy,
            assetCompany,
            assetAddedOn,
            extraAdditionalInfo,
        };

        axiosInstance.post("/assetRequest", requestData)
            .then(res => {
                if (res.data.insertedId) {
                    setSearchField('')
                    axiosInstance.patch(`/changeAssetStatus/${id}`)
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                refetch();
                                handleClose(id);
                            }
                        })
                }

                toast.success("Made an Asset Request Succesfully");
                handleClose(id)
            })
    }



    return (
        <div className='mx-auto 2-[95%] md:w-[85%] my-12 bg-gradient-to-bl from-[#5ebe88] to-[#3bf78f] shadow-2xl py-8 px-2 md:px-8'>
            <Helmet>
                <title>Employee | Request Assets</title>
            </Helmet>
            <div>
                <div className='mt-3 relative'>
                    <input onChange={(event) => {
                        setSearchField(event.target.value);
                    }} type="text" className='w-full py-4 px-3' placeholder='Search By Item Name' />
                    <span className='absolute right-4 top-3'>
                        <SavedSearchIcon />
                    </span>
                </div>

                <div className='grid grid-cols-2 gap-6 mt-3'>
                    <div>
                        <Box sx={{ minWidth: 120, marginTop: "8px", backgroundColor: "white" }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Availability</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label-status"
                                    id="demo-simple-select-status"
                                    value={status}
                                    label="status"
                                    onChange={handleStatusChange}
                                >
                                    <MenuItem value={"available"}>Available</MenuItem>
                                    <MenuItem value={"stockOut"}>Out-Of-Stock</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    <div>
                        <Box sx={{ minWidth: 120, marginTop: "8px", backgroundColor: "white" }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label-asset">Asset Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label-asset"
                                    id="demo-simple-select"
                                    value={assetType}
                                    label="assetType"
                                    onChange={handleAssetTypeChange}
                                >
                                    <MenuItem value={"Returnable"}>Returnable</MenuItem>
                                    <MenuItem value={"Non-Returnable"}>Non-Returnable</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>




                <div className='mt-8'>
                    <div>
                        <h2 className='text-3xl font-bold text-[#05386B]'>All Assets Available to your Team:</h2>
                    </div>
                    {
                        isLoading ?
                            (<div className='flex justify-center items-center'>
                                <ColorRing
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                />
                            </div>)
                            :
                            (
                                <div>
                                    <div>
                                        <div className='w-full bg-[#05386B] justify-center items-center py-3 px-3 h-fit mt-4 rounded-tr-md rounded-tl-md grid grid-cols-11'>
                                            <h2 className='text-white text-[12px] md:text-lg text-center font-semibold col-span-1'>#SL</h2>
                                            <h2 className='text-white text-[12px] md:text-lg text-center font-semibold col-span-3'>NAME</h2>
                                            <h2 className='text-white text-[12px] md:text-lg text-center font-semibold col-span-3'>TYPE</h2>
                                            <h3 className='text-white text-[12px] md:text-lg text-center font-semibold col-span-2'>Availibility</h3>
                                            <h3 className='text-white text-[12px] md:text-lg text-center font-semibold col-span-2'>Request</h3>
                                        </div>
                                    </div>

                                    {
                                        assetData?.length == 0 ?
                                            <div>
                                                <h1 className='text-3xl text-[#05386B] text-center mt-3 font-bold'>No Assets Available</h1>
                                            </div>
                                            :
                                            <div>
                                                {
                                                    assetData?.map((asset, index) =>
                                                        <div className='w-full bg-[#05386B] border-2 border-[#05386B] bg-transparent border-collapse justify-center items-center text-[#05386B] py-3 px-3 h-fit grid grid-cols-11'>
                                                            <h2 className='text-[#05386B] text-[12px] md:text-lg text-xl text-center font-semibold col-span-1'>#{index + 1}</h2>

                                                            <h3 className='text-[#05386B] text-[12px] md:text-lg text-xl text-center font-semibold col-span-3'>{asset?.productName}</h3>

                                                            <h3 className='text-[#05386B] text-[12px] md:text-lg text-xl text-center font-semibold col-span-3'>{asset?.productType}</h3>
                                                            <h3 className='text-[#05386B] text-[12px] md:text-lg text-xl text-center font-semibold col-span-2'>
                                                                {asset?.productQuantity > 0 ? 'Available' : 'Unavailable'}
                                                            </h3>
                                                            <button
                                                                onClick={() => handleOpen(asset._id)}
                                                                disabled={asset?.productQuantity === 0}
                                                                className={`border-[#05386B] text-[12px] md:text-lg py-1 border-2 hover:text-[#05386B] bg-[#05386B] text-center text-white rounded-md hover:bg-transparent hover:border-2 ${asset?.productQuantity === 0 ? 'cursor-not-allowed opacity-50' : 'hover:border-[#05386B]'
                                                                    } font-semibold col-span-2`}
                                                            >
                                                                Request
                                                            </button>

                                                            <div>
                                                                <Modal
                                                                    open={openAssets[asset._id]}
                                                                    onClose={() => handleClose(asset._id)}
                                                                    aria-labelledby="modal-modal-title"
                                                                    aria-describedby="modal-modal-description"
                                                                >
                                                                    <Box sx={style}>
                                                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                                                            <input onChange={(event) => {
                                                                                setAdditionalInfo(event.target.value);
                                                                            }} className="w-full border-2 px-2 py-2 border-[#05386B]" placeholder='Write Additional Notes' type="text" />
                                                                        </Typography>
                                                                        <div className='flex justify-center items-center mt-4'>
                                                                            <button onClick={() => handleRequest(asset._id)} className='border-[#05386B] flex justify-center items-center mx-auto py-2 px-8 border-2 hover:text-[#05386B] bg-[#05386B] text-center text-white rounded-md hover:bg-transparent hover:border-2'>
                                                                                Request
                                                                            </button>
                                                                        </div>
                                                                    </Box>
                                                                </Modal>
                                                            </div>

                                                        </div>
                                                    )
                                                }
                                            </div>
                                    }
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default RequestAsset;