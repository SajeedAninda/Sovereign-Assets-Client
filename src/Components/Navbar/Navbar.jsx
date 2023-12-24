import React, { useState } from 'react';
import siteLogo from "../../assets/Logo/website_logo.png"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useCurrentUserData from '../Hooks/useCurrentUserData';
import useAuth from '../Hooks/useAuth';
import useAxiosInstance from '../Hooks/useAxiosInstance';

const Navbar = () => {
    let { loggedInUser, logOut } = useAuth();
    let [userData, isUserLoading] = useCurrentUserData();
    let navigate = useNavigate();
    let axiosInstance = useAxiosInstance();

    let handleLogout = () => {
        logOut()
            .then(() => {
                axiosInstance.post("/logout", loggedInUser?.email)
                    .then((res) => console.log(res.data))
                    .catch((error) => console.log(error));
                console.log("Logged Out Successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col bg-gradient-to-br from-[#5ebe88] to-[#3bf78f]">
                {/* Navbar */}
                <div className="w-[95%] mx-auto navbar  text-white">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>


                    {/* Logo  */}
                    <div className="flex-1 justify-center lg:justify-start ">
                        <Link to="/">
                            {/* CONDITIONAL LOGOS */}
                            {
                                !userData &&
                                <div className='logo flex justify-center items-center text-2xl md:text-3xl font-bold'>
                                    <img src={siteLogo} className='w-[80px] md:w-[95px]' alt="" />
                                    <h1>Sovereign Assets</h1>
                                </div>
                            }


                            {loggedInUser && userData?.role === "employee" && (
                                <div className='logo'>
                                    {userData?.companyLogo === "null" ? (
                                        <img src={siteLogo} className='w-[95px]' alt="" />
                                    )
                                        :
                                        (
                                            <img src={userData?.companyLogo} className='w-[95px]' alt="" />
                                        )}
                                </div>
                            )}

                            {(loggedInUser && userData?.role === "admin") && (
                                <div className='logo'>
                                    <img src={userData?.companyLogo} className='w-[95px]' alt="" />
                                </div>
                            )}
                        </Link>
                    </div>



                    {/* NAVBAR  */}
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal flex justify-between items-center gap-6">
                            {/* Navbar menu content here */}
                            {/* For Guests  */}
                            {
                                !userData &&
                                <div>
                                    <div className='flex gap-8 justify-between items-center'>
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
                                            to={"/contact"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            Contact Us
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
                            }


                            {/* FOR EMPLOYEE  */}
                            {
                                (loggedInUser && userData?.role === "employee") &&
                                <div>
                                    <div className='flex gap-8 w-full justify-between items-center'>
                                        <NavLink
                                            to={"/"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            Home
                                        </NavLink>

                                        {
                                            userData?.companyName !== "null" &&
                                            <NavLink
                                                to={"/myTeam"}
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                                }
                                            >
                                                My Team
                                            </NavLink>
                                        }

                                        {
                                            userData?.companyName !== "null" &&
                                            <NavLink
                                                to={"/myAssets"}
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                                }
                                            >
                                                My Assets
                                            </NavLink>}

                                        {
                                            userData?.companyName !== "null" &&
                                            <NavLink
                                                to={"/requestAsset"}
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                                }
                                            >
                                                Request Asset
                                            </NavLink>}

                                        {
                                            userData?.companyName !== "null" &&
                                            <NavLink
                                                to={"/requestCustomAsset"}
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                                }
                                            >
                                                Custom Asset Request
                                            </NavLink>}

                                        <NavLink
                                            to={"/profile"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            Profile
                                        </NavLink>

                                        <div className='flex flex-col justify-center items-center gap-2'>
                                            <div className='flex gap-2'>
                                                <img className='w-[40px] rounded-full' src={loggedInUser?.photoURL} alt="" />
                                                <button onClick={handleLogout} className='px-3 py-2 w-full bg-[#05386B] text-white font-bold border-2 border-[#05386B] hover:bg-transparent hover:text-[#05386B] rounded-md'>
                                                    Log Out
                                                </button>


                                            </div>
                                            <div>
                                                <h1 className='text-[#05386B] text-sm text-center font-bold'>{loggedInUser?.displayName}</h1>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            }

                            {/* FOR ADMIN  */}
                            {
                                (loggedInUser && userData?.role === "admin") &&
                                <div>
                                    <div className='flex gap-6 justify-between items-center'>
                                        <NavLink
                                            to={"/"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            Home
                                        </NavLink>

                                        <NavLink
                                            to={"/employeeList"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            My Employee List
                                        </NavLink>

                                        <NavLink
                                            to={"/addEmployee"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            Add an Employee
                                        </NavLink>

                                        <NavLink
                                            to={"/assetList"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            Asset List
                                        </NavLink>

                                        <NavLink
                                            to={"/addAsset"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            Add an Asset
                                        </NavLink>

                                        <NavLink
                                            to={"/allRequests"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            All Requests
                                        </NavLink>

                                        <NavLink
                                            to={"/customRequests"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            Custom Requests
                                        </NavLink>

                                        <NavLink
                                            to={"/profile"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            Profile
                                        </NavLink>

                                        <div className='flex justify-center items-center gap-2'>
                                            <div>
                                                <img className='w-[40px] rounded-full' src={userData?.companyLogo} alt="" />
                                            </div>
                                            <div>
                                                <button onClick={handleLogout} className='px-3 py-2 bg-[#05386B] text-white font-bold border-2 border-[#05386B] hover:bg-transparent hover:text-[#05386B] rounded-md'>
                                                    Log Out
                                                </button>
                                                <h1 className='text-[#05386B] text-sm text-center font-bold'>{userData?.companyName}</h1>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>






            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu menu-horizontal bg-gradient-to-br from-[#5ebe88] to-[#3bf78f] text-white flex flex-col justify-between items-center gap-6 h-full px-8 pt-6">
                    {/* Navbar menu content here */}
                    {/* For Guests  */}
                    {
                        !userData &&
                        <div className=''>
                            <div className='flex flex-col gap-8 justify-between items-center'>
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
                                    to={"/contact"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                    }
                                >
                                    Contact Us
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
                    }


                    {/* FOR EMPLOYEE  */}
                    {
                        (loggedInUser && userData?.role === "employee") &&
                        <div>
                            <div className='flex flex-col gap-8 w-full justify-between items-center'>
                                <NavLink
                                    to={"/"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                    }
                                >
                                    Home
                                </NavLink>

                                {
                                    userData?.companyName !== "null" &&
                                    <NavLink
                                        to={"/myTeam"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        My Team
                                    </NavLink>
                                }

                                {
                                    userData?.companyName !== "null" &&
                                    <NavLink
                                        to={"/myAssets"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        My Assets
                                    </NavLink>}

                                {
                                    userData?.companyName !== "null" &&
                                    <NavLink
                                        to={"/requestAsset"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        Request Asset
                                    </NavLink>}

                                {
                                    userData?.companyName !== "null" &&
                                    <NavLink
                                        to={"/requestCustomAsset"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        Custom Asset Request
                                    </NavLink>}

                                <NavLink
                                    to={"/profile"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                                    }
                                >
                                    Profile
                                </NavLink>

                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <div className='flex gap-2'>
                                        <img className='w-[40px] rounded-full' src={loggedInUser?.photoURL} alt="" />
                                        <button onClick={handleLogout} className='px-3 py-2 w-full bg-[#05386B] text-white font-bold border-2 border-[#05386B] hover:bg-transparent hover:text-[#05386B] rounded-md'>
                                            Log Out
                                        </button>


                                    </div>
                                    <div>
                                        <h1 className='text-[#05386B] text-sm text-center font-bold'>{loggedInUser?.displayName}</h1>
                                    </div>

                                </div>

                            </div>
                        </div>
                    }

                    {/* FOR ADMIN  */}
                    {
                        (loggedInUser && userData?.role === "admin") &&
                        <div>
                            <div className='flex flex-col gap-6 justify-between items-center'>
                                <NavLink
                                    to={"/"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                    }
                                >
                                    Home
                                </NavLink>

                                <NavLink
                                    to={"/employeeList"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                    }
                                >
                                    My Employee List
                                </NavLink>

                                <NavLink
                                    to={"/addEmployee"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                    }
                                >
                                    Add an Employee
                                </NavLink>

                                <NavLink
                                    to={"/assetList"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                    }
                                >
                                    Asset List
                                </NavLink>

                                <NavLink
                                    to={"/addAsset"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                    }
                                >
                                    Add an Asset
                                </NavLink>

                                <NavLink
                                    to={"/allRequests"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                    }
                                >
                                    All Requests
                                </NavLink>

                                <NavLink
                                    to={"/customRequests"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                    }
                                >
                                    Custom Requests
                                </NavLink>

                                <NavLink
                                    to={"/profile"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-lg font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-lg font-bold text-[#05386B] hover:text-[#379683]"
                                    }
                                >
                                    Profile
                                </NavLink>

                                <div className='flex justify-center items-center gap-2'>
                                    <div>
                                        <img className='w-[40px] rounded-full' src={userData?.companyLogo} alt="" />
                                    </div>
                                    <div>
                                        <button onClick={handleLogout} className='px-3 py-2 bg-[#05386B] text-white font-bold border-2 border-[#05386B] hover:bg-transparent hover:text-[#05386B] rounded-md'>
                                            Log Out
                                        </button>
                                        <h1 className='text-[#05386B] text-sm text-center font-bold'>{userData?.companyName}</h1>
                                    </div>

                                </div>

                            </div>
                        </div>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;