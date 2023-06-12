import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const InstructorMyClass = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: InsMyClasses = [], refetch } = useQuery({
        queryKey: ['InsMyClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructor/class/${user?.email}`);
            return res.data
        }
    })
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
                                <td><label className="btn btn-primary btn-sm" htmlFor="my_modal_6" >Edit</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorMyClass;