import React from 'react';

const Features = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#05386B] uppercase rounded-full bg-teal-accent-400">
                        All new
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-[#05386B] sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="07690130-d013-42bc-83f4-90de7ac68f76"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Exciting</span>
                    </span>{' '}
                    Features
                </h2>
                <p className="text-base text-[#05386B] md:text-lg">
                    Take a glimse of some of the best features that we provide and make decisions for yourself
                </p>
            </div>
            <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
                <div className="space-y-6 sm:px-16">
                    <div className="flex flex-col max-w-md sm:flex-row">
                        <div className="mb-4 mr-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 text-[#05386B] sm:w-10 sm:h-10"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl font-bold leading-5 text-[#05386B]">
                                Buy Packages
                            </h6>
                            <p className="text-sm text-[#05386B]">
                                Buy new packages and add members accordingly
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                        <div className="mb-4 mr-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 text-[#05386B] sm:w-10 sm:h-10"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl font-bold leading-5 text-[#05386B]">
                                Add Assets
                            </h6>
                            <p className="text-sm text-[#05386B]">
                                Add assets as an admin to make assets available for employees
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                        <div className="mb-4 mr-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 text-[#05386B] sm:w-10 sm:h-10"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl font-bold leading-5 text-[#05386B]">
                                Approve Assets
                            </h6>
                            <p className="text-sm text-[#05386B]">
                                Approve Custom & Normal assets requests made by employees as an admin
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 sm:px-16">
                    <div className="flex flex-col max-w-md sm:flex-row">
                        <div className="mb-4 mr-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 text-[#05386B] sm:w-10 sm:h-10"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl font-bold leading-5 text-[#05386B]">
                                Request Assets
                            </h6>
                            <p className="text-sm text-[#05386B]">
                                Request for assets that your team admin has added
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                        <div className="mb-4 mr-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 text-[#05386B] sm:w-10 sm:h-10"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl font-bold leading-5 text-[#05386B]">
                                Custom Request
                            </h6>
                            <p className="text-sm text-[#05386B]">
                                Make custom requests if an asset that you need is unavailable
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                        <div className="mb-4 mr-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 text-[#05386B] sm:w-10 sm:h-10"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl font-bold leading-5 text-[#05386B]">
                                See Events
                            </h6>
                            <p className="text-sm text-[#05386B]">
                               See Events of you teams like upcoming birthdays.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;