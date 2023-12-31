import React, { useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUserShield } from "react-icons/fa";
import { Store } from 'react-notifications-component';
import useAdmin from '../../../../Hooks/useAdmin';

const AllUsers = () => {
    const [isAdmin] = useAdmin()
    console.log(isAdmin);
    const [axiosSecure] = useAxiosSecure();
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    console.log(axiosSecure);
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    console.log(users);
    const handleMakeAdmin = user =>{
        fetch(`https://tone-tuitors-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Store.addNotification({
                    title: `${user.name} is an Admin Now!`,
                    type: "success",
                    container: 'top-center',
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  })
                  setButtonDisabled(true);
            }
        })
    }
    const handleMakeInstructor = user =>{
        fetch(`https://tone-tuitors-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Store.addNotification({
                    title: `${user.name} is an Instructor Now!`,
                    type: "success",
                    container: 'top-center',
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  })
            }
        })
    }

    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
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

export default AllUsers;