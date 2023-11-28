import React from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MostReqItemEmployee = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: mostReqItemEmployee, refetch } = useQuery({
        queryKey: ['mostReqItemEmployee', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/mostReqItemsEmployee/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail,
    })
    // console.log(mostReqItemEmployee)


    return (
        <div className='bg-[#5CDB95] h-fit'>
            <div className='w-[85%] mx-auto py-12 '>
                <h1 className='text-4xl font-bold text-center text-[#05386B]'>Frequently Requested Items</h1>
                {
                    mostReqItemEmployee?.length > 0 ?
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-6'>
                            {
                                mostReqItemEmployee?.map(requests =>
                                    <div className='group hover:bg-[#05386B] cursor-pointer border-2 border-[#05386B] p-4'>
                                        <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Asset Name: {requests?.asset.assetName}</h2>
                                        <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Asset Type: {requests?.asset.assetType}</h2>
                                        <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Team Name: {requests?.asset.requestorTeam}</h2>
                                        <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Times Requested: {requests?.count} times</h2>


                                    </div>)
                            }
                        </div>
                        :
                        <div className='py-8'>
                            <h1 className='text-3xl font-bold text-center text-[#05386B]'>No Requests Found</h1>
                        </div>

                }
            </div>
        </div>
    );
};

export default MostReqItemEmployee;