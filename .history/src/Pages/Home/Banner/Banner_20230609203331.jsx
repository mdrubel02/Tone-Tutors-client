import React from 'react';
import banner01 from '../../../assets/banner/banner.jpg'

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${banner01})`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '400px'
        }}>
            <h1>hello image</h1>
        </div>
    );
};

export default Banner;