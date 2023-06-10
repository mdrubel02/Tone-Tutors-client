import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const SelectedClass = () => {
    const {user} = useContext(AuthContext)
    console.log(user?.user);
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClasses = [], refetch} = useQuery({
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {user.role ?<td>{user.role}</td>: <td>student</td>}
                                <td><button disabled={user?.role === 'admin'} onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                    </td>
                                <td><button disabled={user?.role === 'instructor'} onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-orange-600  text-white">Instructor</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;