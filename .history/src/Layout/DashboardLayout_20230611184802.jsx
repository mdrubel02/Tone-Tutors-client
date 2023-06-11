import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import { AuthContext } from '../Context/AuthProvider';
import { FaUsers } from 'react-icons/fa';
import useAdmin from '../Hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const role = true
    return (
        <div>
            <Header />
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center ">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content bg-[#FFD3BD] rounded-sm">
                        {
                            user?.uid && <li>
                                <div className='grid grid-cols-1'>
                                    <img src={user?.photoURL ? user?.photoURL : 'https://ibb.co/D9cMPk9'} alt="" className='w-24 h-24 rounded-full object-cover' />
                                    <h3 className='text-secondary text-xl mb-5'>{user?.displayName} {`(${role})`}</h3>
                                </div>
                            </li>
                        }
                        {isAdmin && (
                            <>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            </>
                        )}

                        <li><NavLink to="/dashboard/selectClass"><FaUsers></FaUsers>My-Classes</NavLink></li>
                        <li><NavLink
                            className={({ isActive }) => isActive ? "font-medium bg-primary-focus transition-colors duration-100" : "font-bold transition-colors duration-100 text-primary"}
                            to="/dashboard/myPaymentHistory"><FaUsers></FaUsers>My-Payment-History</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;