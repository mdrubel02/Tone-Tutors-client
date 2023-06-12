import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const InstructorMyClass = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const [updateProduct, setUpdateProduct] = useState({
        price: 0,
        description: "",
        quantity: 0,
    })
    const { data: InsMyClasses = [], refetch } = useQuery({
        queryKey: ['InsMyClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructor/class/${user?.email}`);
            return res.data
        }
    })
    const handleInputData = (event) => {
        const name = event.target.name
        const value = event.target.value
        setUpdateProduct({ ...updateProduct, [name]: value })

    }
    const handleUpdateReview = (event) => {
        event.preventDefault()
        const form = event.target

        const products = {
            price,
            description,
            quantity
        }

        if (price && description && quantity) {
            fetch(`https://car-playground-server-site.vercel.app/updateProduct/${updateModal}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(products)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        setMyReviewRefresh(!myReviewRefresh)
                        toast.success('product update successfull', { autoClose: 1000 })
                        form.reset()
                    }
                })
                .catch(error => toast.error(error.message, { autoClose: 1000 }))
        }
    }
    const handleUpdate = (product) => {
        console.log(product);
    }
    refetch()
    return (
        <div className="w-full">
            <SectionTitle subHeading="Added Your" heading="All Classes" ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Instrument Name</th>
                            <th>Available seat</th>
                            <th>Student enroll</th>
                            <th>Status</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            InsMyClasses.map((insMyClass, index) => <tr key={insMyClass._id}>
                                <th>{index + 1}</th>
                                <td>{insMyClass.class_name}</td>
                                <td>{insMyClass.available_seats}</td>
                                <td>{insMyClass.enrolledStudents}</td>
                                <td> {insMyClass.status}</td>
                                <td>
                                    <a onClick={() => setUpdateModal(insMyClass?._id)} className="cursor-pointer inline-flex items-center justify-center w-full py-2 px-2 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-primary btn btn-sm" href="#my-modal-2" >Edit</a>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* todo */}
            <div>
                <div className="modal" id="my-modal-2">
                    <div className="modal-box">
                        <form onSubmit={handleUpdateReview}>
                            <div className="mb-1 sm:mb-2">
                                <div className='mb-3'>
                                    <label htmlFor="rating" className='font-semibold mb-2 inline-block'>Update Your Product </label>
                                    <input
                                        onBlur={handleInputData}
                                        placeholder="Price"
                                        required
                                        type="number"
                                        className="py-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium outline-none bg-none"
                                        id="price"
                                        name="price"
                                    />
                                    <input
                                        onBlur={handleInputData}
                                        placeholder="available seats"
                                        required
                                        type="number"
                                        className="py-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium outline-none bg-none"
                                        id="available_seats"
                                        name="available_seats"
                                    />
                                </div>
                                <div className='flex justify-end items-center'>
                                    <div className="modal-action">
                                        <a href="#" className="btn">Cancel</a>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn mt-5 ml-2 bg-yellow border-none"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorMyClass;