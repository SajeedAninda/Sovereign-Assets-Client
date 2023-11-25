import React from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const AddEmployee = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: productCountData, isPending: isUserLoading } = useQuery({
        queryKey: ['productCountData', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/productCount/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail,
    })

    console.log(productCountData);

    return (
        <div className='mx-auto w-[85%] my-12 bg-[#5CDB95] shadow-2xl py-8 px-8'>
            <h2 className='text-4xl text-[#05386B] text-center font-bold'>
                Total Product Count: You have added {productCountData?.productCount} Assets
            </h2>
            <h2 className='text-4xl mt-2 text-[#05386B] text-center font-bold'>
                Package Limit: You have {userData?.availableEmployees} Members Limit
            </h2>
            <p className='text-2xl mt-4 text-[#05386B] text-center font-bold'>To increase Your Package Limit, <Link to={"/upgradePackage"}><button className='px-4 py-1 rounded-md border-2 border-[#05386B] hover:bg-transparent hover:border-2 hover:border-[#05386B] ml-1 bg-[#05386B] text-white font-semibold'>Click Here</button></Link>
            </p>
        </div>
    );
};

export default AddEmployee;