import React from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Person3Icon from '@mui/icons-material/Person3';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const MyTeam = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: teamMembers, refetch } = useQuery({
        queryKey: ['teamMembers', userData],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getUsersByCompanyName/${userData.companyName}`);
            return response.data;
        },
        enabled: !!userData,
    })

    let currentDate = new Date();
    let upcomingBirthdays = teamMembers?.filter((team) => {
        let birthDate = new Date(team?.date_of_birth);
        return !isNaN(birthDate.getTime()) && birthDate.getMonth() === currentDate.getMonth();
    });




    return (
        <div className='mx-auto w-[85%] my-12 bg-[#5CDB95] shadow-2xl py-8 px-8'>
            <div>
                <h1 className='text-3xl pb-2 text-[#05386B] text-left font-bold'>Upcoming Events:</h1>
                {upcomingBirthdays?.length === 0 ? (
                    <div>
                        <h1 className='text-3xl text-[#05386B] text-center mt-3 font-bold'>
                            No upcoming birthdays this month
                        </h1>
                    </div>
                ) : (
                    <div>
                        {upcomingBirthdays?.map((team, index) => {
                            let birthDate = new Date(team?.date_of_birth);
                            let today = new Date();
                            birthDate.setFullYear(today.getFullYear());

                            let daysUntilBirthday =
                                Math.ceil((birthDate - today) / (1000 * 60 * 60 * 24));

                            let birthdayPassed = daysUntilBirthday < 0;

                            return (
                                <div key={index}>
                                    <div className='w-full bg-[#05386B] justify-center items-center py-3 px-3 h-fit mt-4 rounded-tr-md rounded-tl-md grid grid-cols-12'>
                                        <h2 className='text-white text-center font-semibold col-span-1'>SL</h2>
                                        <h2 className='text-white text-center font-semibold col-span-3'>IMAGE</h2>
                                        <h3 className='text-white text-center font-semibold col-span-4'>NAME</h3>
                                        <h3 className='text-white text-center font-semibold col-span-2'>Date of Birth</h3>
                                        <h3 className='text-white text-center font-semibold col-span-2'>Remaining Days</h3>
                                    </div>

                                    <div className='w-full bg-[#05386B] border-2 border-[#05386B] bg-transparent border-collapse text-[#05386B] py-3 px-3 h-fit justify-center items-center grid grid-cols-12'>
                                        <h2 className='text-[#05386B] text-xl text-center font-semibold col-span-1'>#{index + 1}</h2>
                                        <div className='text-[#05386B] flex justify-center text-center font-semibold col-span-3'>
                                            <img className='w-[40px] rounded-full' src={team?.image || team?.companyLogo} alt='' />
                                        </div>
                                        <h3 className='text-[#05386B] text-xl text-center font-semibold col-span-4'>{team?.fullName}</h3>
                                        <h3 className='text-[#05386B] text-xl text-center font-semibold col-span-2'>
                                            {team?.date_of_birth}
                                        </h3>
                                        <h3 className='text-[#05386B] text-xl text-center font-semibold col-span-2'>
                                            {birthdayPassed ? 'Birthday has passed' : `${daysUntilBirthday} days to go`}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>








            <div className='pt-8'>
                <h1 className='text-3xl text-[#05386B] text-left font-bold'>Team Members List:</h1>

                <div>
                    <div className='w-full bg-[#05386B] justify-center items-center py-3 px-3 h-fit mt-4 rounded-tr-md rounded-tl-md grid grid-cols-10'>
                        <h2 className='text-white text-center font-semibold col-span-1'>SL</h2>
                        <h2 className='text-white text-center font-semibold col-span-3'>IMAGE</h2>
                        <h3 className='text-white text-center font-semibold col-span-4'>NAME</h3>
                        <h3 className='text-white text-center font-semibold col-span-2'>TYPE</h3>
                    </div>
                </div>
                <div>
                    {
                        teamMembers?.length == 0 ?
                            <div>
                                <h1 className='text-3xl text-[#05386B] text-center mt-3 font-bold'>No Employees Available</h1>
                            </div>
                            :
                            <div>
                                {
                                    teamMembers?.map((team, index) =>
                                        <div className='w-full bg-[#05386B] border-2 border-[#05386B] bg-transparent border-collapse text-[#05386B] py-3 px-3 h-fit justify-center items-center grid grid-cols-10'>
                                            <h2 className='text-[#05386B] text-xl text-center font-semibold col-span-1'>#{index + 1}</h2>
                                            <div className='text-[#05386B] flex justify-center text-center font-semibold col-span-3'>
                                                <img className='w-[40px] rounded-full' src={team?.image || team?.companyLogo} alt="" />
                                            </div>
                                            <h3 className='text-[#05386B] text-xl text-center font-semibold col-span-4'>{team?.fullName}</h3>
                                            <div className='text-[#05386B] text-center font-semibold col-span-2'>
                                                {
                                                    team?.role === "admin" ?
                                                        <AdminPanelSettingsIcon />
                                                        :
                                                        <Person3Icon />
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyTeam;