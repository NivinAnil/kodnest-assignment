import React, { useEffect, useState } from 'react';
import FormLabel from '../FormLabel';
import validator from 'validator';
import ErrorLabel from '../ErrorLabel';
const PersonalForm = ({ formData, SetFormData, setNext }) => {
  const [error, setError] = useState({});

  const [errorCheck, setErrorCheck] = useState({
    fName: true,
    lName: true,
    dob: true,
    gender: true,
  });

  const validate = () => {
    if (!validator.isAlpha(formData.fName, 'en-IN', { ignore: ' ' })) {
      setErrorCheck({ ...errorCheck, fName: true });
      setError({ ...error, fName: 'Provide valid first name' });
    } else {
      setErrorCheck({ ...errorCheck, fName: false });
      setError({ ...error, fName: null });
    }
    if (!validator.isAlpha(formData.lName, 'en-IN', { ignore: ' ' })) {
      setErrorCheck({ ...errorCheck, lName: true });
      setError({ ...error, lName: 'Provide valid Last name' });
    } else {
      setErrorCheck({ ...errorCheck, lName: false });
      setError({ ...error, lName: null });
    }
    if (!validator.isDate(formData.dob) || formData.dob === '') {
      setErrorCheck({ ...errorCheck, dob: true });
      setError({ ...error, dob: "DOB can't be empty" });
    } else {
      setErrorCheck({ ...errorCheck, dob: false });
      setError({ ...error, dob: null });
    }
    if (formData.gender === '') {
      setErrorCheck({ ...errorCheck, gender: true });
      setError({ ...error, gender: "Gender can't be empty" });
    } else {
      setErrorCheck({ ...errorCheck, gender: false });
      setError({ ...error, gender: null });
    }

    return error.fName || error.lName || error.dob || error.gender;
  };

  useEffect(() => {
    setNext(validate());
  }, [formData]);

  return (
    <>
      <div className='mb-6 md:flex md:items-center'>
        <div className='md:w-1/3'>
          <FormLabel>First Name</FormLabel>
        </div>
        <div className='md:w-2/3'>
          <input
            className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
            id='inline-first-name'
            type='text'
            placeholder=''
            value={formData.fName}
            onChange={(e) => {
              SetFormData({ ...formData, fName: e.target.value });
              const name = e.target.value;
              if (!validator.isAlpha(name, 'en-IN', { ignore: ' ' })) {
                setError({ ...error, fName: 'Provide valid first name' });
              } else {
                setError({ ...error, fName: null });
              }
            }}
            required
          />
          <ErrorLabel>{error.fName}</ErrorLabel>
        </div>
      </div>
      <div className='mb-6 md:flex md:items-center'>
        <div className='md:w-1/3'>
          <FormLabel>Last Name</FormLabel>
        </div>
        <div className='md:w-2/3'>
          <input
            className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
            id='inline-first-name'
            type='text'
            placeholder=''
            value={formData.lName}
            onChange={(e) => {
              SetFormData({ ...formData, lName: e.target.value });
              const name = e.target.value;

              if (!validator.isAlpha(name, 'en-IN', { ignore: ' ' })) {
                setError({ ...error, lName: 'Provide valid last name' });
              } else {
                setError({ ...error, lName: null });
              }
            }}
            required
          />
          <ErrorLabel>{error.lName}</ErrorLabel>
        </div>
      </div>
      <div className='mb-6 md:flex md:items-center'>
        <div className='md:w-1/3'>
          <FormLabel>DOB</FormLabel>
        </div>
        <div className='md:w-2/3'>
          <input
            className='w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
            type='date'
            value={formData.dob}
            onChange={(e) => {
              SetFormData({ ...formData, dob: e.target.value });

              const date = e.target.value;

              if (!validator.isDate(date)) {
                setError({ ...error, dob: 'Provide valid date' });
              } else {
                setError({ ...error, dob: null });
              }
            }}
          />
          <ErrorLabel>{error.dob}</ErrorLabel>
        </div>
      </div>
      <div className='mb-6 md:flex md:items-center'>
        <div className='md:w-1/3'>
          <FormLabel>Gender</FormLabel>
        </div>
        <div className='md:w-2/3'></div>
        <select
          className=' w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none'
          value={formData.gender}
          onChange={(e) => {
            SetFormData({ ...formData, gender: e.target.value });
            const gen = e.target.value;

            if (!(gen === 'M' || gen === 'O' || gen === 'F')) {
              setError({ ...error, gender: 'Provide valid name' });
            } else {
              setError({ ...error, gender: null });
            }
          }}
        >
          <option hidden>Gender</option>
          <option value='M'>Male</option>
          <option value='F'>Female</option>
          <option value='O'>Other</option>
        </select>
      </div>
    </>
  );
};

export default PersonalForm;
