import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import "./guestBanner.css"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const GuestBanner = () => {
    return (
        <div className='h-[80vh]'>
            <Helmet>
                <title>Sovereign Assets | Home</title>
            </Helmet>
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
                <SwiperSlide>
                    <div className='employee h-[85vh] flex justify-center lg:justify-end items-center pr-0 lg:pr-32 pb-20'>
                        <div className='flex-col justify-center items-center lg:items-end'>
                            <div className='flex flex-col items-center lg:items-end gap-2'>
                                <h1 className='text-[#05386B] text-center text-4xl md:text-6xl font-bold'>
                                    Join As an Employee
                                </h1>
                                <p className='text-[#05386B] w-[70%] lg:w-[50%] text-center lg:text-right text-lg font-bold'>
                                    Apply as an employee to submit asset requests to your team administrator, create personalized requests, access your assets, and view team members.
                                </p>
                            </div>
                            <div className='flex justify-center lg:justify-end'>
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
                    <div className='admin h-[85vh] flex justify-center lg:justify-start items-center pl-0 lg:pl-32 pb-20'>
                        <div className='flex-col justify-center lg:justify-end items-center lg:items-end'>
                            <div>
                                <h1 className='text-[#05386B] text-center lg:text-left text-4xl md:text-6xl font-bold'>
                                    Join As an HR/Admin
                                </h1>
                                <p className='text-[#05386B] mt-2 w-[50%] mx-auto lg:mx-0 text-center lg:text-left text-lg font-bold'>
                                    Enlist as an administrator to compile a list of assets, view the listed assets, add employees, and review their requests.
                                </p>
                            </div>
                            <div className='flex justify-center lg:justify-start'>
                                <Link to={"/joinAsAdmin"}>
                                    <button className='px-20 py-3 mt-5 rounded-md hover:bg-transparent border-2 border-[#05386B] hover:border-2 hover:border-[#05386B] hover:text-[#05386B] bg-[#05386B] text-white text-xl font-bold'>
                                        Join
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default GuestBanner;