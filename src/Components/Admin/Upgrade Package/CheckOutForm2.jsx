import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAxiosInstance from '../../Hooks/useAxiosInstance';
import useAuth from '../../Hooks/useAuth';

const CheckOutForm2 = ({ adminPackage, increasbleEmployees }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;
    let navigate = useNavigate();
    let axiosInstance = useAxiosInstance();


    let totalPayable = adminPackage;


    useEffect(() => {
        if (totalPayable > 0) {
            axiosInstance
                .post("/create-payment-intent", { price: totalPayable })
                .then((res) => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch((error) => {
                    console.error("Error creating payment intent:", error);
                });
        }

    }, [axiosInstance, totalPayable]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.error('[error]', error);
            setError(error.message || "An error occurred");
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError("");
        }

        try {
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: loggedInUser?.email || "Anonymous"
                    },
                },
            });
            if (confirmError) {
                console.log(confirmError);
            } else {
                console.log(paymentIntent)
                if (paymentIntent.status === "succeeded") {
                    setTransactionId(paymentIntent.id);

                    const updateAdminInfo = {
                        increasbleEmployees: increasbleEmployees,
                    };

                    axiosInstance.patch(`/upgradePackage/${currentUserEmail}`, updateAdminInfo)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.modifiedCount > 0) {
                                navigate('/addEmployee');
                                toast.success("Payment successful! You have Upgraded Package");
                            }
                        });
                }
            }
        } catch (error) {
            console.error("Error during payment confirmation:", error);

        }
        console.log(transactionId)

    };

    return (
        <form className='border-2 border-[#05386B] p-8' onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '24px',
                            color: '#05386B ',
                            '::placeholder': {
                                color: '#05386B ',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="flex justify-center items-center mt-4">
                <button
                    className="bg-[#05386B] text-white rounded-md hover:bg-transparent border-2 border-[#05386B] hover:text-[#05386B] font-bold px-12 py-3"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    {"Pay"}
                </button>
            </div>
            <div className="mt-4 flex justify-center items-center">
                <h2 className="text-xl text-red-600 font-bold">
                    {error}
                </h2>
                {
                    transactionId &&
                    <h2 className="text-md text-green-500 font-bold">
                        Payment Succeeded. TRxID: {transactionId}
                    </h2>
                }
            </div>
        </form>
    );
};

export default CheckOutForm2;