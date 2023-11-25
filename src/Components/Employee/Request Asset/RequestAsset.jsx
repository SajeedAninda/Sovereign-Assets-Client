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

const RequestAsset = () => {
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

    const { data: assetData, refetch } = useQuery({
        queryKey: ['assetData', userData, assetType, status, searchField],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getTeamAssets/${userData?.companyName}?productType=${assetType}&status=${status}&productName=${searchField}`);
            return response.data;
        },
        enabled: !!userData,
    })


    return (
        <div className='mx-auto w-[85%] my-12 bg-[#5CDB95] shadow-2xl py-8 px-8'>
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
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
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




                <div className='mt-8'>
                    <div>
                        <h2 className='text-3xl font-bold text-[#05386B]'>All Assets Available to your Team:</h2>
                    </div>
                    <div>
                        <div className='w-full bg-[#05386B] py-3 px-3 h-fit mt-4 rounded-tr-md rounded-tl-md grid grid-cols-12'>
                            <h2 className='text-white text-center font-semibold col-span-1'>#SL</h2>
                            <h2 className='text-white text-center font-semibold col-span-3'>NAME</h2>
                            <h2 className='text-white text-center font-semibold col-span-2'>TYPE</h2>
                            <h2 className='text-white text-center font-semibold col-span-2'>STATUS</h2>
                            <h3 className='text-white text-center font-semibold col-span-2'>Availibility</h3>
                            <h3 className='text-white text-center font-semibold col-span-2'>Request</h3>
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
                                        <div className='w-full bg-[#05386B] border-2 border-[#05386B] bg-transparent border-collapse text-[#05386B] py-3 px-3 h-fit grid grid-cols-12'>
                                            <h2 className='text-[#05386B] text-xl text-center font-semibold col-span-1'>#{index + 1}</h2>

                                            <h3 className='text-[#05386B] text-xl text-center font-semibold col-span-3'>{asset?.productName}</h3>

                                            <h3 className='text-[#05386B] text-xl text-center font-semibold col-span-2'>{asset?.productType}</h3>
                                            <h3 className='text-[#05386B] text-xl text-center font-semibold col-span-2'>{asset?.status}</h3>
                                            <h3 className='text-[#05386B] text-xl text-center font-semibold col-span-2'>
                                                {asset?.productQuantity > 0 ? 'Available' : 'Unavailable'}
                                            </h3>
                                            <button
                                                onClick={() => handleRemoveFromTeam(asset._id)}
                                                className='border-[#05386B] hover:text-[#05386B] bg-[#05386B] text-center text-white rounded-md hover:bg-transparent hover:border-2 hover:border-[#05386B] font-semibold col-span-2'
                                            >
                                                Request
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default RequestAsset;