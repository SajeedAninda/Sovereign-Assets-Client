import React from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MonthlyRequests = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: allRequests, refetch } = useQuery({
        queryKey: ['allRequests', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getRequestsByEmail/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail,
    })

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1

    const requestsThisMonth = allRequests?.filter(request => {
        const requestDate = new Date(request.requestedDate);
        return requestDate.getMonth() + 1 === currentMonth;
    });

    return (
        <div className='bg-white h-fit'>
            <div className='w-[85%] mx-auto py-12 '>
                <h1 className='text-4xl font-bold text-center text-[#05386B]'>Monthly Requests</h1>
                <div className='grid grid-cols-3 py-8 gap-6'>
                    {
                        requestsThisMonth?.map(requests =>
                            <div className='group hover:bg-[#05386B] cursor-pointer border-2 border-[#05386B] p-4'>
                                <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Asset Name: {requests?.assetName}</h2>
                                <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Asset Type: {requests?.assetType}</h2>
                                <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Request Status: {requests?.requestStatus}</h2>
                                <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Team Name: {requests?.requestorTeam}</h2>
                                <h2 className='text-[#05386B] group-hover:text-white text-lg font-bold'>Requested Date: {new Date(requests?.requestedDate).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}</h2>

                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MonthlyRequests;