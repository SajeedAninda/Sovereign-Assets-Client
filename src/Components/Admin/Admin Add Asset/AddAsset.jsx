import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddAsset = () => {
    const [productType, setProductType] = useState('');
    const handleChange = (event) => {
        setProductType(event.target.value);
    };



    return (
        <div className='mx-auto w-[85%] my-12 bg-[#5CDB95] shadow-2xl py-8 px-8'>
            <h1 className='text-4xl text-[#05386B] text-center font-bold'>
                Add an Asset
            </h1>
            <p className='text-xl mt-2 w-[75%] mx-auto text-[#05386B] text-center font-bold'>
                Streamline your workflow by effortlessly adding new assets for your team. Equip your employees with the tools they need for success.
            </p>

            <div className='mt-6'>
                <form className='w-[50%] border-4 border-[#05386B] rounded-md p-4'>
                    <div className='w-full'>
                        <label className='text-2xl text-[#05386B] font-bold' htmlFor="productName">Product Name:</label> <br />
                        <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter The Product Name' type="text" id='productName' name='productName' required />
                    </div>

                    <div className='w-full mt-4'>
                        <div className='w-full mt-3'>
                            <label className='text-2xl text-[#05386B] font-bold' htmlFor="productType">Product Type:</label> <br />
                            <Box sx={{ minWidth: 120, marginTop: "8px", backgroundColor: "white" }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Product Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={productType}
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
                        <label className='text-2xl text-[#05386B] font-bold' htmlFor="productName">Product Name:</label> <br />
                        <input className='py-3 px-4 rounded-md mt-2 w-full' placeholder='Enter The Product Name' type="text" id='productName' name='productName' required />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAsset;