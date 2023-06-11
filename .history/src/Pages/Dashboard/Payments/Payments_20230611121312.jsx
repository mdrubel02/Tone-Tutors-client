import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payments = () => {
    const booking = useLoaderData();
    console.log(booking, 'data here');
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Payments;