import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAxiosInstance from '../Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';



const AdminPayment = () => {
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;
    let axiosInstance = useAxiosInstance();

    const stripePromise = loadStripe(`${import.meta.env.STRIPE_PAYMENT_KEY}`);

    const { data: paymentData, refetch } = useQuery({
        queryKey: ['paymentData', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/paymentData/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail
    })
    return (
        <div className='w-[85%] mx-auto p-8 my-12 bg-[#5CDB95] h-fit shadow-2xl'>
            <h2 className='text-[#05386B] text-4xl font-bold'>Total Payable Amount: ${paymentData?.payableAmount}</h2>
            <h2 className='text-[#05386B] text-3xl mt-3 font-bold capitalize'>Payment Status: {paymentData?.paymentStatus}</h2>
            <h2 className='text-[#05386B] text-4xl mt-6 font-bold'>Please Proceed to Pay ${paymentData?.payableAmount} to Confirm Your Registration as an Admin/HR</h2>

            <div className='mt-8'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            </div>
        </div>
    );
};

export default AdminPayment;