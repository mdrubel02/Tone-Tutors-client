import React from 'react';
import banner01 from '../../../assets/banner/banner.jpg'

const Banner = () => {
    return (
        <div className="bg-[url('../../../assets/banner/banner.jpg')]" >
            <h1>hello image</h1>
        </div>
        //bg-[url('/img/hero-pattern.svg')]
        // style={{
        //     backgroundImage: `url(${banner01})`,
        //     backgroundRepeat: 'no-repeat',
        //     width: '100%',
        //     height: '105vh'
        // }}
    );
};

export default Banner;