import React from 'react';

const PopularSingleInstructor = ({instructor}) => {
    const {name,image,age} = instructor;
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded px-4 mb-7">
        <div className={`card w-96 bg-base-100 shadow-xl}`}>
          <figure><img src={image} alt="Shoes" /></figure>
          <div className="card-body">
            <p className="text-2xl font-bold leading-5 capitalize">Instructor name: {name}</p>
            <p className="card-title">Instructor age:{age}</p>
            <div className="card-actions justify-end w-full">
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default PopularSingleInstructor;