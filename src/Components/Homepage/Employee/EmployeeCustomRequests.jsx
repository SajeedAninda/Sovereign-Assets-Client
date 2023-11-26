import React, { useState } from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import { Box } from '@mui/material';
import toast from 'react-hot-toast';

const EmployeeCustomRequests = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;
    let [editable, setEditable] = useState(false);
    const [selectedAssetType, setSelectedAssetType] = useState("");


    const [openAssets, setOpenAssets] = useState({});

    const handleOpen = (assetId) => {
        setOpenAssets((prevOpenAssets) => ({
            ...prevOpenAssets,
            [assetId]: true,
        }));
    };
    const handleClose = (assetId) => {
        setOpenAssets((prevOpenAssets) => ({
            ...prevOpenAssets,
            [assetId]: false,
        }));
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        border: '8px solid #05386B',
        boxShadow: 24,
        p: 4,
    };

    const { data: myCustomRequests, refetch } = useQuery({
        queryKey: ['myCustomRequests', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getMyCustomRequests/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail,
    })

    let handleSubmit = (id, e) => {
        e.preventDefault();
        const form = e.currentTarget;
        let assetName = form.querySelector('[name="assetName"]').value;
        let assetPrice = parseInt(form.querySelector('[name="assetPrice"]').value);
        let assetImage = form.querySelector('[name="assetImage"]').value;
        let whyNeed = form.querySelector('[name="whyNeed"]').value;
        let additionalInfo = form.querySelector('[name="additionalInfo"]').value;

        // Rest of the code
        let customRequest = { assetName, assetPrice, assetTypes: selectedAssetType, assetImage, whyNeed, additionalInfo };

        axiosInstance.patch(`/updateCustomAsset/${id}`, customRequest)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    refetch();
                    toast.success("Updated Succesfully");
                    handleClose(id)
                }
            })
    }




    return myCustomRequests?.length > 0 && (
        <div>
            <h1 className='text-4xl font-bold text-[#05386B] text-center my-12'>My Custom Requests</h1>

            <div className='grid grid-cols-2 gap-8 w-[85%] mx-auto'>
                {
                    myCustomRequests?.map(requests =>
                        <div class="w-full h-fit bg-transparent border-2 border-[#05386B] rounded-lg shadow">
                            <div>
                                <img class="rounded-t-lg w-full h-[300px] object-cover" src={requests?.assetImage} alt="" />
                            </div>
                            <div class="p-5">
                                <div className='flex justify-between items-center'>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#05386B]">Name: {requests?.assetName}</h5>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#05386B]">Price: {requests?.assetPrice}$</h5>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#05386B]">Type: {requests?.assetTypes}</h5>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#05386B]">Status: {requests?.status}</h5>
                                </div>
                                <button
                                    onClick={() => handleOpen(requests._id)}
                                    className='px-8 mt-3 py-3 flex gap-2 justify-center items-center bg-[#05386B] text-white font-bold border-2 border-[#05386B] rounded-md hover:text-[#05386B] hover:border-2 hover:bg-white hover:border-[#05386B]'>
                                    View Details
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>

                            <div>
                                <Modal
                                    open={openAssets[requests._id]}
                                    onClose={() => handleClose(requests._id)}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <form onSubmit={(e) => handleSubmit(requests?._id, e)}>
                                            <div>
                                                <div>
                                                    <div className='w-full'>
                                                        {
                                                            editable ?
                                                                <input placeholder='Image Link' className='w-full border-2 border-[#05386B] rounded-md text-lg' defaultValue={requests?.assetImage} type="text" name='assetImage' />
                                                                :
                                                                (
                                                                    <img className='w-full object-cover h-[200px]' src={requests?.assetImage} alt="" />
                                                                )
                                                        }
                                                    </div>
                                                </div>
                                                <div className='flex gap-4 mt-2 justify-between items-center'>
                                                    <div className='flex-1'>
                                                        {
                                                            editable ?
                                                                <input placeholder='Asset Name' className='w-full border-2 border-[#05386B] rounded-md text-lg' defaultValue={requests?.assetName} type="text" name='assetName' />
                                                                :
                                                                (
                                                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#05386B]">Name: {requests?.assetName}</h5>
                                                                )
                                                        }
                                                    </div>

                                                    <div className='flex-1'>
                                                        {
                                                            editable ?
                                                                <input placeholder='Asset Price' className='w-full border-2 border-[#05386B] rounded-md text-lg' defaultValue={requests?.assetPrice} type="number" name='assetPrice' />
                                                                :
                                                                (
                                                                    <h5 class="mb-2 flex justify-end text-2xl font-bold tracking-tight text-[#05386B]">Price: {requests?.assetPrice}$</h5>
                                                                )
                                                        }
                                                    </div>
                                                </div>
                                                <div className='flex gap-4 mt-2 justify-between items-center'>
                                                    <div className='flex-1'>
                                                        {
                                                            editable ?
                                                                <input className='w-full border-2 border-[#05386B] rounded-md text-lg' defaultValue={requests?.status} type="text" readOnly name='assetName' />
                                                                :
                                                                (
                                                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#05386B]">Status: {requests?.status}</h5>
                                                                )
                                                        }
                                                    </div>

                                                    <div className='flex-1'>
                                                        {
                                                            editable ?
                                                                <select
                                                                    defaultValue={requests?.assetTypes}
                                                                    onChange={(e) => setSelectedAssetType(e.target.value)}
                                                                    className='border-2 border-[#05386B] w-full py-1 rounded-md'
                                                                    name="assetTypes"
                                                                    id=""
                                                                >
                                                                    <option value="Returnable">Returnable</option>
                                                                    <option value="Non-Returnable">Non-Returnable</option>
                                                                </select>
                                                                :
                                                                (
                                                                    <h5 class="mb-2 flex justify-end text-2xl font-bold tracking-tight text-[#05386B]">Type: {requests?.assetTypes}</h5>
                                                                )
                                                        }
                                                    </div>
                                                </div>
                                                <div className='flex flex-col w-full gap-1 mt-3 justify-between items-center'>
                                                    <div className='w-full'>
                                                        {
                                                            editable ?
                                                                <textarea placeholder='Why Needed?' className='w-full border-2 border-[#05386B] rounded-md text-lg' defaultValue={requests?.whyNeed} type="text" name='whyNeed' />
                                                                :
                                                                (
                                                                    <h5 class="mb-2 flex justify-center text-lg font-bold tracking-tight text-[#05386B]">Why Needed: {requests?.whyNeed}</h5>
                                                                )
                                                        }
                                                    </div>

                                                    <div className='w-full'>
                                                        {
                                                            editable ?
                                                                <textarea placeholder='Additional Info' className='w-full border-2 border-[#05386B] rounded-md text-lg' defaultValue={requests?.additionalInfo} type="text" name='additionalInfo' />
                                                                :
                                                                (
                                                                    <h5 class="mb-2 flex justify-center text-lg font-bold tracking-tight text-[#05386B]">Additional Information: {requests?.additionalInfo}</h5>
                                                                )
                                                        }
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 class="mb-2 text-xl flex justify-center font-bold tracking-tight text-[#05386B]">
                                                        Requested Date:
                                                        {new Date(requests?.requestDate).toLocaleDateString('en-US', {
                                                            month: 'long',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className='flex justify-center items-center mt-4'>
                                                {
                                                    editable ?
                                                        <button
                                                            // onClick={() => handleUpdate(requests?._id)}
                                                            className='border-[#05386B] mx-auto py-2 px-8 border-2 hover:text-[#05386B] bg-[#05386B] text-center text-white rounded-md hover:bg-transparent hover:border-2' type='submit'>
                                                            Save
                                                        </button>
                                                        :
                                                        <button
                                                            onClick={(e) => { e.preventDefault(); setEditable(true); }}
                                                            className='border-[#05386B] mx-auto py-2 px-8 border-2 hover:text-[#05386B] bg-[#05386B] text-center text-white rounded-md hover:bg-transparent hover:border-2'
                                                            type="button">
                                                            Update
                                                        </button>

                                                }
                                                {
                                                    editable ?
                                                        <button
                                                            onClick={() => { setEditable(false) }}
                                                            className='border-[#05386B] mx-auto py-2 px-8 border-2 hover:text-[#05386B] bg-[#05386B] text-center text-white rounded-md hover:bg-transparent hover:border-2' type="button">
                                                            Cancel
                                                        </button>
                                                        :
                                                        <button
                                                            onClick={() => { handleClose(requests._id), setEditable(false) }}
                                                            className='border-[#05386B] mx-auto py-2 px-8 border-2 hover:text-[#05386B] bg-[#05386B] text-center text-white rounded-md hover:bg-transparent hover:border-2' type="button">
                                                            Close
                                                        </button>
                                                }
                                            </div>
                                        </form>
                                    </Box>
                                </Modal>
                            </div>
                        </div>


                    )
                }
            </div>
        </div>
    )
};

export default EmployeeCustomRequests;