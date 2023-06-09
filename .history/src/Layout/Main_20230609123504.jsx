import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register');
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default Main;