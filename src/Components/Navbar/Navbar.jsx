import React from 'react';
import siteLogo from "../../assets/Logo/website_logo.png"
import { NavLink } from 'react-router-dom';
import useCurrentUserData from '../Hooks/useCurrentUserData';
import useAuth from '../Hooks/useAuth';

const Navbar = () => {
    let { loggedInUser, logOut } = useAuth();
    let [userData, isUserLoading] = useCurrentUserData();

    let handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Logged Out Successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <div className='bg-[#5CDB95] h-fit'>
            <div className='w-[95%] mx-auto flex justify-between items-center'>
                <div className='logo'>
                    <img src={siteLogo} className='w-[95px]' alt="" />
                </div>
                {
                    !loggedInUser &&
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
                }
                {
                    (loggedInUser && userData?.role === "employee") &&
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
                            to={"/myTeam"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                            }
                        >
                            My Team
                        </NavLink>

                        <NavLink
                            to={"/myAssets"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                            }
                        >
                            My Assets
                        </NavLink>

                        <NavLink
                            to={"/requestAsset"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                            }
                        >
                            Request Asset
                        </NavLink>

                        <NavLink
                            to={"/requestCustomAsset"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                            }
                        >
                            Custom Asset Request
                        </NavLink>
                        <button onClick={handleLogout} className='px-3 py-2 bg-[#05386B] text-white font-bold border-2 border-[#05386B] hover:bg-transparent hover:text-[#05386B] rounded-md'>
                            Log Out
                        </button>

                    </div>
                }
                {
                    (loggedInUser && userData?.role === "admin") &&
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
                            to={"/employeeList"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                            }
                        >
                            My Employee List
                        </NavLink>

                        <NavLink
                            to={"/addEmployee"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                            }
                        >
                            Add an Employee
                        </NavLink>

                        <NavLink
                            to={"/assetList"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                            }
                        >
                            Asset List
                        </NavLink>

                        <NavLink
                            to={"/addAsset"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                            }
                        >
                            Add an Asset
                        </NavLink>

                        <NavLink
                            to={"/allRequests"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                            }
                        >
                            All Requests
                        </NavLink>

                        <NavLink
                            to={"/customRequests"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-xl font-bold text-[#05386B] hover:text-[#379683] border-b-2 border-[#05386B]" : "text-xl font-bold text-[#05386B] hover:text-[#379683]"
                            }
                        >
                            Custom Requests
                        </NavLink>

                        <button onClick={handleLogout} className='px-3 py-2 bg-[#05386B] text-white font-bold border-2 border-[#05386B] hover:bg-transparent hover:text-[#05386B] rounded-md'>
                            Log Out
                        </button>

                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;