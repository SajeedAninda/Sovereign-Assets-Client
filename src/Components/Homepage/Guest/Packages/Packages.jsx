import React from 'react';

const Packages = () => {
    return (
        <div className='bg-[#5CDB95] h-[100vh]'>
            <div className='w-[95%] mx-auto '>
                <div className='py-12'>
                    <h1 className='text-center text-5xl font-bold text-[#05386B]'>
                        Packages
                    </h1>
                </div>

                <div className='flex justify-center items-center gap-10'>
                    <div className='w-[40%] flex flex-col justify-center items-center'>
                        <h2 className='text-left text-4xl font-bold text-[#05386B]'>Find the plan that's right for You</h2>
                        <p className='text-center text-2xl mt-3 w-[80%] mx-auto font-bold text-[#05386B]'>Explore Our Packages and see what suits you the best</p>
                    </div>

                    <div className='cards grid grid-cols-3 gap-6 w-[60%] items-center'>
                        <div className='group hover:bg-[#05386B] border-2 border-[#05386B] rounded-md flex flex-col justify-center items-center h-[300px] gap-2 shadow-2xl'>
                            <p className=' group-hover:text-white text-xl font-bold text-[#05386B]'>Maximum</p>
                            <h3 className='group-hover:text-white text-2xl font-bold text-[#05386B]'>5 Employees</h3>
                            <h2 className='group-hover:text-white text-6xl mt-2 font-bold text-[#05386B]'>$5</h2>
                        </div>

                        <div className='group hover:bg-[#05386B] border-2 border-[#05386B] rounded-md flex flex-col justify-center items-center h-[350px] gap-2 shadow-2xl'>
                            <p className='group-hover:text-white text-xl font-bold text-[#05386B]'>Maximum</p>
                            <h3 className='group-hover:text-white text-2xl font-bold text-[#05386B]'>20 Employees</h3>
                            <h2 className='group-hover:text-white text-6xl mt-2 font-bold text-[#05386B]'>$15</h2>
                        </div>

                        <div className='group hover:bg-[#05386B] border-2 border-[#05386B] rounded-md flex flex-col justify-center items-center h-[300px] gap-2 shadow-2xl'>
                            <p className='group-hover:text-white text-xl font-bold text-[#05386B]'>Maximum</p>
                            <h3 className='group-hover:text-white text-2xl font-bold text-[#05386B]'>10 Employees</h3>
                            <h2 className='group-hover:text-white text-6xl mt-2 font-bold text-[#05386B]'>$8</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;