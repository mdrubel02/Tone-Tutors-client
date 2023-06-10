import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const SingleClass = ({ singleClass }) => {
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();
  const { instrument_name, image_url, instructor_name, available_seats, price } = singleClass
  const email = user?.email;
  const bookingClasses = async (product)=>{
    const {instructor_name,image_url,instrument_name,available_seats,price}= product;
    const bookings = {
      instructor_name,
      image_url,
      instrument_name,
      available_seats,
      price,
      email
    }
    console.log(bookings);
    axiosSecure.post('/bookings/class', bookings)
    .then(data =>{
      console.log(data, 'success');
    })
  }
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded px-4 mb-7">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <p className="text-2xl font-bold leading-5 capitalize">{instrument_name}</p>
          <p className="card-title">Instructor Name:{instructor_name}</p>
          <h3 className='text-xl font-semibold'>Price: ${price}</h3>
          <h3 className='text-xl font-semibold'>available seats:{available_seats}</h3>
          <div className="card-actions justify-end w-full">
              <button onClick={()=>bookingClasses(singleClass)} className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;