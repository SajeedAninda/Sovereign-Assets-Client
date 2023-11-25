import React, { useState } from 'react';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllRequests = () => {
    const [searchField, setSearchField] = useState('');

    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: allRequests, refetch } = useQuery({
        queryKey: ['allRequests', userData, searchField],
        queryFn: async () => {
            const response = await axiosInstance.get(`/allRequests/${userData.companyName}?requestorName=${searchField}`);
            return response.data;
        },
        enabled: !!userData,
    })

    let handleApprove = (id, assetId) => {
        axiosInstance.patch(`/statusApproved/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    axiosInstance.patch(`/changeAssetQuantity/${assetId}`)
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                toast.success("Request Approved!")
                                refetch();
                            }
                        })
                }
            })
    }

    let handleReject = (id) => {
        axiosInstance.patch(`/statusRejected/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success("Request Rejected!")
                    refetch();
                }
            })
    }

    return (
        <div className='mx-auto w-[85%] my-12 bg-[#5CDB95] shadow-2xl py-8 px-8'>
            <div className='mt-3 relative border-b-2 border-[#05386B] pb-8'>
                <input onChange={(event) => {
                    setSearchField(event.target.value);
                }} type="text" className='w-full py-3 px-3' placeholder='Search By Requester Name' />
                <span className='absolute right-4 top-3'>
                    <SavedSearchIcon />
                </span>
            </div>

            <div className='mt-8'>
                <div>
                    <h1 className='text-3xl text-[#05386B] text-left font-bold'>All Requests: </h1>
                </div>

                <div>
                    <div className='w-full bg-[#05386B] py-3 px-1 h-fit mt-4 rounded-tr-md rounded-tl-md grid grid-cols-12 justify-center items-center'>
                        <h2 className='text-white text-center font-semibold col-span-1'>ASSET NAME</h2>
                        <h2 className='text-white text-center font-semibold col-span-1'>ASSET TYPE</h2>
                        <h3 className='text-white text-center font-semibold col-span-2'>EMAIL OF REQUESTER</h3>
                        <h3 className='text-white text-center font-semibold col-span-1'>NAME OF REQUESTER</h3>
                        <h3 className='text-white text-center font-semibold col-span-2'>REQUEST DATE</h3>
                        <h3 className='text-white text-center font-semibold col-span-2'>ADDITIONAL NOTE</h3>
                        <h3 className='text-white text-center font-semibold col-span-1'>STATUS</h3>
                        <h3 className='text-white text-center font-semibold col-span-1'>APPROVE</h3>
                        <h3 className='text-white text-center font-semibold col-span-1'>REJECT</h3>
                    </div>
                </div>

                {
                    allRequests?.length == 0 ?
                        <div>
                            <h1 className='text-3xl text-[#05386B] text-center mt-3 font-bold'>No Users Available To Add</h1>
                        </div>
                        :
                        <div>
                            {
                                allRequests?.map((requests, index) =>
                                    <div className='w-full justify-center items-center bg-[#05386B] border-2 border-[#05386B] bg-transparent border-collapse text-[#05386B] py-3 px-3 h-fit grid grid-cols-12'>
                                        <h2 className='text-[#05386B] text-base text-center font-semibold col-span-1'>{requests?.assetName}</h2>
                                        <h2 className='text-[#05386B] text-base text-center font-semibold col-span-1'>{requests?.assetType}</h2>
                                        <h2 className='text-[#05386B] text-base text-center font-semibold col-span-2'>{requests?.requestorEmail}</h2>
                                        <h2 className='text-[#05386B] text-base text-center font-semibold col-span-1'>{requests?.requestorName}</h2>
                                        <h2 className='text-[#05386B] text-center font-semibold col-span-2'>
                                            {new Date(requests?.requestedDate).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </h2>
                                        <h2 className='text-[#05386B] text-base text-center font-semibold col-span-2'>{requests?.extraAdditionalInfo}</h2>

                                        <h2 className='text-[#05386B] text-base text-center font-semibold col-span-1'>{requests?.requestStatus}</h2>

                                        <button
                                            onClick={() => handleApprove(requests?._id, requests?.assetId)}
                                            className={`text-white py-2 px-1 rounded-md border ${requests?.requestStatus === "Approved" ? "bg-gray-300 text-gray-500 border-gray-500 cursor-not-allowed" : "border-[#05386B] bg-[#05386B] hover:bg-transparent hover:text-[#05386B] hover:border hover:border-[#05386B]"} mr-2`}
                                            disabled={requests?.requestStatus === "Approved"}
                                        >
                                            APPROVE
                                        </button>

                                        <button
                                            onClick={() => handleReject(requests?._id)}
                                            className={`text-white py-2 px-1 rounded-md border ${requests?.requestStatus === "Rejected" ? "bg-gray-300 text-gray-500 border-gray-500 cursor-not-allowed" : "border-[#05386B] bg-[#05386B] hover:bg-transparent hover:text-[#05386B] hover:border hover:border-[#05386B]"} mr-2`}
                                            disabled={requests?.requestStatus === "Rejected"}
                                        >
                                            REJECT
                                        </button>

                                    </div>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AllRequests;