import React from 'react';
import banner01 from '../../../assets/banner/banner.jpg'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner01})`}}>
            <h1>hello image</h1>
        </div>
    );
};

export default Banner;