import React from 'react'
import FormLabel from '../FormLabel'

const EduForm = ({ formData, SetFormData }) => {
    return (
        <>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>10th School Name</FormLabel>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-first-name"
                        type="text"
                        placeholder=""
                        value={formData.schoolName10th}
                        onChange={(e) => { SetFormData({ ...formData, schoolName10th: e.target.value }) }}
                        required
                    />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>10th percentage</FormLabel>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-first-name"
                        type="text"
                        placeholder=""
                        value={formData.mark10th}
                        onChange={(e) => { SetFormData({ ...formData, mark10th: e.target.value }) }}
                        required
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>12th School Name</FormLabel>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-first-name"
                        type="text"
                        placeholder=""
                        value={formData.mark12th}
                        onChange={(e) => { SetFormData({ ...formData, mark12th: e.target.value }) }}
                        required
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>12th percentage</FormLabel>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-first-name"
                        type="text"
                        placeholder=""
                        value={formData.schoolName12th}
                        onChange={(e) => { SetFormData({ ...formData, schoolName12th: e.target.value }) }}
                        required
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>Collage Name</FormLabel>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-first-name"
                        type="text"
                        placeholder=""
                        value={formData.collageName}
                        onChange={(e) => { SetFormData({ ...formData, collageName: e.target.value }) }}
                        required
                    />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>Degree Marks</FormLabel>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-first-name"
                        type="text"
                        placeholder=""
                        value={formData.markDeg}
                        onChange={(e) => { SetFormData({ ...formData, markDeg: e.target.value }) }}
                        required
                    />
                </div>
            </div>


        </>
    )
}

export default EduForm


