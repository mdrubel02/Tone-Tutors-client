import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';

const MyPaymentsHistory = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user , loading} = useAuth();
    const {data: payments = [] , refetch} = useQuery({
        queryKey:['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <h1>this is my payment history {payments.length}</h1>
        </div>
    );
};

export default MyPaymentsHistory;