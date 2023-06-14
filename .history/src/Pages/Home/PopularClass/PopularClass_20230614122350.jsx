import React from 'react';
import SinglePopularClass from './SinglePopularClass';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';

const PopularClass = () => {
    const {data: popularClasses = [], refetch} = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async() =>{
            const res = await fetch('https://doctors-portal-server-rust.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <SectionTitle subHeading="Our" heading="Popular Class Here" ></SectionTitle>
        {
            popularClasses.length > 0 ?
                <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {
                        popularClasses.map(popularClass => <SinglePopularClass key={popularClass._id} popularClass={popularClass}></SinglePopularClass>)
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

export default PopularClass;