import React from 'react'
import NavLayout from './NavLayout'

// schoolName10th: "",
// mark10th: "",
// schoolName12th: "",
// mark12th: "",
// collageName: "",
// markDeg: "",

const EducationPage = ({ data }) => {
    return (
        <NavLayout title="Education">
            <div className='text-2xl uppercase'>{data.schoolName10th}</div>
            <div className='text-sm'>{data.mark10th}</div>
            <hr className='pt-5 divide-x-0 border-blue-200' />
            <div className='text-2xl uppercase'>{data.schoolName12th}</div>
            <div className='text-sm'>{data.mark12th}</div>
            <hr className='pt-5 divide-x-0 border-blue-200' />
            <div className='text-2xl uppercase'>{data.collageName}</div>
            <div className='text-sm'>{data.markDeg}</div>
            <hr className='pt-5 divide-x-0 border-blue-200' />
        </NavLayout>
    )
}

export default EducationPage