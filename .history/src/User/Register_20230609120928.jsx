import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import SocialLogin from './SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { useTitle } from '../Hooks/useTitle';
import { dbUser } from '../Api/user';
import { useForm } from 'react-hook-form';
import { imageUpload } from '../Api/imageUpload';
import { AiFillEyeInvisible} from 'react-icons/ai';

const Register = () => {
    useTitle('Register')
    const [load, setLoad] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const {
        createUser,
        updateUserProfile,
        logOut
    } = useContext(AuthContext)

    const createUserHandle = (data) => {
        setLoad(true)
        const name = data.name
        const email = data.email
        const password = data.password
        const image = data.image[0]

        const formData = new FormData()
        formData.append('image', image)

        imageUpload(formData)
            .then(data => {
                if (data.success) {
                    reset()
                    const photo = data.data.display_url
                    createUser(email, password)
                        .then(result => {
                            const profile = {
                                displayName: name,
                                photoURL: photo
                            }
                            updateUserProfile(profile)
                                .then(result => {
                                    const user = {
                                        name,
                                        email,
                                        image: photo
                                    }
                                    dbUser(user)
                                        .then(data => {
                                            console.log(data);
                                           navigate('/')
                                        }
                                        )
                                        .catch(error => {
                                            setLoad(false)
                                        })
                                })
                                .catch(error => {
                                    setLoad(false)
                                })
                        })
                        .catch(error => {
                            setLoad(false)
                            toast.error(error.message, { duration: 1200 })
                        })
                }
            })
            .catch(error => {
                setLoad(false)
            })

    }
    return (
        <div className="bg-opacity-75">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                    <div className="w-full max-w-xl xl:px-8 xl:w-6/12 m-auto">
                        <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                            <div className='flex justify-between mb-4'>
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Register
                                </h3>
                            </div>
                            <form onSubmit={handleSubmit(createUserHandle)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="name" className="block mb-1 font-medium text-[16px]">Name</label>
                                    <input {...register("name", { required: "Name is required!" })} type="text" placeholder="Name" className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                                    {errors?.name && <p className='text-red-600'>{errors.name?.message}</p>}
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="email" className="block mb-1 font-medium text-[16px]">Email</label>
                                    <input {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /\S+@\S+\.\S+/, message: 'Email is not valid!' }
                                    })} type="text" placeholder="Email" className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                                    {errors?.email && <p className='text-red-600'>{errors?.email.message}</p>}
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="image" className="block mb-1 font-medium text-[16px]">Image Upload</label>
                                    <input {...register("image", { required: "image is required!" })} placeholder="Upload Image" type="file" className="file-input file-input-bordered w-full " />
                                    {errors?.image && <p className='text-red-600'>{errors?.image.message}</p>}
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="password" className="block mb-1 font-medium text-[16px]">Password</label>
                                    <input {...register("password", {
                                        required: "Password is required!",
                                        pattern: { value: /(?=.*[!@#$&*])/, message: 'password should be minimum one special character' },
                                        minLength: { value: 6, message: 'password should be must 6 characters' }
                                    })} type="password" placeholder="Password" className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm relative"  />
                                    <AiFillEyeInvisible className='absolute bottom-0 left-0'/>
                                    {errors?.password && <p className='text-red-600'>{errors?.password.message}</p>}
                                </div>
                                <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-focus">
                                    {
                                        load ? <span className='border-2 border-dashed border-white animate-spin w-7 h-7 rounded-full'></span> : ' Register'
                                    }
                                </button>
                            </form>
                            <SocialLogin></SocialLogin>
                            <Link to="/login" className="mb-4 sm:text-center sm:mb-6 italic  mt-5 inline-block text-lg">
                                Already have an account ? <span className='text-primary'>Login</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;