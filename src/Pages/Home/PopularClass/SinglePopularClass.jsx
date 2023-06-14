import React from 'react';

const SinglePopularClass = ({popularClass}) => {
    const { instrument_name, image_url, instructor_name, available_seats, price } = popularClass
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded px-4 mb-7">
        <div className={`card w-96 bg-base-100 shadow-xl}`}>
          <figure><img src={image_url} alt="Shoes" /></figure>
          <div className="card-body">
            <p className="text-2xl font-bold leading-5 capitalize">{instrument_name}</p>
            <p className="card-title">Instructor Name:{instructor_name}</p>
            <div className="card-actions justify-end w-full">
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default SinglePopularClass;