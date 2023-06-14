import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import PopularSingleInstructor from './PopularSingleInstructor';

const PopularInstructor = () => {
    const { data: popularInstructor = [], refetch } = useQuery({
        queryKey: ['popularInstructor'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/popular/instructor');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <SectionTitle subHeading="Our" heading="Popular Instructor Here" ></SectionTitle>
            {
                popularInstructor.length > 0 ?
                    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
                        {
                            popularInstructor.map(instructor => <PopularSingleInstructor key={instructor._id} instructor={instructor}></PopularSingleInstructor>)
                        }
                    </div>
                    :
                    <div className='bg-yellow py-20 px-5 md:px-16 xl:px-28 text-center rounded-xl mb-10'>
                        <h3 className='font-semibold text-2xl capitalize'>No Service found ,search another page</h3>
                    </div>
            }
        </div>
    );
};

export default PopularInstructor;