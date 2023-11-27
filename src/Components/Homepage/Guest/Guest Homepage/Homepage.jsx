import React from 'react';
import GuestBanner from '../Guest Banner/GuestBanner';
import GuestAbout from '../Guest About/GuestAbout';
import Packages from '../Packages/Packages';
import useAuth from '../../../Hooks/useAuth';
import useCurrentUserData from '../../../Hooks/useCurrentUserData';
import AdminBanner from '../../Admin/AdminBanner';
import EmployeeCustomRequests from '../../Employee/EmployeeCustomRequests';
import PendingRequests from '../../Employee/PendingRequests';
import MonthlyRequests from '../../Employee/MonthlyRequests';
import NoTeam from '../../Employee/NoTeam';


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
                    {
                        userData?.companyName === "null" ?
                            <div>
                                <NoTeam></NoTeam>
                            </div>
                            :
                            <div>
                                <EmployeeCustomRequests></EmployeeCustomRequests>
                                <PendingRequests></PendingRequests>
                                <MonthlyRequests></MonthlyRequests>
                            </div>
                    }


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