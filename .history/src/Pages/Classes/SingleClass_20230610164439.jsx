import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleClass = ({ singleClass }) => {
  const navigate = useNavigate();
  const { instrument_name, image_url, instructor_name, available_seats, price } = singleClass
  console.log(image_url);
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded px-4 mb-7">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p className="text-2xl font-bold leading-5 capitalize">{instrument_name}</p>
          <p className="text-2xl font-bold leading-5 capitalize">Instructor Name:{instructor_name}</p>
          <h3 className='text-xl font-semibold'>Price: ${price}</h3>
          <h3 className='text-xl font-semibold'>available seats:{available_seats}</h3>
          <div className="card-actions justify-end w-full">
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;