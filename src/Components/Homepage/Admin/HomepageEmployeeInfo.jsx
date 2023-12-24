import React from 'react';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const HomepageEmployeeInfo = () => {
    let axiosInstance = useAxiosInstance();
    let [userData] = useCurrentUserData();
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;

    const { data: homepageEmployee, refetch } = useQuery({
        queryKey: ['homepageEmployee', userData],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getHomepageEmployee/${userData?.companyName}`);
            return response.data;
        },
        enabled: !!userData,
    })
    // console.log(homepageEmployee)


    return (
        <div className='bg-gradient-to-tr from-[#05386B] to-[#2d77c0] h-fit py-12'>
            <div className='w-[85%] mx-auto'>
                <h1 className='text-4xl text-white font-bold text-center'>Employees of Your Team</h1>
                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        // autoplay={{
                        //     delay: 1000,
                        //     disableOnInteraction: false,
                        // }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            homepageEmployee?.length>0?
                            <div>
                            {
                                homepageEmployee?.map(employee =>
                                    <SwiperSlide>
                                        <div className='flex flex-col gap-6 justify-center items-center py-12'>
                                            <img className='w-[120px] rounded-full' src={employee?.image} alt="" />
                                            <h2 className='text-white font-bold text-2xl md:text-3xl'>{employee?.fullName}</h2>
                                            <h2 className='text-white font-bold text-xl md:text-2xl'>{employee?.email}</h2>
                                            <h2 className='text-white font-bold text-xl capitalize'>{employee?.role}</h2>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </div>
                        :
                        <div className='py-8'>
                            <h1 className='text-3xl font-bold text-center text-white'>No Employees Added Yet</h1>
                        </div>
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HomepageEmployeeInfo;