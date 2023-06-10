import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleClass = ({singleClass}) => {
    const navigate = useNavigate();
    const {instrument_name,image_url,instructor_name,available_seats,price}= singleClass
    console.log(image_url);
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded text-center px-4 mb-7">
                      <img
                      src={image_url}
                      className="h-[220px] w-[250px] m-auto rounded cursor-pointer"
                      alt=""
                      />
      <div className="py-5 ">
        <Link
          to="/"
          aria-label="Article"
          className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          <p className="text-2xl font-bold leading-5 capitalize">{instructor_name}</p>
        </Link>
        <p className="text-2xl font-bold leading-5 capitalize">{instrument_name}</p>
        <h3 className='text-xl font-semibold'>${price}</h3>
        <h3 className='text-xl font-semibold'>available seats:{available_seats}</h3>
        <button onClick={()=>navigate(`/productDetails/${_id}`)} className='bg-yellow py-3 px-7 font-semibold flex rounded-full items-center mt-5 m-auto text-[15px hover:bg-black transition ease-in-out delay-150 duration-500 hover:text-white'>View Details</button>
      </div>
    </div>
    );
};

export default SingleClass;