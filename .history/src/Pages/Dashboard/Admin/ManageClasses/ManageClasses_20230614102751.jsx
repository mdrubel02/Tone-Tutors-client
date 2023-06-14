import React, { useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { Store } from 'react-notifications-component';

const ManageClasses = () => {
    const { register, handleSubmit, reset } = useForm();
    const [updateStatus, setUpdateStatus] = useState()
    const [axiosSecure] = useAxiosSecure()
    const { data: manageClasses = [], refetch } = useQuery({
        queryKey: ['manageClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/instructor/class');
            return res.data;
        }
    })
    const approvedHandle =(id)=>{
        const status = 'approved'
        console.log(status);
        axiosSecure.patch(`/instructor/class/${id}`, {status})
        .then(data => {
            console.log(data.data.acknowledged)
            reset()
            Store.addNotification({
                title: "Price and seat updated successfully",
                type: "success",
                container: 'top-center',
                dismiss: {
                  duration: 3000,
                  onScreen: true
                }
              })
              refetch()
        })
    }
    const onSubmit = async (data) => {
        const { status } = data;
        console.log(status,updateStatus);
        axiosSecure.patch(`/instructor/class/${updateStatus}`, {status})
        .then(data => {
            console.log(data.data.acknowledged)
            reset()
            Store.addNotification({
                title: `deny confirm`,
                type: "success",
                container: 'top-center',
                dismiss: {
                  duration: 3000,
                  onScreen: true
                }
              })
              refetch()
        })
    }

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
                            manageClasses.map((manageClass, index) => <tr key={manageClass._id}>
                                <td>{index + 1}</td>
                                <td>{manageClass.class_name}</td>
                                <td>{manageClass.Instructor_name}</td>
                                <td >
                                    <button>{manageClass.email}</button>
                                </td>
                                <td>
                                    <div className='flex justify-center'>
                                        <button className='me-3 bg-primary btn btn-sm text-white' onClick={()=>approvedHandle(manageClass?._id)}>Approved</button>
                                        <a onClick={() => setUpdateStatus(manageClass?._id)} className="cursor-pointer inline-flex items-center justify-center w-20 py-1 px-1 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-primary btn btn-sm" href="#my-modal-2" >Denied</a>
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
                                <div>
                                    <textarea type="text" {...register("status", { required: true })} className="textarea w-full" placeholder="Your Comment"></textarea>
                                </div>
                                <div className='flex justify-end items-center'>
                                    <div className="modal-action">
                                        <a href="#" className="btn">Cancel</a>
                                        <button className="btn btn-sm  text-white bg-primary mt-" type="submit"> Feedback </button>
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