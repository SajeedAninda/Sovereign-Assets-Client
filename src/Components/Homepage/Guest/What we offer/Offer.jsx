import React from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
    return (
        <div class="px-4 py-16 mx-auto w-[90%]">

    <div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2
            class="max-w-lg mb-6 text-4xl lg:text-5xl font-bold leading-none tracking-tight text-[#05386B] sm:text-4xl md:mx-auto">
            <span class="relative inline-block">

                <svg viewBox="0 0 52 24" fill="currentColor"
                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-[#05386B] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                    <defs>
                        <pattern id="fdca20a0-aeb4-4caf-ba1b-4351eee42363" x="0" y="0" width=".135"
                            height=".30">
                            <circle cx="1" cy="1" r=".7"></circle>
                        </pattern>
                    </defs>
                    <rect fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)" width="52" height="24"></rect>
                </svg>
            </span>
            What We Offer
        </h2>
        <p class="text-base text-[#05386B] md:text-lg">Explore Our Comprehensive Services
        </p>
    </div>


    <div class="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
        <div class="flex flex-col sm:flex-row">
            <div class="sm:mr-4">
                <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                    <svg class="w-12 h-12 text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </div>
            <div data-aos="fade-up">
                <h6 class="mb-2 font-semibold leading-5 text-[#05386B]">For Guests:</h6>
                <p class="mb-3 text-sm text-[#05386B]">
                    Our team always takes great care of the peoples that are interested in our services and try to provide constant support.
                </p>
                <ul class="mb-4 -ml-1 space-y-2 text-[#05386B]">
                    <li class="flex items-start text-[#05386B]">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        To Register as an Employee and join a team under an administrator.
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        To Create a team and register as an Administrator
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Browse Packages and See all the exciting features and services that we provide
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Subscribing to our Newsletter and 24/7 contact and support from our team
                    </li>
                </ul>
                <Link to="/login" aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-[#05386B] hover:text-[#05386bd3]">Learn
                    more
                </Link>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row">
            <div class="sm:mr-4">
                <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                    <svg class="w-12 h-12 text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </div>
            <div data-aos="fade-up">
                <h6 class="mb-2 font-semibold leading-5 text-[#05386B]" >For Admins:</h6>
                <p class="mb-3 text-sm text-[#05386B]">
                    Subscribed Admins and Hr's are our most valuable assets. We constantly try to improve our services and provide the best that we have to offer.
                </p>
                <ul class="mb-4 -ml-1 space-y-2 text-[#05386B]">
                    <li class="flex items-start text-[#05386B]">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Payment with Visa, Mastercard and most common Cards
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Adding members to team, improving the community
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Create, Update and Tracking of Assets in a smooth way
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Manage Employees in most efficient manner where each individual gets the best services
                    </li>
                </ul>
                <Link to="/login" aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-[#05386B] hover:text-[#05386bd3]">Learn
                    more
                </Link>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row">
            <div class="sm:mr-4">
                <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                    <svg class="w-12 h-12 text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </div>
            <div data-aos="fade-up">
                <h6 class="mb-2 font-semibold leading-5 text-[#05386B]">For Employees:</h6>
                <p class="mb-3 text-sm text-[#05386B]">
                    Without Employees, our system cannot function at all. They are the nucleus what makes us what we are and how we provide service.
                </p>
                <ul class="mb-4 -ml-1 space-y-2 text-[#05386B]">
                    <li class="flex items-start text-[#05386B]">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        See Team Members and Details
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Request and Cancel assets that the team admin has added
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Interact with the assets, cancel them anytime, print asset memo's and return assets.
                    </li>
                    <li class="flex items-start">
                        <span class="mr-1">
                            <svg class="w-5 h-5 mt-px text-[#05386B]" stroke="currentColor" viewBox="0 0 52 52">
                                <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                            </svg>
                        </span>
                        Make custom requests, and get to edit them anytime. Make requests for assets that are not in the menu.
                    </li>
                </ul>
                <Link to="/login" aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-[#05386B] hover:text-[#05386bd3]">Learn
                    more
                </Link>
            </div>
        </div>
    </div>

</div>
    );
};

export default Offer;