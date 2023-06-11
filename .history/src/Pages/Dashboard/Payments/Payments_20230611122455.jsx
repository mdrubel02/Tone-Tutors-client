import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY)
const Payments = () => {
    const bookingSelected = useLoaderData();
    console.log(booking, 'data here');
    const {price, instrument_name} = bookingSelected;
    return (
        <div>
        <h3 className="text-3xl">Payment for {instrument_name}</h3>
        <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
        <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    bookingSelected={bookingSelected}
                />
            </Elements>
        </div>
    </div>
    );
};

export default Payments;