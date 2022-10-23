import React from "react";
import { NavLink } from "react-router-dom";
// import Nav from'react-bootstrap/Nav'
const Header = () => {
    return (
        <div className='bg-success'>
            <nav className="  sm:px-4 py-2.5  bg-green-500 rounded navbar bg-accent  px-10">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <NavLink to="/" className="btn btn-ghost normal-case text-xl">IQ Tester</NavLink>
                    {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  " aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button> */}
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                            <li><NavLink to='/home'
                                title='Home'
                                className={({ isActive }) => isActive ? 'font-medium mr-4 px-3 py-2 rounded bg-blue-600 tracking-wide text-info  transition-colors bg-primary duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide   transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4'}
                            >Home</NavLink></li>
                            <li><NavLink to='/analytics'
                                className={({ isActive }) => isActive ? 'font-medium mr-4  px-3 py-2 rounded bg-blue-600 tracking-wide text-info e transition-colors bg-primary duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide   transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4 '}
                                title='Statistics'
                            >Analytics</NavLink></li>
                            <li><NavLink to='blogs'
                                title='Blog'
                                className={({ isActive }) => isActive ? 'font-medium mr-4 px-3 py-2 rounded bg-blue-600 tracking-wide text-info transition-colors bg-primary duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4 '}>Blogs</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;
