import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import logo from "../../../assets/Logo/website_logo.png"
import { FiPhoneCall } from 'react-icons/fi';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdMarkEmailRead } from 'react-icons/md';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    let handleContact = (e) => {
        e.preventDefault();
        let emailInput = e.target.email;
        let email = emailInput.value;
        if (email.length === 0 || !email.includes('@') || !email.includes('.')) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid email',
                text: 'Please enter a valid email address',
            });
            e.target.email.value = "";
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Good job!',
                text: 'Thank you for sending us a message',
            });
        }
    }

    return (
        <div className='w-[85%] bg-gradient-to-bl from-[#5ebe88] to-[#3bf78f] mx-auto px-12 my-12 h-fit rounded-md shadow-xl'>
            <div className='w-full lg:w-[95%] mx-auto pb-8'>
                <h1 className='text-4xl lg:text-5xl pt-8 text-white font-bold text-center'>Contact Us</h1>
                <h3 className='text-xl pt-2 text-white font-bold text-center'>
                    For Any Further Informations, Please Contact with us
                </h3>

                <div className='flex lg:gap-10 flex-col lg:flex-row'>
                    <div className='flex-1'>
                        <div className='w-full lg:flex-1 flex justify-center items-end'>
                            <div role="listitem" className="relative pt-28 w-full lg:w-[85%]">
                                <div className="rounded-2xl overflow-hidden shadow-2xl infoBg">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src={logo} alt="Logo" role="img" className="rounded-full object-cover h-full w-full shadow-lg" />
                                        </div>
                                    </div>
                                    <div className="px-6 py-16">
                                        <h1 className="font-bold text-3xl text-center mb-1 text-[#05386B]">Sovereign Assets</h1>
                                        <p className="text-[#05386B] font-semibold text-md text-center">Optimum Asset Solutions</p>
                                        <div className="flex flex-col xl:flex-row justify-evenly">
                                            <div className="text-center text-[#05386B] text-lg pt-2 font-normal flex items-center justify-center gap-2">
                                                <span><BiSolidPhoneCall></BiSolidPhoneCall></span>
                                                <span><a href="tel:+8801763666677">+8801850-504439</a></span>
                                            </div>

                                            <div className="text-center text-[#05386B] text-lg pt-2 font-normal flex items-center justify-center gap-2">
                                                <span><FiPhoneCall></FiPhoneCall></span>
                                                <span><a href="tel:+8801711517080">+8801575-782959</a></span>
                                            </div>
                                        </div>
                                        <div className="text-center text-[#05386B] text-lg pt-2 font-normal flex items-center justify-center gap-2">
                                            <span><MdMarkEmailRead></MdMarkEmailRead></span>
                                            <span><a href="mailto: sajaninda@gmail.com">sovereign@gmail.com</a></span>
                                        </div>

                                        <div className="text-center font-semibold text-[#05386B] text-lg pt-2 flex items-center justify-center gap-2">
                                            <span>Dhaka, Bangladesh</span>
                                        </div>
                                        <div className='socialLinks flex gap-3 items-center justify-center mt-4'>
                                            <a href="https://www.linkedin.com/in/sajeed-aninda/" target='_blank'>
                                                <FaLinkedin className='text-3xl text-[#05386B] hover:text-[#05386bce]' />
                                            </a>
                                            <a href="https://github.com/SajeedAninda" target='_blank'>
                                                <FaGithub className='text-3xl text-[#05386B] hover:text-[#05386bce]' />
                                            </a>
                                            <a href="https://www.facebook.com/sajeedaninda/" target='_blank'>
                                                <FaFacebook className='text-3xl text-[#05386B] hover:text-[#05386bce]' />
                                            </a>
                                            <a href="https://www.instagram.com/_a.n.i.n.d.a_" target='_blank'>
                                                <FaInstagram className='text-3xl text-[#05386B] hover:text-[#05386bce]' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="h-fit my-8 p-8 rounded-md border-2 border-[#05386B] flex-1">
                        <form onSubmit={handleContact}>
                            <div className='flex flex-col md:flex-row w-full gap-6'>
                                <div className='w-full'>
                                    <label className='text-2xl text-[#05386B] font-bold' htmlFor="name">Name</label> <br />
                                    <input className='py-3 px-3 mt-2 w-full border-2 border-[#05386B] rounded-md' name='name' type="text" placeholder='Please Enter Your Name' required/>
                                </div>
                                <div className='w-full'>
                                    <label className='text-2xl text-[#05386B] font-bold' htmlFor="email">Email</label> <br />
                                    <input className='py-3 px-3 mt-2 w-full border-2 border-[#05386B] rounded-md' name='email' type="email" placeholder='Please Enter Your Email' required/>
                                </div>
                            </div>
                            <div className='w-full mt-4'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="subject">Subject</label> <br />
                                <input className='py-3 px-3 mt-2 w-full border-2 border-[#05386B] rounded-md' name='subject' type="text" placeholder='Please Enter Your Subject' required/>
                            </div>

                            <div className='w-full mt-4'>
                                <label className='text-2xl text-[#05386B] font-bold' htmlFor="message">Message</label> <br />
                                <textarea rows="5" className='py-3 px-3 mt-2 w-full border-2 border-[#05386B] rounded-md' name='message' type="text" placeholder='Please Enter The Message That Your Want To Send' required/>
                            </div>

                            <button className='py-3 w-full bg-[#05386B] border-2 border-[#05386B] text-white font-bold text-lg mt-4 rounded-md hover:bg-transparent hover:text-[#05386B] hover:border-2 hover:border-[#05386B]' type='submit'>Send Your Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
