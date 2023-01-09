import React from 'react'
import DataLabel from '../DataLabel'
import FormLabel from '../FormLabel'

const Preview = ({ formData }) => {
    return (
        <>
            <div className='flex flex-row items-center justify-center'>
                <FormLabel>Personal Info</FormLabel>
            </div>
            <hr className='p-2' />
            <DataLabel label={"First Name"} data={formData.fName} />
            <DataLabel label={"Last Name"} data={formData.lName} />
            <DataLabel label={"DOB"} data={formData.dob} />
            <DataLabel label={"Gender"} data={formData.gender === 'M' ? "Male" : formData.gender === 'F' ? "Female" : formData.gender === 'F' ? "Other" : ""} />


            <div className='flex flex-row items-center justify-center'>
                <FormLabel>Contact Info</FormLabel>
            </div>
            <hr className='p-2' />
            <DataLabel label={"Phone No"} data={formData.pno} />
            <DataLabel label={"Email"} data={formData.email} />
            <DataLabel label={"Address"} data={formData.address} />



            <div className='flex flex-row items-center justify-center'>
                <FormLabel>Education Info</FormLabel>
            </div>
            <hr className='p-2' />

            <DataLabel label={"10th School Name"} data={formData.schoolName10th} />
            <DataLabel label={"10th Mark"} data={formData.mark10th} />

            <DataLabel label={"12th School Name"} data={formData.schoolName12th} />
            <DataLabel label={"12th Mark"} data={formData.mark12th} />

            <DataLabel label={"Collage Name"} data={formData.collageName} />
            <DataLabel label={"Degree Mark"} data={formData.mark12th} />
        </>
    )
}

export default Preview