import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Hero from '../Hero/Hero';


const Home = () => {
    const categories = useLoaderData()

    return (
        <div>
            <Hero></Hero>
            <div className='category-container'>
                {/* categories.data.map(catagory => <Category key={category.id} category={catego ry}></Category>) */}
                categories.data.map(catagory => <Category key={category.id} category={category}></Category>)

            </div>

        </div>
    );
};

export default Home;