import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data: allClasses = [], refetch} = useQuery({
        queryKey: ['allClasses'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/instructors/approvedClass')
            return res.data;
        }
    })
    return (
        <div>
            <p>total: {allClasses.length}</p>
            <h1>this is Instructors page</h1>
        </div>
    );
};

export default Instructors;