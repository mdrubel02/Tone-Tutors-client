import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import banner01 from '../../../assets/banner/banner.jpg'

const Banner = () => {
    return (
        <Carousel className='text-center'>
            <div>
                <img src={banner01} />
                <p className="legend">Legend 1</p>
                <p className="legend">Legend 1</p>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={banner01}/>
                <p className="legend">Legend 2</p>
                <p className="legend">Legend 2</p>
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={banner01}/>
                <p className="legend">Legend 3</p>
                <p className="legend">Legend 3</p>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Banner;