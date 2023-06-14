import React from 'react';

const About = () => {
    // useTitle('About')
    return (
        <div className="px-4 sm:px-10 lg:px-20 py-16 mx-auto lg:py-20 bg-[#0201010d]">
            <div className="grid gap-12 lg:grid-cols-2 sm:mx-auto font-jost">
                <div className="relative" data-aos="fade-right">
                <img
                    className="object-cover w-full h-full col-span-2 rounded shadow-lg"
                    src="https://i.ibb.co/BPr6Hx5/about.jpg"
                    alt="about"
                />
                <div className='bg-white px-3 py-3 absolute right-0 bottom-0 text-center font-bold'>
                    <p className='text-primary text-6xl'>25+</p>
                    <p className='text-primary text-xl'>Year Experience</p>
                </div>
                </div>
                <div className="flex flex-col justify-center font-jost text-secondary" data-aos="fade-up" >
                <div className='font-jost capitalize '>
                    <span className='text-primary text-lg italic'>Who we are</span>
                    <p className='text-4xl font-semibold pb-10 text-primary '>A creation that suits your personality.</p>
                </div>
                <div className="flex">
                    <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full ">
                        <img src="https://i.ibb.co/WgPdZXG/verify.png" alt="" />
                    </div>
                    </div>
                    <div>
                    <h6 className="mb-2 font-semibold leading-5 text-2xl">
                        Trusted furniture store
                    </h6>
                    <p className="text-lg font-medium">
                    Aliquam facilisi arcu libero nascetur vivamus tincidunt eget ad conubia turpis donec
                    </p>
                    <hr className="w-full my-6 border-gray-300" />
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full ">
                    <img src="https://i.ibb.co/fk6NVtk/user.png" alt="" />
                    </div>
                    </div>
                    <div>
                    <h6 className="mb-2 font-semibold leading-5 text-2xl">
                     Professional Services
                    </h6>
                    <p className="text-lg font-medium">
                    Aliquam facilisi arcu libero nascetur vivamus tincidunt eget ad conubia turpis donec
                    </p>
                    <hr className="w-full my-6 border-gray-300" />
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full ">
                    <img src="https://i.ibb.co/M2N1b3Q/history.png" alt="" />
                    </div>
                    </div>
                    <div>
                    <h6 className="mb-2 font-semibold leading-5 text-2xl">
                    100% Safe transactions
                    </h6>
                    <p className="text-lg font-medium">
                    Aliquam facilisi arcu libero nascetur vivamus tincidunt eget ad conubia turpis donec
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
};

export default About;