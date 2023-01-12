import React from 'react'

const NavLabel = ({ title, children, selected, onClick }) => {
    return (
        <li className={selected && 'border border-gray-400 shadow-xl'}>
            <a onClick={onClick} href={`#${title}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                {children}
                <span className="ml-3">{title}</span>
            </a>
        </li>
    )
}

export default NavLabel