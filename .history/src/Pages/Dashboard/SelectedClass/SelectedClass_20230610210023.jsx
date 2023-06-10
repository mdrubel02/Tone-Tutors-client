import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import {MdPayment} from 'react-icons/md'

const SelectedClass = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.user);
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/selected/${user?.email}`);
            return res.data;
        }
    })
    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Your Total Selected Class: {selectedClasses.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Instrument Name</th>
                            <th>Available seat</th>
                            <th>Payment</th>
                            <th>Deleted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses.map((selected, index) => <tr key={selected._id}>
                                <th>{index + 1}</th>
                                <td>{selected.instrument_name}</td>
                                <td>{selected.available_seats}</td>
                                <td className='cursor-pointer'><MdPayment className='text-2xl text-[#64b450]'/></td>
                                <td><button className='btn btn-sm btn-[#64b450]'>Pay Now</button></td>
                                <td><button className='btn btn-primary btn-sm'>Deleted</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;