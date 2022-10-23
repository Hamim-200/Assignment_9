import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './FrontPage.css'

const FrontPage = () => {
    return (
        <div className='container-FP'>
            <h2>Get Ready For Quizs?</h2>

            <Link to="/home">
                <button type="button">
                    Start Quizs!
                </button>
            </Link>
        </div>
    );
};

export default FrontPage;