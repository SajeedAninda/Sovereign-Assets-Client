import React from 'react';
import GuestBanner from '../Guest Banner/GuestBanner';
import GuestAbout from '../Guest About/GuestAbout';
import Packages from '../Packages/Packages';
import useAuth from '../../../Hooks/useAuth';
import useCurrentUserData from '../../../Hooks/useCurrentUserData';
import EmployeeBanner from '../../Employee/EmployeeBanner';
import AdminBanner from '../../Admin/AdminBanner';


const Homepage = () => {
    let { loggedInUser, logOut } = useAuth();
    let [userData, isUserLoading] = useCurrentUserData();

    return (
        <div>
            {
                !loggedInUser &&
                <div>
                    <GuestBanner></GuestBanner>
                    <GuestAbout></GuestAbout>
                    <Packages></Packages>
                </div>
            }
            {
                (loggedInUser && userData?.role === "employee") &&
                <div>
                    <EmployeeBanner></EmployeeBanner>
                </div>
            }
            {
                (loggedInUser && userData?.role === "admin") &&
                <div>
                    <AdminBanner></AdminBanner>
                </div>
            }
        </div>
    );
};

export default Homepage;