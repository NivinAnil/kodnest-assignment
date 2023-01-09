import React, { useState } from 'react'
import FormLabel from '../components/FormLabel';
import validator from 'validator';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

export const SignUp = () => {
    const navigate = useNavigate();

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState(null);



    // form Validation
    const validateForm = () => {

        const passwordOption = {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        }

        if (!validator.isAlpha(signupInfo.name, 'en-IN', { ignore: " " }))
            return [false, "Invalid name"];
        if (!validator.isEmail(signupInfo.email))
            return [false, "Invalid email"];
        if (!validator.isStrongPassword(signupInfo.password, passwordOption))
            return [false, "Password should have at least 8 characters, 1 lowercase,1 uppercase,1 number,1 symbols"];

        return [true, "validated"]

    }

    const submitSignupForm = async () => {
        const [valid, message] = validateForm();
        if (valid) {
            await createUserWithEmailAndPassword(auth, signupInfo.email, signupInfo.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    user.displayName = signupInfo.name;
                    updateProfile(auth.currentUser, {
                        displayName: signupInfo.name,
                    }).then(() => {
                        navigate("/signin");
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    setErrorMessage(errorMessage);
                    // ..
                });
        }
        else {
            console.log(message);
            setErrorMessage(message);
        }
    }


    return (
        <div className="pt-20 flex flex-col justify-center items-center ">

            <Form title="Sign Up">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <FormLabel>Full Name</FormLabel>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Name"
                            required
                            value={signupInfo.name}
                            onChange={(e) => {
                                setSignupInfo({ ...signupInfo, name: e.target.value });
                            }}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <FormLabel>Email</FormLabel>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-email"
                            type="text"
                            placeholder="abc@email.com"
                            required
                            value={signupInfo.email}
                            onChange={(e) => {
                                setSignupInfo({ ...signupInfo, email: e.target.value });
                            }}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <FormLabel>Password</FormLabel>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gay-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-password"
                            type="password"
                            placeholder="***********"
                            autoComplete="true"
                            required
                            value={signupInfo.password}
                            onChange={(e) => {
                                setSignupInfo({ ...signupInfo, password: e.target.value });
                            }}
                        />
                    </div>
                </div>
                <div>
                    <p className='text-center m-1 text-red-400 font-semibold '>{errorMessage}</p>
                </div>
                <div className="flex flex-wrap justify-around">
                    <button
                        className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() => {
                            submitSignupForm();
                        }}
                    >
                        Register
                    </button>
                </div>
                <div className='text-center pt-5'>
                    Already have a account ? <span className='text-blue-500 cursor-pointer hover:underline hover:text-blue-600'
                        onClick={() => {
                            navigate("/signin");
                        }}
                    >Sign In</span>
                </div>

            </Form>


        </div>
    )
}

export default SignUp;