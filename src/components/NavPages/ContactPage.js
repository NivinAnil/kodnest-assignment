import React from 'react'
import NavLayout from './NavLayout'

const ContactPage = ({ data }) => {
    return (
        <NavLayout title="Contact">
            <div className='text-3xl'>{data.email}</div>
            <div>{data.pno}</div>
            <div> {data.address}</div>
        </NavLayout>
    )
}

export default ContactPage