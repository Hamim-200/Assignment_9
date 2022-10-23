import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className='bg-success'>
            <nav className="  sm:px-4 py-2.5  bg-green-500 rounded navbar bg-accent  px-10">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <NavLink to="/" className="btn btn-ghost normal-case text-xl">Quizes</NavLink>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                            <li><NavLink to='/home'
                                title='Home'
                                className={({ isActive }) => isActive ? 'font-medium mr-4 px-3 py-2 rounded bg-green-600 tracking-wide text-info  transition-colors bg-primary duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide   transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4'}>Home</NavLink>
                            </li>
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
