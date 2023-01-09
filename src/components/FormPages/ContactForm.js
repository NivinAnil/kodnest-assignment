import React from 'react'
import FormLabel from '../FormLabel'

const ContactForm = ({ formData, SetFormData }) => {
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
                        onChange={(e) => { SetFormData({ ...formData, email: e.target.value }) }}
                        disabled
                    />
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
                        onChange={(e) => { SetFormData({ ...formData, pno: e.target.value }) }}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <FormLabel>Address</FormLabel>
                    <textarea
                        className="mt-2 resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        value={formData.address}
                        onChange={(e) => { SetFormData({ ...formData, address: e.target.value }) }}
                    />
                </div>
            </div>
        </>
    )
}

export default ContactForm