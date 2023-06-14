import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

const useSelectedClass = () => {
    const {user , loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading && !! user?.email && !!Cookies.get('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/selected/${user?.email}`);
            return res.data;
        }
    })

    return [selectedClasses, refetch]
};

export default useSelectedClass;

