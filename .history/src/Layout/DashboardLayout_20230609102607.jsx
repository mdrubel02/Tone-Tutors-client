import React, { useContext } from 'react';
import {NavLink, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const role = true
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">

                        <div className="divider"></div>
                        <li><NavLink to="/"> Home</NavLink> </li>
                        <li><NavLink to="/menu"> Our Menu</NavLink></li>
                        <li><NavLink to="/order/salad">Order Food</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;