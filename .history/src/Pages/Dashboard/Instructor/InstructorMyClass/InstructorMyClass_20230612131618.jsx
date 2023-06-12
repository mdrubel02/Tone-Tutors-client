import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const InstructorMyClass = () => {
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const {data: InsMyClasses = [], refetch} = useQuery({
        queryKey: ['InsMyClasses', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/instructor/class/${user?.email}`);
            return res.data
        }
    }) 
    return (
        <div>
            <p>in class added here: {InsMyClasses.length}</p>
            <h1>this si instructor class page</h1>
        </div>
    );
};

export default InstructorMyClass;