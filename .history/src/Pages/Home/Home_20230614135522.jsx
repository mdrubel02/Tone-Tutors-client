import React from 'react';
import Banner from './Banner/Banner';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClass />
            <PopularInstructor />
            <About />
        </div>
    );
};

export default Home;