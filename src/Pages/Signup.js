import React, { useState } from 'react'
import FormLabel from '../components/FormLabel';
import validator from 'validator';
import Form from '../components/Form';
export const SignUp = () => {

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState(null);

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

    const submitSignupForm = () => {
        const [valid, message] = validateForm();
        if (valid) {
            console.log(signupInfo);
        }
        else {
            console.log(message);
            setErrorMessage(message);
        }
    }


    return (
        <div className="h-screen flex flex-col justify-center">

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
            </Form>

            <div>
                <p className='text-center m-1 text-red-400 font-semibold '>{errorMessage}</p>
            </div>
        </div>
    )
}

export default SignUp;