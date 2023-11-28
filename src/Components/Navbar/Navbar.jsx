import React, { useState } from 'react';
import siteLogo from "../../assets/Logo/website_logo.png"
import { NavLink, useNavigate } from 'react-router-dom';
import useCurrentUserData from '../Hooks/useCurrentUserData';
import useAuth from '../Hooks/useAuth';
import useAxiosInstance from '../Hooks/useAxiosInstance';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    let { loggedInUser, logOut } = useAuth();
    let [userData, isUserLoading] = useCurrentUserData();
    let navigate = useNavigate();
    let axiosInstance = useAxiosInstance();
    let [isOpen, setIsOpen] = useState(false);

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

    let toggleNavbar = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className='bg-[#5CDB95] '>
            <div className='w-[95%] mx-auto h-fit py-5 flex justify-between items-center flex-wrap'>

                {/* CONDITIONAL LOGOS */}
                {
                    !userData &&
                    <div className='logo'>
                        <img src={siteLogo} className='w-[95px]' alt="" />
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




                {/* CONDITIONAL LINKS  */}
                {
                    !userData &&
                    <div>
                        <div className='hidden xl:flex gap-8 justify-between items-center'>
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
                        <div className='xl:hidden'>
                            <button onClick={toggleNavbar}>
                                {
                                    isOpen ?
                                        <CloseIcon />
                                        :
                                        <MenuIcon />
                                }
                            </button>
                        </div>
                        <div className="relative">
                            {
                                isOpen &&
                                <div className='flex flex-col items-center basis-full gap-4 justify-between absolute bg-[#5CDB95] px-10 py-4 shadow-2xl rounded-2xl right-6 border-2 border-[#05386B] z-20'>
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
                            }
                        </div>
                    </div>
                }

                {/* FOR EMPLOYEE  */}
                {
                    (loggedInUser && userData?.role === "employee") &&
                    <div>
                        <div className='hidden xl:flex gap-8 w-full justify-between items-center'>
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
                        <div className='xl:hidden'>
                            <button onClick={toggleNavbar}>
                                {
                                    isOpen ?
                                        <CloseIcon />
                                        :
                                        <MenuIcon />
                                }
                            </button>
                        </div>

                        <div className='relative'>
                            {
                                isOpen &&
                                <div className='flex flex-col items-center basis-full gap-4 justify-between absolute bg-[#5CDB95] px-10 py-4 shadow-2xl rounded-2xl right-6 border-2 border-[#05386B] z-20'>
                                    <NavLink
                                        to={"/"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-base font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        Home
                                    </NavLink>

                                    {
                                        userData?.companyName !== "null" &&
                                        <NavLink
                                            to={"/myTeam"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-base text-center font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base text-center font-bold text-[#05386B] hover:text-[#379683]"
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
                                                isPending ? "pending" : isActive ? "text-base text-center font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base text-center font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            My Assets
                                        </NavLink>}

                                    {
                                        userData?.companyName !== "null" &&
                                        <NavLink
                                            to={"/requestAsset"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-base text-center font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base text-center font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            Request Asset
                                        </NavLink>}

                                    {
                                        userData?.companyName !== "null" &&
                                        <NavLink
                                            to={"/requestCustomAsset"}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-base text-center font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base text-center font-bold text-[#05386B] hover:text-[#379683]"
                                            }
                                        >
                                            Custom Asset Request
                                        </NavLink>}

                                    <NavLink
                                        to={"/profile"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-base text-center font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base text-center font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        Profile
                                    </NavLink>

                                    <div className='flex flex-col justify-center items-center gap-2'>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img className='w-[40px] rounded-full' src={loggedInUser?.photoURL} alt="" />
                                            <h1 className='text-[#05386B] text-sm text-center font-bold'>{loggedInUser?.displayName}</h1>
                                        </div>
                                        <div>

                                            <button onClick={handleLogout} className='px-3 py-2 bg-[#05386B] text-white font-bold border-2 border-[#05386B] hover:bg-transparent hover:text-[#05386B] rounded-md'>
                                                Log Out
                                            </button>

                                        </div>
                                    </div>

                                </div>
                            }
                        </div>
                    </div>

                }



                {/* FOR ADMIN  */}
                {
                    (loggedInUser && userData?.role === "admin") &&
                    <div>
                        <div className='hidden xl:flex gap-6 justify-between items-center'>
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
                        <div className='xl:hidden'>
                            <button onClick={toggleNavbar}>
                                {
                                    isOpen ?
                                        <CloseIcon />
                                        :
                                        <MenuIcon />
                                }
                            </button>
                        </div>

                        <div className='relative'>
                            {
                                isOpen &&
                                <div className='flex flex-col items-center basis-full gap-4 justify-between absolute bg-[#5CDB95] px-10 py-4 shadow-2xl rounded-2xl right-6 border-2 border-[#05386B] z-20'>
                                    <NavLink
                                        to={"/"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        Home
                                    </NavLink>

                                    <NavLink
                                        to={"/employeeList"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        My Employee List
                                    </NavLink>

                                    <NavLink
                                        to={"/addEmployee"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        Add an Employee
                                    </NavLink>

                                    <NavLink
                                        to={"/assetList"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        Asset List
                                    </NavLink>

                                    <NavLink
                                        to={"/addAsset"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        Add an Asset
                                    </NavLink>

                                    <NavLink
                                        to={"/allRequests"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        All Requests
                                    </NavLink>

                                    <NavLink
                                        to={"/customRequests"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        Custom Requests
                                    </NavLink>

                                    <NavLink
                                        to={"/profile"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-base w-full px-4 font-bold text-[#05386B] hover:text-[#379683]"
                                        }
                                    >
                                        Profile
                                    </NavLink>

                                    <div className='flex-col justify-center items-center gap-2'>
                                        <div className='flex flex-col justify-center items-center'>
                                            <img className='w-[40px] rounded-full' src={userData?.companyLogo} alt="" />
                                            <h1 className='text-[#05386B] text-sm text-center font-bold'>{userData?.companyName}</h1>
                                        </div>
                                        <div>
                                            <button onClick={handleLogout} className='px-3 py-2 bg-[#05386B] text-white font-bold border-2 border-[#05386B] hover:bg-transparent hover:text-[#05386B] rounded-md'>
                                                Log Out
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;