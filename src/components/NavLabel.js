import React from 'react'

const NavLabel = ({ title, children, selected, onClick }) => {
    return (
        <li onClick={onClick} className={selected ? 'w-auto  bg-blue-100 rounded-xl shadow-xl' : 'rounded-xl hover:bg-gray-100'}>
            <a href={`#${title}`} className="w-max uppercase  flex items-center p-2 text-base font-normal text-gray-900">
                {children}
                <span className="ml-3 collapse md:visible">{title}</span>
            </a>
        </li>
    )
}

export default NavLabel