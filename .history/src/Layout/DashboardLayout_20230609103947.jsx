import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const role = true
    return (
        <div>
            <Header />
            <div>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-end justify-start md::justify-center bg-accent">
                        <div className='flex justify-end'>
                            <label htmlFor="my-drawer-2" className="btn bg-primary border-none drawer-button lg:hidden mr-5 sm:mr-10">Menu</label>
                        </div>
                        <div className='w-full lg:mt-16'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 space-y-0 w-80 bg-base-100 text-base-content text-lg font-semibold pl-16 font-jost capitalize">
                            {
                                user?.uid && <li>
                                    <div className='grid grid-cols-1'>
                                        <img src={user?.photoURL ? user?.photoURL : 'https://ibb.co/D9cMPk9'} alt="" className='w-24 h-24 rounded-full object-cover' />
                                        <h3 className='text-secondary text-xl mb-5'>{user?.displayName} {`(${role})`}</h3>
                                    </div>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;