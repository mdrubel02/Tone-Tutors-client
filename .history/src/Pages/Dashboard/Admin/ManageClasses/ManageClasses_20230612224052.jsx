import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

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
        <div>
            <p>{manageClasses.length}</p>
            <h1>this is manage class</h1>
        </div>
    );
};

export default ManageClasses;