import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import logo from "../../../../assets/Logo/website_logo.png"

const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gradient-to-tr from-[#05386B] to-[#2d77c0] rounded-tr-xl rounded-tl-xl shadow">
            <div className="w-[90%] max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex justify-center md:justify-start items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img className='w-[90px]' src={logo} alt="" />
                        <span className="text-white self-center text-2xl font-semibold whitespace-nowrap ">Sovereign Assets Solutions</span>
                    </a>
                    <ul className="flex gap-3 justify-center md:justify-start flex-wrap items-center mb-6 text-base font-medium text-[white] sm:mb-0 ">
                        <li>
                            <a href="https://www.linkedin.com/in/sajeed-aninda/" target='_blank'>
                                <FaLinkedin className='text-3xl font-bold hover:opacity-50 cursor-pointer' />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/SajeedAninda" target='_blank'>
                                <FaGithub className='text-3xl font-bold hover:opacity-50 cursor-pointer' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/sajeedaninda/" target='_blank'>
                                <FaFacebook className='text-3xl font-bold hover:opacity-50 cursor-pointer' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/_a.n.i.n.d.a_" target='_blank'>
                                <FaInstagram className='text-3xl font-bold hover:opacity-50 cursor-pointer' />
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="flex flex-col md:flex-row gap-1 justify-center items-center text-base text-[white] sm:text-center ">&#169;{currentYear} <a href="#" className="hover:underline"> Sovereign Assets Solutions™ -</a> All Rights Reserved by Sajeed.</span>
            </div>
        </footer>
    );
};

export default Footer;