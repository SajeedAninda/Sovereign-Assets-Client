import React from 'react';
import GuestBanner from '../Guest Banner/GuestBanner';
import GuestAbout from '../Guest About/GuestAbout';
import Packages from '../Packages/Packages';
import useAuth from '../../../Hooks/useAuth';
import useCurrentUserData from '../../../Hooks/useCurrentUserData';


const GuestHomepage = () => {
    let { loggedInUser, logOut } = useAuth();
    let [userData, isUserLoading] = useCurrentUserData();
    
    return (
        <div>
            <GuestBanner></GuestBanner>
            <GuestAbout></GuestAbout>
            <Packages></Packages>
        </div>
    );
};

export default GuestHomepage;