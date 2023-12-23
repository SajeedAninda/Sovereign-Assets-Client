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
import PendingAdminHomepage from '../../Admin/Pending Requests Admin Homepage/PendingAdminHomepage';
import MostReqItemAdmin from '../../Admin/MostReqItemAdmin';
import MostReqItemEmployee from '../../Employee/MostReqItemEmployee';
import LimitedStockItems from '../../Admin/Limited Stock Items/LimitedStockItems';
import PieChartSection from '../../Admin/PieChartSection';
import HomepageEmployeeInfo from '../../Admin/HomepageEmployeeInfo';
import AssetAllocation from '../../Admin/AssetAllocation';
import EmployeeBanner from '../../Employee/EmployeeBanner';
import { Navigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import Features from '../Features/Features';
import Offer from '../What we offer/Offer';
import Clients from '../Clients Says/Clients';
import Newsletter from '../Newsletter/Newsletter';
import FAQ from '../FAQ Section/FAQ';

const Homepage = () => {
    let { loggedInUser, logOut } = useAuth();
    let [userData, isUserLoading] = useCurrentUserData();

    return (
        <div>
            {isUserLoading ? (
                <div className='flex justify-center min-h-screen items-center'>
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                </div>
            ) : (
                <>
                    {userData?.role === "unpaid_admin" ? (
                        <Navigate to={"/payment"} />
                    ) : (
                        <div>
                            {!userData && (
                                <div>
                                    <GuestBanner />
                                    <GuestAbout />
                                    <Offer></Offer>
                                    <Packages />
                                    <Features></Features>
                                    <Clients></Clients>
                                    <Newsletter></Newsletter>
                                    <FAQ></FAQ>
                                </div>
                            )}
                            {loggedInUser && userData?.role === "employee" && (
                                <div>
                                    {userData?.companyName === "null" ? (
                                        <div>
                                            <NoTeam />
                                        </div>
                                    ) : (
                                        <div>
                                            <EmployeeBanner />
                                            <EmployeeCustomRequests />
                                            <PendingRequests />
                                            <MonthlyRequests />
                                            <MostReqItemEmployee />
                                        </div>
                                    )}
                                </div>
                            )}
                            {loggedInUser && userData?.role === "admin" && (
                                <div>
                                    {isUserLoading ? (
                                        <h1 className='text-center text-6xl h-screen flex justify-center items-center'>Loading...</h1>
                                    ) : (
                                        <div>
                                            <AdminBanner />
                                            <PendingAdminHomepage />
                                            <MostReqItemAdmin />
                                            <LimitedStockItems />
                                            <PieChartSection />
                                            <HomepageEmployeeInfo />
                                            <AssetAllocation />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Homepage;
