import React from 'react';

const Packages = () => {
    return (
        <div className='bg-gradient-to-bl from-[#5ebe88] to-[#3bf78f] h-fit'>
            <div className='w-[90%] mx-auto pb-12'>
                <div className='py-12'>
                    <h1 className='text-center text-4xl lg:text-5xl font-bold text-[#05386B]'>
                        Packages
                    </h1>
                    <div class="text-center">
                        <span class="inline-block w-1 h-1 rounded-full bg-[#05386B] ml-1"></span>
                        <span class="inline-block w-3 h-1 rounded-full bg-[#05386B] ml-1"></span>
                        <span class="inline-block w-40 h-1 rounded-full bg-[#05386B]"></span>
                        <span class="inline-block w-3 h-1 rounded-full bg-[#05386B] ml-1"></span>
                        <span class="inline-block w-1 h-1 rounded-full bg-[#05386B] ml-1"></span>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                    <div className='w-full lg:w-[40%] flex flex-col justify-center items-center'>
                        <h2 className='text-center text-3xl lg:text-4xl font-bold text-[#05386B]'>Find the plan that's right for You</h2>
                        <p className='text-center text-lg lg:text-xl mt-3 full mx-auto font-semibold text-[#05386B]'>Explore Our Packages and see what suits you the best</p>
                    </div>

                    <div className='cards grid grid-cols-1 lg:grid-cols-3 gap-6 w-full lg:w-[60%] items-center'>
                        <div className='group hover:bg-gradient-to-tr hover:from-[#05386B] hover:to-[#2d77c0] border-2 border-[#05386B] rounded-md flex flex-col justify-center items-center h-[300px] gap-2 shadow-2xl cursor-pointer'>
                            <p className=' group-hover:text-white text-xl font-bold text-[#05386B]'>Maximum</p>
                            <h3 className='group-hover:text-white text-2xl font-bold text-[#05386B]'>5 Employees</h3>
                            <h2 className='group-hover:text-white text-5xl lg:text-6xl mt-2 font-bold text-[#05386B]'>$5</h2>
                        </div>

                        <div className='group hover:bg-gradient-to-tr hover:from-[#05386B] hover:to-[#2d77c0] border-2 border-[#05386B] rounded-md flex flex-col justify-center items-center h-[350px] gap-2 shadow-2xl cursor-pointer'>
                            <p className='group-hover:text-white text-xl font-bold text-[#05386B]'>Maximum</p>
                            <h3 className='group-hover:text-white text-2xl font-bold text-[#05386B]'>20 Employees</h3>
                            <h2 className='group-hover:text-white text-5xl lg:text-6xl mt-2 font-bold text-[#05386B]'>$15</h2>
                        </div>

                        <div className='group hover:bg-gradient-to-tr hover:from-[#05386B] hover:to-[#2d77c0] border-2 border-[#05386B] rounded-md flex flex-col justify-center items-center h-[300px] gap-2 shadow-2xl cursor-pointer'>
                            <p className='group-hover:text-white text-xl font-bold text-[#05386B]'>Maximum</p>
                            <h3 className='group-hover:text-white text-2xl font-bold text-[#05386B]'>10 Employees</h3>
                            <h2 className='group-hover:text-white text-5xl lg:text-6xl mt-2 font-bold text-[#05386B]'>$8</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;