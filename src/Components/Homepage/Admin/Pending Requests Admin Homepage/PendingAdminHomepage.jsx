import React from 'react';
import useAxiosInstance from '../../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../../Hooks/useCurrentUserData';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const PendingAdminHomepage = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: pendingReqHomeAdmin, refetch } = useQuery({
        queryKey: ['pendingReqHomeAdmin', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getPendingReqAdminHome/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail,
    })


    return (
        <div className='bg-[#05386B] h-fit'>
            <div className='w-[85%] mx-auto py-12 '>
                <h1 className='text-4xl font-bold text-center text-[#5CDB95]'>Pending Requests</h1>
                {
                    pendingReqHomeAdmin?.length > 0 ?
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-6'>
                            {
                                pendingReqHomeAdmin?.map(requests =>
                                    <div className='group hover:bg-[#5CDB95] cursor-pointer border-2 border-[#5CDB95] p-4'>
                                        <h2 className='text-[#5CDB95] group-hover:text-[#05386B] text-2xl font-bold'>Asset Name: {requests?.assetName}</h2>
                                        <h2 className='text-[#5CDB95] group-hover:text-[#05386B] text-2xl font-bold'>Asset Type: {requests?.assetType}</h2>
                                        <h2 className='text-[#5CDB95] group-hover:text-[#05386B] text-2xl font-bold'>Request Status: {requests?.requestStatus}</h2>
                                        <h2 className='text-[#5CDB95] group-hover:text-[#05386B] text-lg font-bold'>Requested By: {requests?.requestorName}</h2>
                                        <h2 className='text-[#5CDB95] group-hover:text-[#05386B] text-lg font-bold'>Requested Date: {new Date(requests?.requestedDate).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}</h2>

                                    </div>)
                            }
                        </div>
                        :
                        <div className='py-8'>
                            <h1 className='text-3xl font-bold text-center text-[white]'>You have No Pending Requests</h1>
                        </div>
                }
            </div>
        </div>
    );
};

export default PendingAdminHomepage;