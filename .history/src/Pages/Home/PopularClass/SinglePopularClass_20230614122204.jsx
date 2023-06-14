import React from 'react';

const SinglePopularClass = ({popularClass}) => {
    const { instrument_name, image_url, instructor_name, available_seats, price } = popularClass
    return (
        <div>
            <h1>this single popular class</h1>
        </div>
    );
};

export default SinglePopularClass;