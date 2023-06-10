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
        <div>
            <h1>total select: {selectedClasses.length}</h1>
        </div>
    );
};

export default SelectedClass;