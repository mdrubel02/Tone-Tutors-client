import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const InstructorMyClass = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const [updateModal, setUpdateModal] = useState()
    const { data: InsMyClasses = [], refetch } = useQuery({
        queryKey: ['InsMyClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructor/class/${user?.email}`);
            return res.data
        }
    })

    const onSubmit = async (data) => {
        const { price, available_seats, } = data;
        const newClass = { price: parseFloat(price), available_seats: parseFloat(available_seats)}
        console.log(newClass);
        // if(price && available_seats){

        // }
     
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
                                    <a onClick={() => setUpdateModal(insMyClass?._id)} className="cursor-pointer inline-flex items-center justify-center w-full py-1 px-1 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-primary btn btn-sm" href="#my-modal-2" >Edit</a>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-1 sm:mb-2">
                                <div className='mb-3'>
                                    <div className="form-control w-full ml-4">
                                        <label className="label">
                                            <span className="label-text font-semibold">Price*</span>
                                        </label>
                                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                                    </div>
                                    <div className="form-control w-full ml-4">
                                        <label className="label">
                                            <span className="label-text font-semibold">Available seats*</span>
                                        </label>
                                        <input type="number" {...register("available_seats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                                    </div>
                                </div>
                                <div className='flex justify-end items-center'>
                                    <div className="modal-action">
                                        <a href="#" className="btn">Cancel</a>
                                    </div>
                                    <button className="btn btn-sm mt-4 text-white bg-primary  mb-3" type="submit"> Update </button>
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