import React from 'react';
import useCurrentUserData from '../../Hooks/useCurrentUserData';
import useAuth from '../../Hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

const EmployeeRoute = ({ children }) => {
    let [userData, isUserLoading] = useCurrentUserData();
    let { loggedInUser, loading } = useAuth();

    if (loading || isUserLoading) {
        return <div className='flex justify-center min-h-screen items-center'>
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
    }
    if (userData?.role === "employee" && loggedInUser) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

export default EmployeeRoute;