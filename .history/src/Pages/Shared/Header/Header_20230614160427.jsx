import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineUserAdd } from 'react-icons/ai';
import './Header.css'
import { Store } from 'react-notifications-component';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const logOutHandle = () => {
        logOut()
            .then(() =>  Store.addNotification({
                title: "Logout successfully",
                type: "success",
                container: 'top-center',
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              }))
    }
    const menu = <>
        <li className='flex items-center'>
            <NavLink
                to="/home"
                aria-label="home"
                title="home"
                className={({ isActive }) => isActive ? "font-medium bg-primary-focus transition-colors duration-100" : "font-bold transition-colors duration-100 text-primary"}
            >
                Home
            </NavLink>

        </li>
        <li className='flex items-center'>
            <NavLink
                to="/instructors"
                aria-label="instructors"
                title="instructors"
                className={({ isActive }) => isActive ? "font-medium bg-primary-focus transition-colors duration-100" : "font-bold transition-colors duration-100 text-primary"}
            >
                Instructors
            </NavLink>
        </li>
        <li className='flex items-center'>
            <NavLink
                to="/classes"
                aria-label="classes"
                title="classes"
                className={({ isActive }) => isActive ? "font-medium bg-primary-focus transition-colors duration-100" : "font-bold transition-colors duration-100 text-primary"}
            >
                Classes
            </NavLink>
        </li>
        {
            user ?
                <>
                    <li className='flex items-center'>
                        <NavLink
                            to="/dashboard"
                            aria-label="dashboard"
                            title="dashboard"
                            className={({ isActive }) => isActive ? "font-medium bg-primary-focus transition-colors duration-100" : "font-bold transition-colors duration-100 text-primary"}
                        >
                            Dashboard
                        </NavLink>
                       
                    </li>
                    <button
                        onClick={logOutHandle}
                        className="tracking-wide  flex items-center font-bold transition-colors duration-100 text-primary">
                        Logout
                    </button>
                </>
                : undefined
        }
    </>
    return (
        <div className=" top-0 z-50">
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-5 md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img className='w-20' src="https://i.ibb.co/YyJS43b/4862745-01-removebg-preview.png" alt="logo" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100">
                            Car<span className='text-primary text-2xl'>Playground</span>
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-7 lg:flex capitalize">
                        {menu}
                    </ul>
                    <ul className="flex items-center hidden space-x-8 lg:flex ">
                        {
                            user ?
                                <div className='flex items-center'>
                                    <small className='text-white'>{user?.displayName}</small>
                                    <img src={user?.photoURL} alt="user" className='w-[40px] h-[40px] object-cover rounded-full ml-2' />
                                </div> :
                                <li>
                                    <Link
                                        to="/login"
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        <button className="btn btn-circle bg-secondary">
                                            <AiOutlineUserAdd  className='text-withe text-2xl' />
                                        </button>
                                    </Link>
                                </li>
                        }
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline bg-secondary"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-white" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-20">
                                <div className="p-5 bg-black border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-100">
                                                    Homemade<span className='text-yellow text-2xl'>Crunch</span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-white" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4 capitalize">
                                            {menu}
                                            {
                                                user ?
                                                    <div className='flex items-center'>
                                                        <small className='text-white'>{user?.email}</small>
                                                        <img src={user?.photoURL} alt="user" className='w-[40px] h-[40px] object-cover rounded-full ml-2' />
                                                    </div> :
                                                    <li>
                                                        <Link
                                                            to="/login"
                                                            aria-label="Sign up"
                                                            title="Sign up"
                                                        >
                                                            <button className="btn btn-circle bg-primary">
                                                                <AiOutlineUserAdd className='text-primary text-2xl' />
                                                            </button>
                                                        </Link>
                                                    </li>
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='colored_line'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Header;