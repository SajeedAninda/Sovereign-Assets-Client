import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import "./guestBanner.css"
import { Link } from 'react-router-dom';


const GuestBanner = () => {
    return (
        <div className='h-[90vh]'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}

                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='employee h-[85vh] flex justify-end items-center pr-32 pb-20'>
                        <div className='flex-col justify-center items-center'>
                            <h1 className='text-[#EDF5E1] text-6xl font-bold'>
                                Join As an Employee
                            </h1>
                            <div className='flex justify-end'>
                                <Link to={"/joinAsEmployee"}>
                                    <button className='px-20 py-3 mt-5 rounded-md hover:bg-transparent border-2 border-[#05386B] hover:border-2 hover:border-[#05386B] hover:text-[#05386B] bg-[#05386B] text-xl text-white font-bold'>
                                        Join
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='admin h-[85vh] flex justify-start items-center pl-32 pb-20'>
                        <div className='flex-col justify-end items-end'>
                            <h1 className='text-[#EDF5E1] text-6xl font-bold'>
                                Join As an HR/Admin
                            </h1>
                            <Link to={"/joinAsAdmin"}>
                                <button className='px-20 py-3 mt-5 rounded-md hover:bg-transparent border-2 border-[#05386B] hover:border-2 hover:border-[#05386B] hover:text-[#05386B] bg-[#05386B] text-white text-xl font-bold'>
                                    Join
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default GuestBanner;