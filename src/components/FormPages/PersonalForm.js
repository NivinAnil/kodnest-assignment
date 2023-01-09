import React from 'react'
import FormLabel from '../FormLabel'

const PersonalForm = ({ formData, SetFormData }) => {
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
                        onChange={(e) => { SetFormData({ ...formData, fName: e.target.value }) }}
                        required
                    />
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
                        onChange={(e) => { SetFormData({ ...formData, lName: e.target.value }) }}
                        required
                    />
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
                        onChange={(e) => { SetFormData({ ...formData, dob: e.target.value }) }}
                    />
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