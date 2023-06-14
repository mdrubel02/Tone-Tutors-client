import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import { useTitle } from '../../../../Hooks/useTitle';
import Cookies from 'js-cookie';

const MyPaymentsHistory = () => {
    useTitle('Payment-History')
    const [axiosSecure] = useAxiosSecure()
    const {user , loading} = useAuth();
    const {data: payments = [] , refetch} = useQuery({
        queryKey:['payments', user?.email],
        enabled: !loading && !! user?.email && !!Cookies.get('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    })
    refetch()
    return (
<div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Your Payment History</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Instrument Name</th>
                            <th>Price</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.name}</td>
                                <td>{payment.price}</td>
                                <td>{payment.email}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPaymentsHistory;