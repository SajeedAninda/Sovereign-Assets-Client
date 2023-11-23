import React from 'react';
import siteLogo from "../../assets/Logo/website_logo.png"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#5CDB95] h-fit'>
            <div className='w-[95%] mx-auto flex justify-between items-center'>
                <div className='logo'>
                    <img src={siteLogo} className='w-[95px]' alt="" />
                </div>
                <div className='flex gap-6 justify-between items-center'>
                    <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to={"/joinAsEmployee"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                        }
                    >
                        Join As Employee
                    </NavLink>

                    <NavLink
                        to={"/joinAsAdmin"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                        }
                    >
                        Join As HR/Admin
                    </NavLink>

                    <NavLink
                        to={"/login"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                        }
                    >
                        Login
                    </NavLink>


                </div>
            </div>
        </div>
    );
};

export default Navbar;