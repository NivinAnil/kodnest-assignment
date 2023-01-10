import React, { useState } from 'react'
import FormLabel from '../FormLabel'
import validator from "validator";
import ErrorLabel from '../ErrorLabel';
const PersonalForm = ({ formData, SetFormData }) => {
    const [error, setError] = useState({})


    return (
        <>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>First Name</FormLabel>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-first-name"
                        type="text"
                        placeholder=""
                        value={formData.fName}
                        onChange={(e) => {
                            SetFormData({ ...formData, fName: e.target.value });
                            const name = e.target.value;
                            if (!validator.isAlpha(name, 'en-IN', { ignore: " " })) {
                                setError({ ...error, fName: "Provide valid first name" })
                            }
                            else {
                                setError({ ...error, fName: null });
                            }
                        }}
                        required
                    />
                    <ErrorLabel>{error.fName}</ErrorLabel>
                </div>

            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>Last Name</FormLabel>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-first-name"
                        type="text"
                        placeholder=""
                        value={formData.lName}
                        onChange={(e) => {
                            SetFormData({ ...formData, lName: e.target.value });
                            const name = e.target.value;

                            if (!validator.isAlpha(name, 'en-IN', { ignore: " " })) {
                                setError({ ...error, lName: "Provide valid last name" })
                            }
                            else {
                                setError({ ...error, lName: null });
                            }
                        }}
                        required
                    />
                    <ErrorLabel >{error.lName}</ErrorLabel>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>DOB</FormLabel>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="date"
                        value={formData.dob}
                        onChange={(e) => {
                            SetFormData({ ...formData, dob: e.target.value })

                            const date = e.target.value;

                            if (!validator.isDate(date)) {
                                setError({ ...error, dob: "Provide valid date" })
                            }
                            else {
                                setError({ ...error, dob: null });
                            }
                        }}
                    />
                    <ErrorLabel>{error.dob}</ErrorLabel>
                </div>

            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>Gender</FormLabel>
                </div>
                <div className="md:w-2/3"></div>
                <select
                    className="w- bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={formData.gender}
                    onChange={(e) => {
                        SetFormData({ ...formData, gender: e.target.value })
                        const gen = e.target.value;

                        if (!(gen === "M" || gen === "O" || gen === "F")) {
                            setError({ ...error, gender: "Provide valid name" });
                        }
                        else {
                            setError({ ...error, gender: null });
                        }
                    }}
                >
                    <option hidden>Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                </select>
            </div>

        </>
    )
}

export default PersonalForm