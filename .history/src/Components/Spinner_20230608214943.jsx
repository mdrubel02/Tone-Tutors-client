import React, { useEffect } from 'react';

const Spinner = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <span className='w-20 h-20 rounded-full border-8 border-dashed border-primary animate-spin'></span>
        </div>
    );
};

export default Spinner;