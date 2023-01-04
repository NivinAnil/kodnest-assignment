import React from 'react'
import FormLabel from '../components/FormLabel';

const Login = () => {
    return (<div className="flex flex-wrap h-2/3 justify-center p-5 items-center">
        <form className="w-full max-w-sm">
            <h1 className="text-center p-5 uppercase font-bold text-gray-800">
                Login
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

                        required
                        onChange={(e) => {

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
                        placeholder="******************"
                        autoComplete="true"
                        required

                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-around">
                <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"

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
    </div>)
}

export default Login;