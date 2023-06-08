import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { FaAngleRight} from 'react-icons/fa';

const Header = () => {
    const {user,logOut}= useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const logOutHandle=()=>{
      logOut()
      .then(()=>toast.warning('Lof Out',{autoClose:1000}))
  }
    const menu = <>
        <li className='flex items-center'>
            <NavLink
                to="/home"
                aria-label="home"
                title="home"
                className={({ isActive }) => isActive ? "font-medium text-yellow transition-colors duration-100" : "font-medium transition-colors duration-100 text-white"}
            >
                Home
            </NavLink>
            <FaAngleRight className='text-yellow ml-1 text-xs'></FaAngleRight>
        </li>
        <li className='flex items-center'>
            <NavLink
                to="/blog"
                aria-label="blog"
                title="blog"
                className={({ isActive }) => isActive ? "font-medium text-yellow transition-colors duration-100" : "font-medium transition-colors duration-100 text-white"}
            >
                Blog
            </NavLink>
            <FaAngleRight className='text-yellow ml-1 text-xs'></FaAngleRight>
        </li>
        <li className='flex items-center'>
            <NavLink
                to="/toyShop"
                aria-label="allservice"
                title="allservice"
                className={({ isActive }) => isActive ? "font-medium text-yellow transition-colors duration-100" : "font-medium transition-colors duration-100 text-white"}
            >
                Toy-Shop
            </NavLink>
            <FaAngleRight className='text-yellow ml-1 text-xs'></FaAngleRight>
        </li>
        {
            user ?
                <>
                    <li className='flex items-center'>
                        <NavLink
                            to="/myToys"
                            aria-label="myreview"
                            title="myreview"
                            className={({ isActive }) => isActive ? "font-medium text-yellow transition-colors duration-100" : "font-medium transition-colors duration-100 text-white"}
                        >
                            My Toys
                        </NavLink>
                        <FaAngleRight className='text-yellow ml-1 text-xs'></FaAngleRight>
                    </li>
                    <li className='flex items-center'>
                        <NavLink
                            to="/addCategory"
                            aria-label="addService"
                            title="addService"
                            className={({ isActive }) => isActive ? "font-medium text-yellow transition-colors duration-100" : "font-medium transition-colors duration-100 text-white"}
                        >
                            Add A Toy
                        </NavLink>
                        <FaAngleRight className='text-yellow ml-1 text-xs'></FaAngleRight>
                    </li>
                    <button
                        onClick={logOutHandle}
                        className="font-medium tracking-wide  flex items-center transition-colors duration-200 hover:text-teal-accent-400 text-white">
                        Logout <FaAngleRight className='text-yellow ml-1 text-xs'></FaAngleRight>
                    </button>
                </>
                : undefined
        }
    </>
    return (
        <div className="bg-black sticky top-0 z-50">
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-5 md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img className='w-6' src="https://i.ibb.co/CtBB8Kw/logo.png" alt="logo" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100">
                            Car<span className='text-yellow text-2xl'>Playground</span>
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
                                        className="border border-yellow inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none text-white hover:bg-[#ffffff36]"
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        login
                                    </Link>
                                </li>
                        }
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
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
                                                            className="border border-yellow inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none text-white hover:bg-[#ffffff36]"
                                                            aria-label="Sign up"
                                                            title="Sign up"
                                                        >
                                                            login
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
        </div>
    );
};

export default Header;