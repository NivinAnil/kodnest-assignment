import React from 'react'
import NavLayout from './NavLayout'

const ProfilePage = ({ data }) => {
    return (
        <NavLayout title="Personal">
            <div className='text-3xl'>{data.fName + " " + data.lName}</div>
            <div>{data.dob}</div>
            <div> {data.gender === "M" ? "Male" : data.gender === "F" ? "Female" : data.gender === "O" ? "Other" : ""}</div>
        </NavLayout>
    )
}

export default ProfilePage