import React from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import ApexChart from './ApexChart';

const PieChartSection = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: getPercentage = {}, refetch } = useQuery({
        queryKey: ['getPercentage', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getAssetTypePercentage/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail,
    })
    console.log(getPercentage)
    let { returnablePercentage, nonReturnablePercentage } = getPercentage;


    return (
        <div className='w-[85%] mx-auto h-fit py-12'>
            <h1 className='text-center text-[#05386B] text-4xl font-bold'>Total Percentage of Requested Asset</h1>
            <div className='flex justify-center items-center py-8'>
                <ApexChart
                    returnablePercentage={returnablePercentage}
                    nonReturnablePercentage={nonReturnablePercentage}
                />
            </div>
        </div>
    );
};

export default PieChartSection;