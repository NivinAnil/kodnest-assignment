import React from "react";

const FormLabel = ({ children }) => {
    return (
        <div
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            id="inline-full-name"
        >
            {children}
        </div>);
}

export default FormLabel;