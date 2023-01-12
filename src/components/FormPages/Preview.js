import React, { useEffect, useState } from 'react'
import DataLabel from '../DataLabel'
import FormLabel from '../FormLabel'
import validator from 'validator'
const Preview = ({ formData, setPage }) => {


    const validateForm = () => {
        if (formData.fName === "" || !validator.isAlpha(formData.fName, 'en-IN', { ignore: " " })) {
            alert("Provide valid first Name")
            setPage(0)
        }
        else if (formData.lName === "" || !validator.isAlpha(formData.lName, 'en-IN', { ignore: " " })) {
            alert("Provide valid Last Name")
            setPage(0)
        }
        else if (formData.dob === "") {
            alert("DOB can't be Empty")
            setPage(0)
        }
        else if (formData.gender === "") {
            alert("Gender can't be Empty")
            setPage(0)
        }
        else if (formData.pno === "" || !validator.isMobilePhone(formData.pno)) {
            alert("Provide valid Phone Number")
            setPage(1)
        }
        else if (formData.address === "") {
            alert("Address can't be Empty")
            setPage(1)
        }
        else if (formData.schoolName10th === "") {
            alert("10th school Name can't be Empty")
            setPage(2)
        }
        else if (formData.mark10th === "" || !validator.isNumeric(formData.mark10th)) {
            alert("Provide valid 10th Percentage")
            setPage(2)
        }
        else if (formData.schoolName12th === "") {
            alert("12th school Name can't be Empty")
            setPage(2)
        }
        else if (formData.mark12th === "" || !validator.isNumeric(formData.mark12th)) {
            alert("Provide valid 12th Percentage")
            setPage(2)
        }
        else if (formData.collageName === "") {
            alert("Collage Name can't be Empty")
            setPage(2)
        }
        else if (formData.markDeg === "" || !validator.isNumeric(formData.markDeg)) {
            alert("Provide valid 12th Percentage")
            setPage(2)
        }

    }

    // useEffect(() => {
    //     validateForm();
    // }, [])


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

            <DataLabel label="10th School Name" data={formData.schoolName10th} />
            <DataLabel label="10th Mark" data={formData.mark10th} />

            <DataLabel label="12th School Name" data={formData.schoolName12th} />
            <DataLabel label="12th Mark" data={formData.mark12th} />

            <DataLabel label="Collage Name" data={formData.collageName} />
            <DataLabel label="Degree Mark" data={formData.markDeg} />
        </>
    )
}

export default Preview