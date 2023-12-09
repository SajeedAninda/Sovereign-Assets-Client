import React from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import Person3Icon from '@mui/icons-material/Person3';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { ColorRing } from 'react-loader-spinner';


const AddEmployee = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: productCountData, isLoading } = useQuery({
        queryKey: ['productCountData', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/productCount/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail,
    })

    const { data: availableEmployeeData, refetch } = useQuery({
        queryKey: ['availableEmployeeData'],
        queryFn: async () => {
            const response = await axiosInstance.get(`/availableEmployees`);
            return response.data;
        },
    })

    let handleAddToTeam = (id) => {
        axiosInstance.patch(`/addToTeam/${id}`, { currentUserEmail })
            .then((res) => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success("User Added to the Team");
                }
                if (res.data === "Not Enough Limit") {
                    toast.error("Not Enough Limit");
                }
            })
    }



    return (
        <div className='mx-auto w-full md:w-[85%] my-12 bg-[#5CDB95] shadow-2xl py-8 px-2 md:px-8'>
            <Helmet>
                <title>Admin | Add Employee</title>
            </Helmet>
            <div className='border-b-2 border-[#05386B] pb-4'>
                <h2 className='text-2xl lg:text-4xl text-[#05386B] text-center font-bold'>
                    Total Product Count: You have added {productCountData?.productCount} Assets
                </h2>
                <h2 className='text-2xl lg:text-4xl mt-2 text-[#05386B] text-center font-bold'>
                    Package Limit: You have {userData?.availableEmployees} Members Limit
                </h2>
                <p className='text-xl lg:text-2xl mt-4 text-[#05386B] text-center font-bold'>To increase Your Package Limit, <Link to={"/upgradePackage"}><button className='px-4 py-1 rounded-md border-2 border-[#05386B] hover:bg-transparent hover:border-2 hover:border-[#05386B] ml-1 bg-[#05386B] text-white font-semibold'>Click Here</button></Link>
                </p>
            </div>

            <h2 className='text-3xl text-[#05386B] text-left mt-10 font-bold'>
                List of Users who are Currently Available to Add:
            </h2>

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
                    )
                    :
                    (
                        <div>
                            <div>
                                <div className='w-full bg-[#05386B] py-3 px-3 h-fit mt-4 rounded-tr-md rounded-tl-md grid grid-cols-12 justify-center items-center'>
                                    <h2 className='text-white text-center font-semibold col-span-1'>SL</h2>
                                    <h2 className='text-white text-center font-semibold col-span-3'>IMAGE</h2>
                                    <h3 className='text-white text-center font-semibold col-span-4'>NAME</h3>
                                    <h3 className='text-white text-center font-semibold col-span-2'>TYPE</h3>
                                    <h3 className='text-white text-center font-semibold col-span-2'>ADD TO TEAM</h3>
                                </div>
                            </div>

                            {
                                availableEmployeeData?.length == 0 ?
                                    <div>
                                        <h1 className='text-3xl text-[#05386B] text-center mt-3 font-bold'>No Users Available To Add</h1>
                                    </div>
                                    :
                                    <div>
                                        {
                                            availableEmployeeData?.map((employee, index) =>
                                                <div className='w-full bg-[#05386B] border-2 border-[#05386B] bg-transparent border-collapse text-[#05386B] py-3 px-3 h-fit grid grid-cols-12 justify-center items-center'>
                                                    <h2 className='text-[#05386B] text-xl text-center font-semibold col-span-1'>#{index + 1}</h2>
                                                    <div className='text-[#05386B] flex justify-center text-center font-semibold col-span-3'>
                                                        <img className='w-[40px] rounded-full' src={employee?.image} alt="" />
                                                    </div>
                                                    <h3 className='text-[#05386B] text-xl text-center font-semibold col-span-4'>{employee?.fullName}</h3>
                                                    <div className='text-[#05386B] text-center font-semibold col-span-2'>
                                                        <Person3Icon />
                                                    </div>
                                                    <button onClick={() => handleAddToTeam(employee._id)} className='text-white py-2 px-2 rounded-md hover:bg-transparent border-2 border-[#05386B] hover:text-[#05386B] bg-[#05386B] text-center font-semibold col-span-2'>
                                                        Add to Team
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
    );
};

export default AddEmployee;