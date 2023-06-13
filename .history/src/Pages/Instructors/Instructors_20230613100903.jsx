import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import InstructorsSingleClass from './InstructorsSingleClass';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data: instructorClasses = [], refetch} = useQuery({
        queryKey: ['instructorClasses'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/instructors/approvedClass')
            return res.data;
        }
    })
    return (
        <div>
        {
            instructorClasses.length > 0 ?
                <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {
                        instructorClasses.map(instructorClass => <InstructorsSingleClass key={instructorClass._id} instructorClass={instructorClass}></InstructorsSingleClass>)
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

export default Instructors;