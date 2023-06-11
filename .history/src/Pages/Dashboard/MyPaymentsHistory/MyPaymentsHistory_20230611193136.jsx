import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const MyPaymentsHistory = () => {
    const [] = useAxiosSecure()
    return (
        <div>
            <h1>this is my payment history</h1>
        </div>
    );
};

export default MyPaymentsHistory;