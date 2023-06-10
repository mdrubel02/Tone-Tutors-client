import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

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
    const handleDeleteBooking =(id)=>{
        console.log(id);
        axiosSecure.delete(`/selected/${id}`)
        .then(data =>{
            console.log(data.data , 'success');
        })
    }
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
                                <td><button className='btn btn-sm bg-[#64b450] text-white'>Pay Now</button></td>
                                <td><button onClick={()=>handleDeleteBooking(selected._id)} className='btn btn-primary btn-sm'>Deleted</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;