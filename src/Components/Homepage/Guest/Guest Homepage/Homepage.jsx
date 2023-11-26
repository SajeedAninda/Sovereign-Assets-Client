import React from 'react';
import GuestBanner from '../Guest Banner/GuestBanner';
import GuestAbout from '../Guest About/GuestAbout';
import Packages from '../Packages/Packages';
import useAuth from '../../../Hooks/useAuth';
import useCurrentUserData from '../../../Hooks/useCurrentUserData';
import AdminBanner from '../../Admin/AdminBanner';
import EmployeeCustomRequests from '../../Employee/EmployeeCustomRequests';
import EmployeeBanner from '../../Employee/EmployeeBanner';


const Homepage = () => {
    let { loggedInUser, logOut } = useAuth();
    let [userData, isUserLoading] = useCurrentUserData();

    return (
        <div>
            {
                !userData &&
                <div>
                    <GuestBanner></GuestBanner>
                    <GuestAbout></GuestAbout>
                    <Packages></Packages>
                </div>
            }
            {
                (loggedInUser && userData?.role === "employee") &&
                <div>
                    <EmployeeCustomRequests></EmployeeCustomRequests>
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