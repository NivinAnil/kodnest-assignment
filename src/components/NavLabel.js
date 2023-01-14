import React from 'react'

const NavLabel = ({ title, children, selected, onClick }) => {
    return (
        <li className={selected && 'border bg-blue-100  border-blue-800 rounded-sm shadow-xl'}>
            <a onClick={onClick} href={`#${title}`} className="uppercase  flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100">
                {children}
                <span className="ml-3 ">{title}</span>
            </a>
        </li>
    )
}

export default NavLabel