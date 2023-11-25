import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckOutForm2 from './CheckOutForm2';

const UpgradePackage = () => {
    const [adminPackage, setAdminPackage] = useState('');
    const handleChange = (event) => {
        setAdminPackage(event.target.value);
    };
    let availableEmployees;
        if (adminPackage === 5) {
            availableEmployees = 5;
        } else if (adminPackage === 8) {
            availableEmployees = 10;
        } else if (adminPackage === 15) {
            availableEmployees = 20;
        } else {
            availableEmployees = 0;
        }


    const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PAYMENT_KEY}`);


    return (
        <div className='w-[85%] mx-auto p-8 my-12 bg-[#5CDB95] h-fit shadow-2xl'>
            <h2 className='text-4xl text-[#05386B] text-center font-bold'>
                To Upgrade Your Package, Please Select Any of the following Packages from the select Box
            </h2>
            <div className='w-full mt-3'>
                <label className='text-2xl text-[#05386B] font-bold' htmlFor="productType">Select Package:</label> <br />
                <Box sx={{ minWidth: 120, marginTop: "8px", backgroundColor: "white" }}>
                    <FormControl fullWidth required>
                        <InputLabel id="demo-simple-select-label">Package Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={adminPackage}
                            label="Package"
                            onChange={handleChange}
                        >
                            <MenuItem value={5}>5 Members for $5</MenuItem>
                            <MenuItem value={8}>10 Members for $8</MenuItem>
                            <MenuItem value={15}>20 Members for $15</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div>
            <h2 className='text-2xl mt-4 text-[#05386B] text-center font-bold'>
                You have Selected ${adminPackage} Package To Increase your members by {availableEmployees} members. 
            </h2>
            </div>
            <div className='text-2xl mt-12 text-[#05386B] text-left font-bold'>
                <h2>Payable Amount: ${adminPackage}/=</h2>
            </div>
            <div className='mt-8'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm2  adminPackage={adminPackage} increasbleEmployees={availableEmployees}/>
                </Elements>
            </div>
        </div>
    );
};

export default UpgradePackage;