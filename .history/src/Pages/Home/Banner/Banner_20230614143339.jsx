import React from 'react';
import banner01 from '../../../assets/banner/banner.jpg'

const Banner = () => {
    const bannerData = [
        {
            image: banner01,
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: banner01,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: banner01,
            prev: 2,
            id: 3,
            next: 1
        }
    ]
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