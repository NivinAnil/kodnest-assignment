import React from 'react'

const NavLayout = ({ title, children }) => {
  return (
    <div>
      <h1 className='text-3xl font-semibold font-sans'>{title}</h1>
      <hr className=' pt-5 divide-x-8 border-blue-500' />
      <div className='pl-10'>
        {children}
      </div>
    </div>
  )
}

export default NavLayout