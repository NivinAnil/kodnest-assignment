import React, { useEffect, useState } from 'react';
import FormLabel from '../FormLabel';
import validator from 'validator';
import ErrorLabel from '../ErrorLabel';

const EduForm = ({ formData, SetFormData, setNext }) => {
    const [error, setError] = useState({})

    const [errorCheck, setErrorCheck] = useState({
        schoolName10th: false,
        schoolName12th: false,
        collageName: false,
        mark10th: false,
        mark12th: false,
        markDeg: false
    })




    const validate = () => {
        return (errorCheck.schoolName10th ||
            errorCheck.schoolName12th ||
            errorCheck.collageName ||
            errorCheck.mark10th ||
            errorCheck.mark12th ||
            errorCheck.markDeg)
    }

    useEffect(() => {
        const val = validate()
        console.log(val);
        setNext(val);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData])


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
                        onChange={(e) => {
                            SetFormData({ ...formData, schoolName10th: e.target.value })
                            const name = e.target.value;
                            if (!name) {
                                setError({ ...error, schoolName10th: "Can't keep this empty" })
                                setErrorCheck({ ...errorCheck, schoolName10th: true })
                            }
                            else {
                                setError({ ...error, schoolName10th: null })
                                setErrorCheck({ ...errorCheck, schoolName10th: false })
                            }
                        }}
                        required
                    />
                    <ErrorLabel>{error.schoolName10th}</ErrorLabel>

                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>10th percentage</FormLabel>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="marks"
                        type="text"
                        placeholder=""
                        value={formData.mark10th}
                        onChange={(e) => {
                            SetFormData({
                                ...formData, mark10th: e.target.value
                            })

                            const mark = e.target.value;
                            if (!validator.isNumeric(mark) || mark < 0) {
                                setError({ ...error, mark10th: "Provide valid percentage" })
                                setErrorCheck({ ...errorCheck, mark10th: true })
                            }
                            else {
                                setError({ ...error, mark10th: null });
                                setErrorCheck({ ...errorCheck, mark10th: false })

                            }
                        }}
                        required
                    />
                    <ErrorLabel>{error.mark10th}</ErrorLabel>
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
                        value={formData.schoolName12th}
                        onChange={(e) => {
                            SetFormData({ ...formData, schoolName12th: e.target.value })
                            const name = e.target.value;
                            if (!name) {
                                setError({ ...error, schoolName12th: "Can't keep this empty" })
                                setErrorCheck({ ...errorCheck, schoolName10th: true })
                            }
                            else {
                                setError({ ...error, schoolName12th: null })
                                setErrorCheck({ ...errorCheck, schoolName10th: false })
                            }
                        }}
                        required
                    />
                    <ErrorLabel>{error.schoolName12th}</ErrorLabel>

                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>12th Percentage</FormLabel>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-first-name"
                        type="text"
                        placeholder=""
                        value={formData.mark12th}
                        onChange={(e) => {
                            SetFormData({
                                ...formData, mark12th: e.target.value
                            })
                            const mark = e.target.value;
                            if (!validator.isNumeric(mark) || mark < 0) {
                                setError({ ...error, mark12th: "Provide valid percentage" })
                                setErrorCheck({ ...errorCheck, mark12th: true })

                            }
                            else {
                                setError({ ...error, mark12th: null });
                                setErrorCheck({ ...errorCheck, mark12th: false })

                            }
                        }}

                        required
                    />
                    <ErrorLabel>{error.mark12th}</ErrorLabel>

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
                        onChange={(e) => {
                            SetFormData({ ...formData, collageName: e.target.value })
                            const name = e.target.value;
                            if (!name) {
                                setError({ ...error, collageName: "Can't keep this empty" })
                                setErrorCheck({ ...errorCheck, schoolName10th: true })
                            }
                            else {
                                setError({ ...error, collageName: null })
                                setErrorCheck({ ...errorCheck, schoolName10th: false })
                            }
                        }}
                        required
                    />
                    <ErrorLabel>{error.collageName}</ErrorLabel>

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
                        onChange={(e) => {
                            SetFormData({ ...formData, markDeg: e.target.value })
                            const mark = e.target.value;
                            if (!validator.isNumeric(mark) || mark < 0) {
                                setError({ ...error, markDeg: "Provide valid percentage" })
                                setErrorCheck({ ...errorCheck, markDeg: true })

                            }
                            else {
                                setError({ ...error, markDeg: null });
                                setErrorCheck({ ...errorCheck, markDeg: false })

                            }
                        }}
                        required
                    />
                    <ErrorLabel>{error.markDeg}</ErrorLabel>
                </div>
            </div>


        </>
    )
}

export default EduForm


