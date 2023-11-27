import React from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const CustomRequestsAdmin = () => {

    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: allCustomRequests, refetch } = useQuery({
        queryKey: ['allCustomRequests', userData],
        queryFn: async () => {
            const response = await axiosInstance.get(`/allCustomRequests/${userData.companyName}`);
            return response.data;
        },
        enabled: !!userData,
    })

    let handleApprove = (id) => {
        axiosInstance.patch(`/customStatusApproved/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    toast.success("Request Approved!")
                    refetch()
                }
            })
    }

    let handleReject = (id) => {
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
                axiosInstance.patch(`/customStatusRejected/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            toast.success("Request Rejected!")
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div className='mx-auto w-[85%] my-12 bg-[#5CDB95] shadow-2xl py-8 px-8'>
            <div>
                <div>
                    <h1 className='text-3xl text-[#05386B] text-left font-bold'>All Custom Requests: </h1>
                </div>

                <div>
                    <div className='w-full bg-[#05386B] py-3 px-1 h-fit mt-4 rounded-tr-md rounded-tl-md grid grid-cols-12 justify-center items-center'>
                        <h2 className='text-white text-center font-semibold col-span-2'>ASSET NAME</h2>
                        <h2 className='text-white text-center font-semibold col-span-1'>ASSET PRICE</h2>
                        <h3 className='text-white text-center font-semibold col-span-1'>ASSET TYPE</h3>
                        <h3 className='text-white text-center font-semibold col-span-2'>ASSET IMAGE</h3>
                        <h3 className='text-white text-center font-semibold col-span-2'>WHY NEEDED</h3>
                        <h3 className='text-white text-center font-semibold col-span-2'>ADDITIONAL INFO</h3>
                        <h3 className='text-white text-center font-semibold col-span-1'>APPROVE</h3>
                        <h3 className='text-white text-center font-semibold col-span-1'>REJECT</h3>
                    </div>
                </div>

                {
                    allCustomRequests?.length == 0 ?
                        <div>
                            <h1 className='text-3xl text-[#05386B] text-center mt-3 font-bold'>No Requests Currently</h1>
                        </div>
                        :
                        <div>
                            {
                                allCustomRequests?.map((requests, index) =>
                                    <div className='w-full justify-center items-center bg-[#05386B] border-2 border-[#05386B] bg-transparent border-collapse text-[#05386B] py-3 px-3 h-fit grid grid-cols-12'>
                                        <h2 className='text-[#05386B] text-base text-center font-semibold col-span-2'>{requests?.assetName}</h2>
                                        <h2 className='text-[#05386B] text-base text-center font-semibold col-span-1'>{requests?.assetPrice}</h2>
                                        <h2 className='text-[#05386B] text-base text-center font-semibold col-span-1'>{requests?.assetTypes}</h2>
                                        <div className='text-[#05386B] text-base text-center font-semibold col-span-2'>
                                            <img src={requests?.assetImage} alt="" />
                                        </div>
                                        <h2 className='text-[#05386B] text-base text-center font-semibold col-span-2'>{requests?.whyNeed}</h2>
                                        <h2 className='text-[#05386B] text-base text-center font-semibold col-span-2'>{requests?.additionalInfo}</h2>

                                        <button
                                            onClick={() => handleApprove(requests?._id)}
                                            className={`text-white py-2 px-1 rounded-md border ${requests?.status === "Rejected" || requests?.status === "Approved" ? "bg-gray-300 text-gray-500 border-gray-500 cursor-not-allowed" : "border-[#05386B] bg-[#05386B] hover:bg-transparent hover:text-[#05386B] hover:border hover:border-[#05386B]"} mr-2`}
                                            disabled={requests?.status === "Rejected" || requests?.status === "Approved"}
                                        >
                                            APPROVE
                                        </button>


                                        <button
                                            onClick={() => handleReject(requests?._id)}
                                            className={`text-white py-2 px-1 rounded-md border ${requests?.status === "Rejected" ? "bg-gray-300 text-gray-500 border-gray-500 cursor-not-allowed" : "border-[#05386B] bg-[#05386B] hover:bg-transparent hover:text-[#05386B] hover:border hover:border-[#05386B]"} mr-2`}
                                            disabled={requests?.status === "Rejected"}
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

export default CustomRequestsAdmin;