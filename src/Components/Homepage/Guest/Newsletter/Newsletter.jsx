import React from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
    let handleNewsletter = (e) => {
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
                text: 'Thank you for subscribing to our newsletter',
            });
        }
    }

    return (
        <div className="bg-gradient-to-bl from-[#5ebe88] to-[#3bf78f]  text-[#05386B] p-6">
            <div className="grid lg:grid-cols-2 items-center gap-16 w-[90%] mx-auto min-h-[350px]">
                <form onSubmit={handleNewsletter} data-aos="fade-up">
                    <h3 className="text-4xl font-extrabold">Subscribe to Our Newsletter</h3>
                    <p className="text-base mt-4 text-[#05386B]">Subscribe to our newsletter and stay up to date with the latest news,
                        updates, and exclusive offers. Get valuable insights. Join our community today!</p>
                    <div className="bg-transparent border-2 border-[#05386B] flex px-2 py-1 rounded-full mt-8 ">
                        <input type='email' name="email" placeholder='Enter your email' className="w-full outline-none bg-transparent text-base px-4 py-3 placeholder:text-[#05386B] rounded-full" />
                        <button type='submit'
                            className="bg-[#05386B] hover:bg-[#05386bd0] transition-all text-white font-semibold text-base rounded-full px-8 py-3">Submit</button>
                    </div>
                </form>
                <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#05386B] w-12 mb-4 inline-block border-2 border-[#05386B] p-3 rounded-md" viewBox="0 0 32 32">
                            <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
                            <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-4">Customization</h3>
                        <p className="text-[#05386B] text-base">Customize your mails however you want. You can unsubscribe at any given moment.</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 mb-4 inline-block border-2 border-[#05386B] p-3 rounded-md" viewBox="0 0 682.667 682.667">
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                                </clipPath>
                            </defs>
                            <g fill="none" className="stroke-[#05386B]" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
                                <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                            </g>
                        </svg>
                        <h3 className="text-xl font-semibold mb-4">Security</h3>
                        <p className="text-[#05386B] text-base">We care about your security. We wont share your mail with anyone nor send you malicious mails</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;