import React from 'react';

const Team = () => {
    return (
        <div className='w-[85%] bg-gradient-to-bl from-[#5ebe88] to-[#3bf78f] mx-auto px-12 my-12 h-fit rounded-md shadow-xl py-12'>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#05386B] uppercase rounded-full bg-teal-accent-400">
                        Dream Team
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#05386B] sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Meet</span>
                    </span>{' '}
                    our talented team of professionals
                </h2>
                <p className="text-base text-[#05386B] md:text-lg">
                    See the team that makes us what we are and has all asset related solutions
                </p>
            </div>
            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold text-[#05386B]">Oliver Aguilerra</p>
                        <p className="text-sm text-[#05386B]">Investment Analyst</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold text-[#05386B]">Marta Clermont</p>
                        <p className="text-sm text-[#05386B]">Client Relationship Manager</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold text-[#05386B]">Anthony Geek</p>
                        <p className="text-sm text-[#05386B]">Operations Manager</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold text-[#05386B]">Alice Melbourne</p>
                        <p className="text-sm text-[#05386B]">Human Resources</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold text-[#05386B]">Martin Garix</p>
                        <p className="text-sm text-[#05386B]">Quantitative Analyst</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold text-[#05386B]">Andrew Larkin</p>
                        <p className="text-sm text-[#05386B]">Backend Developer</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold text-[#05386B]">Sophie Denmo</p>
                        <p className="text-sm text-[#05386B]">Designer UI/UX</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold text-[#05386B]">Benedict Caro</p>
                        <p className="text-sm text-[#05386B]">Frontend Developer</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/3783255/pexels-photo-3783255.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold text-[#05386B]">Adam Molly</p>
                        <p className="text-sm text-[#05386B]">Full Stack Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;