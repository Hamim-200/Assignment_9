import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { logo, name, total, id } = category
    return (
        <div className='category'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='category-detail'>
                <h5>{name}</h5>
                <p>{total}</p>
                <Link className='start-btn' to={`/category/${id}`}>Start Quiz</Link>

            </div>

        </div>
    );
};

export default Category;