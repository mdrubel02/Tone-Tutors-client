import React from 'react';
import banner01 from '../../../assets/banner/banner.jpg'
import BannerItem from './BannerItem';
import './Banner.css'

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
        <div className="carousel w-full">
        {
            bannerData.map((banner,index)=><BannerItem key={index} banner={banner}></BannerItem>)
        }
    </div>
    );
};

export default Banner;