import React, { useState } from 'react';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { ColorRing } from 'react-loader-spinner';

const AllRequests = () => {
    const [searchField, setSearchField] = useState('');

    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: allRequests, isLoading, refetch } = useQuery({
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

    let handleReject = (id, assetId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once Rejected, you cannot Approve this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#05386B',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Reject!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.patch(`/statusRejected/${id}`)
                    .then(res => {
                        axiosInstance.patch(`/changeAssetStatus/${assetId}`)
                            .then(res => {
                                if (res.data.modifiedCount > 0) {
                                    toast.success("Request Rejected!")
                                    refetch();
                                }
                            })
                    })
            }
        });
    }

    return (
        <div className='mx-auto w-full lg:w-[85%] my-12 bg-gradient-to-bl from-[#5ebe88] to-[#3bf78f] shadow-2xl py-8 px-0 lg:px-8'>
            <Helmet>
                <title>Admin | All Requests</title>
            </Helmet>
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

                {
                    isLoading ?
                        (
                            <div className='flex justify-center items-center'>
                                <ColorRing
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                />
                            </div>
                        ) : (
                            <div>
                                <div>
                                    <div className='w-full bg-[#05386B] py-3 px-1 h-fit mt-4 rounded-tr-md rounded-tl-md grid grid-cols-12 justify-center items-center'>
                                        <h2 className='text-white text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-1'>ASSET NAME</h2>
                                        <h2 className='text-white text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-1'>ASSET TYPE</h2>
                                        <h3 className='text-white text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-2'>EMAIL OF REQUESTER</h3>
                                        <h3 className='text-white text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-1'>NAME OF REQUESTER</h3>
                                        <h3 className='text-white text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-2'>REQUEST DATE</h3>
                                        <h3 className='text-white text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-2'>ADDITIONAL NOTE</h3>
                                        <h3 className='text-white text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-1'>STATUS</h3>
                                        <h3 className='text-white text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-1'>APPROVE</h3>
                                        <h3 className='text-white text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-1'>REJECT</h3>
                                    </div>
                                </div>

                                {
                                    allRequests?.length == 0 ?
                                        <div>
                                            <h1 className='text-3xl text-[#05386B] text-center mt-3 font-bold'>No Requests Currently</h1>
                                        </div>
                                        :
                                        <div>
                                            {
                                                allRequests?.map((requests, index) =>
                                                    <div className='w-full justify-center items-center bg-[#05386B] border-2 border-[#05386B] bg-transparent border-collapse text-[#05386B] py-3 px-3 h-fit grid grid-cols-12'>
                                                        <h2 className='text-[#05386B] text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-1'>{requests?.assetName}</h2>
                                                        <h2 className='text-[#05386B] text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-1'>{requests?.assetType}</h2>
                                                        <h2 className='text-[#05386B] text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-2'>{requests?.requestorEmail}</h2>
                                                        <h2 className='text-[#05386B] text-[6px] md:text-[12px] lg:text-xs xl:text-base  text-center font-semibold col-span-1'>{requests?.requestorName}</h2>
                                                        <h2 className='text-[#05386B] text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-2'>
                                                            {new Date(requests?.requestedDate).toLocaleDateString('en-US', {
                                                                month: 'long',
                                                                day: 'numeric',
                                                                year: 'numeric'
                                                            })}
                                                        </h2>
                                                        <h2 className='text-[#05386B] text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-2'>{requests?.extraAdditionalInfo}</h2>

                                                        <h2 className='text-[#05386B] text-[6px] md:text-[12px] lg:text-xs xl:text-base text-center font-semibold col-span-1'>{requests?.requestStatus}</h2>

                                                        <button
                                                            onClick={() => handleApprove(requests?._id, requests?.assetId)}
                                                            className={`text-white text-[6px] md:text-[12px] lg:text-xs xl:text-base py-2 px-1 rounded-md border ${requests?.requestStatus === "Rejected" || requests?.requestStatus === "Approved" ? "bg-gray-300 text-[6px] md:text-[12px] lg:text-xs xl:text-base text-gray-500 border-gray-500 cursor-not-allowed" : "border-[#05386B] text-[6px] md:text-[12px] lg:text-xs xl:text-base bg-[#05386B] hover:bg-transparent hover:text-[#05386B] hover:border hover:border-[#05386B]"} mr-2`}
                                                            disabled={requests?.requestStatus === "Rejected" || requests?.requestStatus === "Approved"}
                                                        >
                                                            APPROVE
                                                        </button>


                                                        <button
                                                            onClick={() => handleReject(requests?._id, requests?.assetId)}
                                                            className={`text-white text-[6px] md:text-[12px] lg:text-xs xl:text-base py-2 px-1 rounded-md border ${requests?.requestStatus === "Rejected" ? "bg-gray-300 text-[6px] md:text-[12px] lg:text-xs xl:text-base text-gray-500 border-gray-500 cursor-not-allowed" : "border-[#05386B] text-[6px] md:text-[12px] lg:text-xs xl:text-base bg-[#05386B] hover:bg-transparent hover:text-[#05386B] hover:border hover:border-[#05386B]"} mr-2`}
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
                        )
                }
            </div>
        </div>
    );
};

export default AllRequests;