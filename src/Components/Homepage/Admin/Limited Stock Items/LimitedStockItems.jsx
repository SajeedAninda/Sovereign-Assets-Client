import React from 'react';
import useAxiosInstance from '../../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../../Hooks/useCurrentUserData';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const LimitedStockItems = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: limitedStockItems, refetch } = useQuery({
        queryKey: ['limitedStockItems', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getLimitedStockItems/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail,
    })
    // console.log(limitedStockItems)


    return (
        <div className='bg-[#5CDB95] h-fit'>
            <div className='w-[85%] mx-auto py-12 '>
                <h1 className='text-4xl font-bold text-center text-[#05386B]'>Limited Stock Items</h1>
                {
                    limitedStockItems?.length > 0 ?
                        <div className='grid grid-cols-3 py-8 gap-6'>
                            {
                                limitedStockItems?.map(item =>
                                    <div className='group hover:bg-[#05386B] cursor-pointer border-2 border-[#05386B] p-4'>
                                        <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Asset Name: {item?.productName}</h2>
                                        <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Asset Type: {item?.productType}</h2>
                                        <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Team Name: {item?.assetCompany}</h2>
                                        <h2 className='text-[#05386B] group-hover:text-white text-2xl font-bold'>Asset Remaining: {item?.productQuantity}</h2>


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

export default LimitedStockItems;