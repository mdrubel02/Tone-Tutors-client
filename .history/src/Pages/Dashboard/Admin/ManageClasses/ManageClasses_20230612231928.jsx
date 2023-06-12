import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure() 
    const {data: manageClasses = [], refetch} = useQuery({
        queryKey: ['manageClasses'],
        queryFn: async ()=> {
            const res = await axiosSecure.get('/instructor/class');
            return res.data;
        }
    })
    return (
        <div className="w-full">
        <SectionTitle subHeading="Manage Our" heading="Instructor Classes" ></SectionTitle>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr> 
                        <th>#</th>
                        <th>Instrument Name</th>
                        <th>Instructor Name</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageClasses.map((manageClass,index) => <tr key={manageClass._id}>
                            <td>{index + 1}</td>
                            <td>{manageClass.class_name}</td>
                            <td>{manageClass.instructor_name}</td>
                            <td>{manageClass.email}</td>
                            <td>
                               <div className='flex justify-center '>
                                <button>Approved</button>
                                <a onClick={() => setUpdateModal(insMyClass?._id)} className="cursor-pointer inline-flex items-center justify-center w-full py-1 px-1 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-primary btn btn-sm" href="#my-modal-2" >Denied</a>
                               </div>
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
                                    <button className="btn btn-sm  text-white bg-primary mt-" type="submit"> Update </button>
                                </div>
                                

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ManageClasses;