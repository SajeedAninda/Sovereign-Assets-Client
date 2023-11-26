import React from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Person3Icon from '@mui/icons-material/Person3';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const EmployeeList = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: teamEmployees, refetch } = useQuery({
        queryKey: ['teamEmployees', userData],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getUsersByCompanyName/${userData.companyName}`);
            return response.data;
        },
        enabled: !!userData,
    })

    const handleRemoveFromTeam = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once Removed, you cannot revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#05386B',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.patch(`/removeFromTeam/${id}`)
                    .then(response => {
                        if (response.data.modifiedCount > 0) {
                            toast.success("Removed from the team");
                            refetch();
                        }
                    })
                    .catch(error => console.error(error));
            }
        });
    };



    return (
        <div className='mx-auto w-[85%] my-12 bg-[#5CDB95] shadow-2xl py-8 px-8'>
            <div className='border-b-2 border-[#05386B] pb-8'>
                <div className='flex justify-center items-center gap-20'>
                    <h2 className='text-4xl text-[#05386B] text-center font-bold'>
                        Team Name: {userData?.companyName}
                    </h2>
                    <div className='text-4xl text-[#05386B] text-center font-bold flex gap-4'>
                        <h3>Team Logo:</h3>
                        <img className='w-[80px]' src={userData?.companyLogo} alt="" />
                    </div>
                </div>
                <h2 className='text-4xl mt-5 text-[#05386B] text-center font-bold'>
                    Total Members: There are {teamEmployees?.length} members in this Team
                </h2>
            </div>

            <div>
                <h2 className='text-3xl text-[#05386B] text-left mt-4 font-bold'>
                    All Members:
                </h2>

                <div>
                    <div className='w-full bg-[#05386B] py-3 px-3 h-fit mt-4 rounded-tr-md rounded-tl-md grid grid-cols-12'>
                        <h2 className='text-white text-center font-semibold col-span-1'>SL</h2>
                        <h2 className='text-white text-center font-semibold col-span-3'>IMAGE</h2>
                        <h3 className='text-white text-center font-semibold col-span-4'>NAME</h3>
                        <h3 className='text-white text-center font-semibold col-span-2'>TYPE</h3>
                        <h3 className='text-white text-center font-semibold col-span-2'>REMOVE FROM TEAM</h3>
                    </div>
                </div>

                {
                    teamEmployees?.length == 0 ?
                        <div>
                            <h1 className='text-3xl text-[#05386B] text-center mt-3 font-bold'>No Employees Available</h1>
                        </div>
                        :
                        <div>
                            {
                                teamEmployees?.map((employee, index) =>
                                    <div className='w-full bg-[#05386B] border-2 border-[#05386B] bg-transparent border-collapse text-[#05386B] py-3 px-3 h-fit grid grid-cols-12'>
                                        <h2 className='text-[#05386B] text-xl text-center font-semibold col-span-1'>#{index + 1}</h2>
                                        <div className='text-[#05386B] flex justify-center text-center font-semibold col-span-3'>
                                            <img className='w-[40px] rounded-full' src={employee?.image || employee?.companyLogo} alt="" />
                                        </div>
                                        <h3 className='text-[#05386B] text-xl text-center font-semibold col-span-4'>{employee?.fullName}</h3>
                                        <div className='text-[#05386B] text-center font-semibold col-span-2'>
                                            {
                                                employee?.role === "admin" ?
                                                    <AdminPanelSettingsIcon />
                                                    :
                                                    <Person3Icon />
                                            }
                                        </div>
                                        <button
                                            onClick={() => handleRemoveFromTeam(employee._id)}
                                            disabled={employee?.role === 'admin'}
                                            className={`text-white py-2 px-2 rounded-md hover:bg-transparent border-2 ${employee?.role === 'admin' ? 'border-gray-300 text-gray-300 cursor-not-allowed' : 'border-[#05386B] hover:text-[#05386B] bg-[#05386B]'
                                                } text-center font-semibold col-span-2`}
                                        >
                                            {employee?.role === 'admin' ? 'Admin - Cannot Remove' : 'Remove From Team'}
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

export default EmployeeList;