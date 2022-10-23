import React from 'react';
import { NavLink } from 'react-router-dom';
import './FrontPage.css'

const FrontPage = () => {
    return (
        <div className='container-FP'>
            <h2>Get Ready For Quizs?</h2>
            <li><NavLink to='/home'
                title='Home'
                className={({ isActive }) => isActive ? 'font-medium mr-4 px-3 py-2 rounded bg-green-600 tracking-wide text-info  transition-colors bg-primary duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide   transition-colors duration-200 hover:text-deep-purple-accent-400 mr-4'}>Quizs</NavLink>
            </li>
        </div>
    );
};

export default FrontPage;