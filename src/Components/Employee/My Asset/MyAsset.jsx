import React, { useState } from 'react';
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
import toast from 'react-hot-toast';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import { Helmet } from 'react-helmet-async';
import { ColorRing } from 'react-loader-spinner';

const MyAsset = () => {
    const [searchField, setSearchField] = useState('');
    const [status, setStatus] = useState('');
    const [assetType, setAssetType] = useState('');


    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleAssetTypeChange = (event) => {
        setAssetType(event.target.value);
    };

    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;
    let [userData] = useCurrentUserData();
    let axiosInstance = useAxiosInstance();

    const { data: requestedData, isLoading, refetch } = useQuery({
        queryKey: ['requestedData', currentUserEmail, assetType, status, searchField],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getRequestedData/${currentUserEmail}?assetType=${assetType}&requestStatus=${status}&assetName=${searchField}`);
            return response.data;
        },
        enabled: !!currentUserEmail,
    })

    let handleCancel = (id) => {
        axiosInstance.delete(`/deleteRequest/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.success("Request Canceled Succesfully")
                    refetch();
                }
            })
    }

    let handleReturn = (id, assetId) => {
        axiosInstance.patch(`/returnAsset/${id}`)
            .then(res => {
                axiosInstance.patch(`/returnAssetCount/${assetId}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            toast.success("Asset Returned");
                            refetch();
                        }
                    })
            })
    }


    return (
        <div className='mx-auto w-full lg:w-[85%] my-12 bg-gradient-to-bl from-[#5ebe88] to-[#3bf78f] shadow-2xl py-8 px-0 lg:px-8'>
            <Helmet>
                <title>Employee | My Assets</title>
            </Helmet>
            <div className='pb-6 border-b-2 border-[#05386B]'>
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
                                <InputLabel id="demo-simple-select-label">Request Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label-status"
                                    id="demo-simple-select-status"
                                    value={status}
                                    label="status"
                                    onChange={handleStatusChange}
                                >
                                    <MenuItem value={"Pending"}>Pending</MenuItem>
                                    <MenuItem value={"Approved"}>Approved</MenuItem>
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
            </div>

            <div className='mt-6'>
                <div>
                    <h2 className='text-3xl font-bold text-[#05386B]'>All Requests for Assets Made by You:</h2>
                </div>
                <div>
                    <div className='w-full bg-[#05386B] py-3 px-3 h-fit mt-4 rounded-tr-md rounded-tl-md grid grid-cols-12'>
                        <h2 className='text-white text-[10px] md:text-[13px] lg:text-base xl:text-lg text-center font-semibold col-span-2'>ASSET NAME</h2>
                        <h2 className='text-white text-[10px] md:text-[13px] lg:text-base xl:text-lg text-center font-semibold col-span-2'>ASSET TYPE</h2>
                        <h2 className='text-white text-[10px] md:text-[13px] lg:text-base xl:text-lg text-center font-semibold col-span-2'>REQUEST DATE</h2>
                        <h2 className='text-white text-[10px] md:text-[13px] lg:text-base xl:text-lg text-center font-semibold col-span-2'>APPROVAL DATE</h2>
                        <h3 className='text-white text-[10px] md:text-[13px] lg:text-base xl:text-lg text-center font-semibold col-span-2'>REQUEST STATUS</h3>
                        <h3 className='text-white text-[10px] md:text-[13px] lg:text-base xl:text-lg text-center font-semibold col-span-2'>ACTION</h3>
                    </div>
                </div>
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
                    (<div>
                        {
                            requestedData?.length == 0 ?
                                <div>
                                    <h1 className='text-3xl text-[#05386B] text-center mt-3 font-bold'>No Requests Made</h1>
                                </div>
                                :
                                <div>
                                    {
                                        requestedData?.map((data, index) =>
                                            <div className='w-full bg-[#05386B] justify-center items-center border-2 border-[#05386B] bg-transparent border-collapse text-[#05386B] py-3 px-3 h-fit grid grid-cols-12'>
                                                <h2 className='text-[#05386B] text-[10px] md:text-[13px] lg:text-base xl:text-lg text-xl text-center font-semibold col-span-2'>{data?.assetName}</h2>
                                                <h2 className='text-[#05386B] text-[10px] md:text-[13px] lg:text-base xl:text-lg text-xl text-center font-semibold col-span-2'>{data?.assetType}</h2>
                                                <h3 className='text-[#05386B] text-[10px] md:text-[13px] lg:text-base xl:text-lg text-lg text-center font-semibold col-span-2'>
                                                    {new Date(data?.requestedDate).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </h3>
                                                <h3 className='text-[#05386B] text-[10px] md:text-[13px] lg:text-base xl:text-lg text-lg text-center font-semibold col-span-2'>
                                                    {data?.approvalDate === "null"
                                                        ? ""
                                                        : new Date(data?.approvalDate).toLocaleDateString('en-US', {
                                                            month: 'long',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })
                                                    }
                                                </h3>

                                                <h2 className='text-[#05386B] text-[10px] md:text-[13px] lg:text-base xl:text-lg text-xl text-center font-semibold col-span-2'>{data?.requestStatus}</h2>

                                                {/* CONDITIONAL BUTTONS  */}
                                                {
                                                    data?.requestStatus === "Pending" &&
                                                    <button
                                                        onClick={() => handleCancel(data?._id)}
                                                        className='text-white bg-[#05386B] text-[10px] md:text-[13px] lg:text-base xl:text-lg py-3 rounded-md border border-[#05386B] hover:bg-transparent hover:text-[#05386B] hover:border hover:border-[#05386B] col-span-2'
                                                    >
                                                        Cancel Request
                                                    </button>
                                                }

                                                {
                                                    (data?.requestStatus === "Approved" && data?.assetType !== "Returnable") &&
                                                    <div className='col-span-2'>
                                                        <PDFDownloadLink document={data?.assetId ? <MyDocument assetId={data.assetId} /> : null} fileName="AssetDetails.pdf">
                                                            {() => (
                                                                <button
                                                                    className='text-white text-[10px] md:text-[13px] lg:text-base xl:text-lg bg-[#05386B] py-3 rounded-md border border-[#05386B] hover:bg-transparent hover:text-[#05386B] hover:border hover:border-[#05386B] w-full col-span-2'
                                                                >
                                                                    Print
                                                                </button>
                                                            )}
                                                        </PDFDownloadLink>
                                                    </div>

                                                }

                                                {
                                                    ((data?.requestStatus === "Approved" || data?.requestStatus === "Returned") && data?.assetType === "Returnable") &&
                                                    <button
                                                        onClick={() => handleReturn(data?._id, data?.assetId)}
                                                        className={`text-white bg-[#05386B] text-[10px] md:text-[13px] lg:text-base xl:text-lg py-3 rounded-md border ${data?.requestStatus === "Returned" ? "bg-gray-300 text-gray-500 border-gray-500 cursor-not-allowed" : "border-[#05386B] hover:bg-transparent hover:text-[#05386B] hover:border hover:border-[#05386B]"} col-span-2`}
                                                        disabled={data?.requestStatus === "Returned"}
                                                    >
                                                        Return
                                                    </button>
                                                }

                                            </div>
                                        )
                                    }

                                </div>
                        }
                    </div>)
            }
        </div>
    );
};

export default MyAsset;