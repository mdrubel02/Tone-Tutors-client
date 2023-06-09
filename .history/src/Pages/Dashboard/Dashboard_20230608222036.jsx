import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useTitle } from '../../Hooks/useTitle';
import Lottie from "lottie-react";
import welcome from '../../assets/animation/welcome.json'

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