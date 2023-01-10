import React from 'react'

const ErrorLabel = ({ children }) => {
    return (
        <div className='text-center text-red-400'>{children}</div>
    )
}

export default ErrorLabel