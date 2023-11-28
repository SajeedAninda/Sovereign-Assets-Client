import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosInstance from '../Hooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    let { loggedInUser } = useAuth();
    let currentUserEmail = loggedInUser?.email;
    let navigate = useNavigate();
    let axiosInstance = useAxiosInstance();

    const { data: paymentData, refetch } = useQuery({
        queryKey: ['paymentAmount', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/paymentData/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail
    })
    let totalPayable = paymentData?.payableAmount;

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
                    setTransactionId(paymentIntent.id)

                    // UPDATE ADMIN INFO AFTER PAYMENT IS DONE
                    const updateAdminInfo = {
                        role: "admin",
                        payableAmount: 0,
                        paymentStatus: "paid"
                    }

                    axiosInstance.patch(`/updateAdmin/${loggedInUser?.email}`, updateAdminInfo)
                        .then(res => {
                            console.log(res.data)
                            if (res.data.modifiedCount > 0) {
                                toast.success("Payment successful!");
                                navigate('/login')
                            }
                        })
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

export default CheckOutForm;