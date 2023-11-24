import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

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

    console.log(status, assetType, sorted, searchField);


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

            <div className='mt-3'>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '100%' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                backgroundColor: 'white',
                            },
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-uncontrolled"
                        label="Search By Item Name"
                        value={searchField}
                        onChange={(event) => {
                            setSearchField(event.target.value);
                        }}
                        variant="outlined"
                    />
                </Box>

            </div>
        </div>
    );
};

export default AssetList;