import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Context/AuthProvider';

const SelectedClass = () => {
    const {user} = useContext(AuthContext)
    console.log(user?.user);
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return (
        <div>
            <h1>this selected class page</h1>
        </div>
    );
};

export default SelectedClass;