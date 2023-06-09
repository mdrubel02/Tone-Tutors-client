import React from 'react';
import banner01 from '../../../assets/banner/banner.jpg'

const Banner = () => {
    return (
        <div className='mb-6' style={{
            backgroundImage: `url(${banner01})`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '105vh'
        }}>
            <h1>hello image</h1>
        </div>
        
    );
};

export default Banner;