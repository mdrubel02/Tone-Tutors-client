import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

const BannerItem = ({banner}) => {
    return (
        <div id={`slide${banner.id}`} className="carousel-item relative w-full">
        <div className="relative w-full">
            <img
                src={banner.image}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-50 min-h-[90vh] font-jost items-center flex px-4 sm:px-10 lg:px-20 ">
                <div className="py-16 lg:py-20" data-aos="fade-right">
                <div className="">
                    <div className="w-full max-w-xl text-white">
                    <h2 className="banner_title">
                    In kids we trust
                    KIDS CENTER
                    </h2>
                    <p className=" mb-4 text-base md:text-2xl">
                    Aliquet sed gravida vitae maecenas volutpat. Amet, sagittis nisi semper ipsum semper vitae integer.
                    </p>
                    <Link
                        to="/categories"
                        aria-label=""
                        className="inline-flex items-center font-semibold px-4 py-3 sm:px-6 sm:py-4 text-lg bg-primary sm:text-xl my-5"
                    >
                        <FaCartPlus className='mr-2'></FaCartPlus>
                        Shop Now
                        
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="absolute flex justify-center gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0  ">
        <a href={`#slide${banner.prev}`} className="btn btn-circle">❮</a> 
        <a href={`#slide${banner.next}`} className="btn btn-circle">❯</a>
        </div>
    </div>
    );
};

export default BannerItem;