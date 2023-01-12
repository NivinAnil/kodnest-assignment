import React, { useEffect, useState } from 'react'
import FormLabel from '../FormLabel'
import validator from 'validator'
import ErrorLabel from '../ErrorLabel';

const ContactForm = ({ formData, SetFormData, setNext }) => {
    const [error, setError] = useState({});


    const [errorCheck, setErrorCheck] = useState({
        email: false,
        pno: true,
        address: true,
    })




    const validate = () => {
        return (errorCheck.pno || errorCheck.address || errorCheck.email)
    }

    useEffect(() => {
        const val = validate()
        console.log(val);
        setNext(val);
    }, [formData])

    return (
        <>
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
                        value={formData.email}
                        onChange={(e) => {
                            SetFormData({ ...formData, email: e.target.value })
                            const email = e.target.value;
                            if (!validator.isEmail(email)) {
                                setError({ ...error, email: "Provide valid first name" })
                            }
                            else {
                                setError({ ...error, email: null });
                            }
                        }}
                        disabled
                    />
                    <ErrorLabel>{error.email}</ErrorLabel>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <FormLabel>Phone No.</FormLabel>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-phone-number"
                        type="text"
                        placeholder="+91 1234567890"
                        required
                        value={formData.pno}
                        onChange={(e) => {
                            SetFormData({ ...formData, pno: e.target.value })
                            const pno = e.target.value;
                            if (!validator.isMobilePhone(pno, 'en-IN', { strictMode: true })) {
                                setError({ ...error, pno: "Provide valid Phone number" })
                                setErrorCheck({ ...errorCheck, pno: true })
                            }
                            else {
                                setError({ ...error, pno: null });
                                setErrorCheck({ ...errorCheck, pno: false })

                            }
                        }}
                    />
                    <ErrorLabel>{error.pno}</ErrorLabel>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <FormLabel>Address</FormLabel>
                    <textarea
                        className="mt-2 resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        value={formData.address}
                        onChange={(e) => {
                            SetFormData({ ...formData, address: e.target.value })
                            const address = e.target.value;
                            if (!address) {
                                setErrorCheck({ ...errorCheck, address: true })
                            }
                            else {
                                setErrorCheck({ ...errorCheck, address: false })
                            }
                        }}
                    />
                    <ErrorLabel>{error.address}</ErrorLabel>

                </div>
            </div>
        </>
    )
}

export default ContactForm