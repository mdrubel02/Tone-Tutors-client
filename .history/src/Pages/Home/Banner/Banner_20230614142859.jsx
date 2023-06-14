import React from 'react';
import banner01 from '../../../assets/banner/banner.jpg'

const Banner = () => {
    const bannerData = [
        {
            image:"https://i.ibb.co/rFSxhHZ/spacejoy-Rq-O6kwm4t-ZY-unsplash.jpg",
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: "https://i.ibb.co/McgcXpd/spacejoy-Yn-LJ3r-M4-Vt-I-unsplash.jpg",
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: "https://i.ibb.co/5MWh0z2/r-architecture-TRCJ-87-Yoh0-unsplash.jpg",
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