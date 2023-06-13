import React from 'react';

const InstructorsSingleClass = ({ instructorClass }) => {
    const {class_name, instructor_name, available_seats,price, image} = instructorClass
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded px-4 mb-7">
            <div className={`card w-96 bg-base-100 shadow-xl`}>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="text-2xl font-bold leading-5 capitalize">{class_name}</p>
                    <p className="card-title">Instructor Name:{instructor_name}</p>
                    <h3 className='text-xl font-semibold'>Price: ${price}</h3>
                    <h3 className='text-xl font-semibold'>available seats:{available_seats}</h3>
                    <div className="card-actions justify-end w-full">
                        <button disabled={available_seats === 0} onClick={() => bookingClasses(singleClass)} className="btn btn-primary w-full">Class Booking</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorsSingleClass;