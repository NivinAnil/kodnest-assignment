import React from "react";

const FormLabel = ({ children }) => {
    return (
        <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            id="inline-full-name"
        >{children}</label>);
}

export default FormLabel;