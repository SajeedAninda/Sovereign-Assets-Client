import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

const AssetList = () => {
    const [status, setStatus] = useState('');
    const [assetType, setAssetType] = useState('');
    const [sorted, setSorted] = useState('');
    const [searchField, setSearchField] = useState('');

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleAssetTypeChange = (event) => {
        setAssetType(event.target.value);
    };

    const handleSort = (event) => {
        setSorted(event.target.value);
    };

    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    let axiosInstance = useAxiosInstance();
    const { data: assetList, isPending: isListLoading } = useQuery({
        queryKey: ['assetList', currentUserEmail, assetType, sorted, status],
        queryFn: async () => {
            const response = await axiosInstance.get(`/assetList/${currentUserEmail}?productType=${assetType}&sort=${sorted}&status=${status}`);
            return response.data;
        },
        enabled: !!currentUserEmail,
    })

    console.log(searchField)




    return (
        <div className='mx-auto w-[85%] my-12 bg-[#5CDB95] shadow-2xl py-8 px-8'>
            <div>
                <h1 className='text-4xl text-[#05386B] text-center font-bold'>Asset List</h1>
                <p className='text-xl mt-2 w-[75%] mx-auto text-[#05386B] text-center font-bold'>Efficiently manage and track your assets with this user-friendly system, providing a detailed overview of your organizational resources</p>
            </div>

            <div className='grid grid-cols-3 gap-6 mt-3'>
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

                <div>
                    <Box sx={{ minWidth: 120, marginTop: "8px", backgroundColor: "white" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sort By Quantity</InputLabel>
                            <Select
                                labelId="demo-simple-select-label-sort"
                                id="demo-simple-select-sort"
                                value={sorted}
                                label="sort"
                                onChange={handleSort}
                            >
                                <MenuItem value={"asc"}>Ascending</MenuItem>
                                <MenuItem value={"desc"}>Descending</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>

            <div className='mt-3 relative'>
                <input onChange={(event) => {
                    setSearchField(event.target.value);
                }} type="text" className='w-full py-3 px-3' placeholder='Search By Item Name' />
                <span className='absolute right-4 top-3'>
                    <SavedSearchIcon />
                </span>
            </div>

            <div>
                <div className='w-full bg-[#05386B] py-3 px-3 h-fit mt-4 rounded-tr-md rounded-tl-md grid grid-cols-12'>
                    <h2 className='text-white text-center font-semibold col-span-2'>NAME</h2>
                    <h2 className='text-white text-center font-semibold col-span-2'>TYPE</h2>
                    <h3 className='text-white text-center font-semibold col-span-1'>QUANTITY</h3>
                    <h3 className='text-white text-center font-semibold col-span-2'>STATUS</h3>
                    <h3 className='text-white text-center font-semibold col-span-3'>ADDED DATE</h3>
                    <h3 className='text-white text-center font-semibold col-span-1'>UPDATE</h3>
                    <h3 className='text-white text-center font-semibold col-span-1'>DELETE</h3>
                </div>
            </div>

            <div>
                {
                    assetList?.map(asset =>
                        <div className='w-full bg-[#05386B] border-2 border-[#05386B] bg-transparent border-collapse text-[#05386B] py-3 px-3 h-fit grid grid-cols-12'>
                            <h2 className='text-[#05386B] text-center font-semibold col-span-2'>{asset.productName}</h2>
                            <h2 className='text-[#05386B] text-center font-semibold col-span-2'>{asset.productType}</h2>
                            <h3 className='text-[#05386B] text-center font-semibold col-span-1'>{asset.productQuantity}</h3>
                            <h3 className='text-[#05386B] text-center font-semibold col-span-2'>{asset.status}</h3>
                            <h3 className='text-[#05386B] text-center font-semibold col-span-3'>ADDED DATE</h3>
                            <h3 className='text-[#05386B] text-center font-semibold col-span-1'>UPDATE</h3>
                            <h3 className='text-[#05386B] text-center font-semibold col-span-1'>DELETE</h3>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AssetList;