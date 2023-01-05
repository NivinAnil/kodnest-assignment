import React, { useState } from 'react'
import validator from 'validator';
import FormLabel from '../components/FormLabel';

const SignIn = () => {

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
        }
        else {
            console.log(message);
            setErrorMessage(message);
        }
    }

    return (
        <>
            <div className="flex flex-wrap h-2/3 justify-center p-5 items-center">
                <form className="w-full max-w-sm">
                    <h1 className="text-center p-5 uppercase font-bold text-gray-800">
                        Sign In
                    </h1>
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

                    <div className="flex flex-wrap justify-around">
                        <button
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={() => { submitSignInForm() }}
                        >
                            Login
                        </button>
                        <button
                            className="shadow bg-gray-300 border-purple-200 hover:bg-gray-800 hover:text-white focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded"
                            type="button"

                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <p className='text-center m-1 text-red-400 font-semibold '>{errorMessage}</p>
            </div>
        </>
    )

}

export default SignIn;