import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Store } from 'react-notifications-component';

const CheckoutForm = ({bookingSelected}) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const { price,  available_seats, _id,instrument_name } = bookingSelected;

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
            
    }, [price, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            setTransactionId(paymentIntent.id);
            // store payment info in the database
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email: user?.email,
                courseId: _id,
                name: instrument_name,
                seat: available_seats
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        Store.addNotification({
                            title: `Your Instrument ${instrument_name} pay for price ${price}  successfully!`,
                            type: "success",
                            container: 'top-center',
                            dismiss: {
                                duration: 3000,
                                onScreen: true
                            }
                        })
                    }
                })
        }
        setProcessing(false);


    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className='btn btn-sm mt-4 btn-primary'
                type="submit"
                disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
        <p className="text-red-500">{cardError}</p>
        {
            success && <div>
                <p className='text-green-500'>{success}</p>
                <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
            </div>
        }
    </>
    );
};

export default CheckoutForm;