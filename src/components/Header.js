import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Header({ logout }) {
    const navigate = useNavigate()
    // const [render, setRender] = useState(false)
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setRender(true);
    //         }
    //     });
    // }, [])




    return (
        <div className='w-screen flex bg-blue-400 p-5 absolute z-20'>
            <div className='uppercase flex-1 text-xl text-white font-bold'>KodNest</div>
            {logout ? <div className='mx-10 px-2 p-2 text-sm text-white font-bold cursor-pointer rounded-xl hover:shadow-md hover:bg-blue-200 hover:text-gray-500'
                onClick={() => {
                    signOut(auth).then(() => {
                        // Sign-out successful.
                        navigate("/signin");
                        console.log("Signed out successfully")
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