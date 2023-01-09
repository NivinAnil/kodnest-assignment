import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import Form from '../components/Form';
import FormLabel from '../components/FormLabel';
import { auth } from '../firebase';

const SignIn = () => {
    const navigate = useNavigate();
    const [signInInfo, setSignInInfo] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState(null);


    const validateForm = () => {

        const passwordOption = {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        }

        if (!validator.isEmail(signInInfo.email))
            return [false, "Invalid email"];
        if (!validator.isStrongPassword(signInInfo.password, passwordOption))
            return [false, "Password should have at least 8 characters, 1 lowercase,1 uppercase,1 number,1 symbols"];

        return [true, "validated"]
    }

    const submitSignInForm = () => {
        const [valid, message] = validateForm();

        if (valid) {
            console.log(signInInfo);
            signInWithEmailAndPassword(auth, signInInfo.email, signInInfo.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigate("/home");
                    console.log(user);
                })
                .catch((error) => {
                    console.log(error)
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    setErrorMessage(errorCode);
                });
        }
        else {
            console.log(message);
            setErrorMessage(message);
        }
    }


    return (
        <div className="pt-20 flex flex-col justify-center items-center ">
            <Form title="Sign In">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <FormLabel>Email</FormLabel>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="abc@email.com"
                            value={signInInfo.email}
                            required
                            onChange={(e) => {
                                setSignInInfo({ ...signInInfo, email: e.target.value })
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
                            id="current-password"
                            type="password"
                            placeholder="*********"
                            autoComplete="true"
                            value={signInInfo.password}
                            required
                            onChange={(e) => {
                                setSignInInfo({ ...signInInfo, password: e.target.value })
                            }}
                        />
                    </div>
                </div>
                <div className='m-1'>
                    <p className='text-center m-1 text-red-400 font-semibold '>{errorMessage}</p>
                </div>
                <div className="flex flex-wrap justify-around">
                    <button
                        className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() => { submitSignInForm() }}
                    >
                        Login
                    </button>
                </div>
                <div className='text-center pt-5'>
                    Don't have a account ? <span className='text-blue-500 cursor-pointer hover:underline hover:text-blue-600'
                        onClick={() => {
                            navigate("/signup");
                        }}
                    >Create an account</span>
                </div>
            </Form>

        </div>
    )

}

export default SignIn;