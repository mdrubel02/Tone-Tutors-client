import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Store } from 'react-notifications-component';
import StripeCheckout from 'react-stripe-checkout';
import useSelectedClass from '../../../Hooks/useSelectedClass';

const SelectedClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const [selectedClasses, refetch] = useSelectedClass()
    const publishableKey = import.meta.env.VITE_PUBLISHABLE_KEY
    console.log(publishableKey);
    const priceForStripe = product.price * 100;
    const handleDeleteBooking = (selected) => {
        axiosSecure.delete(`/selected/${selected._id}`)
            .then(data => {
                if (data.data.acknowledged) {
                    Store.addNotification({
                        title: `${selected.instrument_name} Deleted successfully!`,
                        type: "success",
                        container: 'top-center',
                        dismiss: {
                            duration: 3000,
                            onScreen: true
                        }
                    })
                }
                refetch()
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
                                <td><StripeCheckout
                                stripeKey={publishableKey}
                                >
                                    <button className='btn btn-sm bg-[#64b450] text-white'>Pay Now</button>
                                </StripeCheckout></td>
                                <td><button onClick={() => handleDeleteBooking(selected)} className='btn btn-primary btn-sm'>Deleted</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;