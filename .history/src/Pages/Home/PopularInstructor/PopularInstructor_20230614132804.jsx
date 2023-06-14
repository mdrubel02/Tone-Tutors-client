import { useQuery } from '@tanstack/react-query';
import React from 'react';

const PopularInstructor = () => {
    const {data: popularInstructor = [], refetch} = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/popular/instructor');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default PopularInstructor;