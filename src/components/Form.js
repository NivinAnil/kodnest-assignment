import React from 'react'


const Form = (props) => {

    return (
        <div className="flex flex-wrap w-screen sm:w-screen justify-center py-5 items-center rounded-xl bg-gray-50 shadow-xl shadow-gray-400 md:w-[500px] xl:w-[500px]">
            <form className="w-full max-w-sm">
                <h1 className="text-center p-5 uppercase font-bold text-gray-800">
                    {props.title}
                </h1>
                {props.children}
            </form>
        </div>
    )
}

export default Form;