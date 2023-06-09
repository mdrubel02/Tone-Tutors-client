import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useTitle } from '../../Hooks/useTitle';

const Dashboard = () => {
    useTitle('Dashboard')
    const {user} = useContext(AuthContext)
    return (
        <div className='flex min-h-[60vh] justify-center items-center'>
            <Lottie animationData={welcome} loop={true}></Lottie>
        </div>
    );
};

export default Dashboard;