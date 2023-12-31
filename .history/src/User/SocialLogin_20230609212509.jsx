import React, { useContext } from 'react';
import { dbUser } from '../Api/user';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { Store } from 'react-notifications-component';

const SocialLogin = ({from}) => {
    const {signInGoogle} = useContext(AuthContext)
    const navigate=useNavigate()

    const signWithGoogleHandle=()=>{
        signInGoogle()
        .then(result=>{
            const User = result.user
            const {email,displayName,photoURL} = User
            const user = {
                name:displayName,
                email:email,
                image:photoURL,
            }
            console.log(result.user.accessToken);
            if(result.user.accessToken){
                Store.addNotification({
                    title: "Register successfully",
                    type: "success",
                    container: 'top-center',
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  })
                navigate(from?(from,{replace:true}) : '/')
            }
            dbUser(user)
            .then(data=>{
                console.log(data);
            })
            .catch(error=>console.log(error))
        })
        .catch(error=>console.log(error.message))
    }

    return (
        <div className='mt-6'>
        <div className="divider font-semibold my-6">OR</div>
         <div className='relative'>
            
            <div className='absolute left-4 top-[20%] text-black' >
                <img src="https://i.ibb.co/GW2pwSv/google.png" alt="" className='w-[30px]' />
            </div>
            <button
            onClick={signWithGoogleHandle}
            className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4   font-semibold  outline-none pl-12 bg-none"
            >SignIn With Google</button>
        </div>
    </div>
    );
};

export default SocialLogin;