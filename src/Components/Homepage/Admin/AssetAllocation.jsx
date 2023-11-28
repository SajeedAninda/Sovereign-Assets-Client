import React from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const AssetAllocation = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: allocatedAsset, refetch } = useQuery({
        queryKey: ['allocatedAsset', userData],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getAllocatedAssets/${userData?.companyName}`);
            return response.data;
        },
        enabled: !!userData,
    })
    // console.log(allocatedAsset)

    return (
        <div className='bg-[#5CDB95] py-12'>
            <div className='w-[85%] mx-auto'>
                <h1 className='text-4xl font-bold text-[#05386B] text-center'>
                    Allocated Assets
                </h1>
                {
                    allocatedAsset?.length > 0 ?
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-6'>
                            {
                                allocatedAsset?.map(assets =>
                                    <div className='group hover:bg-[#05386B] cursor-pointer border-2 border-[#05386B] p-4'>
                                        <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Asset Name: {assets?.assetName}</h2>
                                        <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Asset Type: {assets?.assetType}</h2>
                                        <h2 className='text-[#05386B] group-hover:text-white text-lg font-bold'>Allocated To: {assets?.requestorName}</h2>
                                        <h2 className='text-[#05386B] group-hover:text-white text-lg font-bold'>Allocated On: {new Date(assets?.approvalDate).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}</h2>


                                    </div>)
                            }
                        </div>
                        :
                        <div className='py-8'>
                            <h1 className='text-3xl font-bold text-center text-[#05386B]'>No Items Found</h1>
                        </div>

                }
            </div>
        </div>
    );
};

export default AssetAllocation;