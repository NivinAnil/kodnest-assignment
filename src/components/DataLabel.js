import React from 'react'
import FormLabel from './FormLabel'

const DataLabel = ({ label, data }) => {
    return (
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
                <FormLabel>{label}</FormLabel>
            </div>
            <div className="md:w-2/3">
                <h1>{data}</h1>
            </div>
        </div>
    )
}

export default DataLabel