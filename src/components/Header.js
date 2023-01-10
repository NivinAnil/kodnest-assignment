import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import HandleRoutes from "./HandleRoutes";

function Header({ isLoggedIn }) {
    const navigate = useNavigate()






    return (
        <div className='w-screen flex bg-blue-400 p-5  z-20'>
            <div className='uppercase flex flex-row flex-1 text-xl text-white font-bold'>
                <div>KodNest</div>
                {isLoggedIn ? <div className='w-min mx-10 px-2 p-2 text-sm text-white font-bold cursor-pointer rounded-xl hover:shadow-md hover:bg-blue-200 hover:text-gray-500'
                    onClick={() => {
                        navigate(HandleRoutes.HOME)
                    }}
                >home</div> : <></>}
            </div>
            {isLoggedIn ? <div className='mx-10 px-2 p-2 text-sm text-white font-bold cursor-pointer rounded-xl hover:shadow-md hover:bg-blue-200 hover:text-gray-500'
                onClick={() => {
                    signOut(auth).then(() => {
                        // Sign-out successful.
                        navigate(HandleRoutes.SIGNIN);
                        console.log("Signed out successfully");
                    }).catch((error) => {
                        // An error happened.
                        console.log(error);
                    });
                }}
            >Log Out</div> : <></>}
        </div>
    )
}

export default Header;