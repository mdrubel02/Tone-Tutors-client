import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register');
    return (
        <>
            { noHeaderFooter || <Header />}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer />}
        </>
    );
};

export default Main;