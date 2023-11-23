import React from 'react';
import GuestBanner from '../Guest Banner/GuestBanner';
import GuestAbout from '../Guest About/GuestAbout';
import Packages from '../Packages/Packages';

const GuestHomepage = () => {
    return (
        <div>
            <GuestBanner></GuestBanner>
            <GuestAbout></GuestAbout>
            <Packages></Packages>
        </div>
    );
};

export default GuestHomepage;