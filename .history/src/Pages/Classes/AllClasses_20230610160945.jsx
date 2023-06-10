import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SingleClass from './SingleClass';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    return (
        <div>
            {
                classes.length > 0 ?
                    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
                        {
                            classes.map(singleClass => <SingleClass key={singleClass._id} singleClass={singleClass}></SingleClass>)
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

export default Classes;