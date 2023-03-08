import { onAuthStateChanged } from 'firebase/auth';
import { child, get, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataLabel from '../components/DataLabel';
import Form from '../components/Form';
import FormLabel from '../components/FormLabel';
import routes from '../components/HandleRoutes';
import { auth, db } from '../firebase';

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const dbRef = ref(db);
        get(child(dbRef, `users/${uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const profile = snapshot.val();
              setFormData(profile);
            } else {
              navigate(routes.FORM);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        // User is signed out
        navigate(routes.SIGNIN);
      }
    });
  }, []);

  return (
    <div className='flex items-center justify-center p-2'>
      <Form>
        <div className='flex flex-row items-end justify-end'>
          <button
            onClick={() => {
              navigate(routes.FORM);
            }}
            className='rounded-lg bg-blue-400 p-1 px-3 text-white hover:bg-blue-300 hover:text-white'
          >
            edit
          </button>
        </div>
        <div className='flex flex-row items-center justify-center'>
          <FormLabel>Personal Info</FormLabel>
        </div>
        <hr className='p-2' />
        <DataLabel label={'First Name'} data={formData.fName} />
        <DataLabel label={'Last Name'} data={formData.lName} />
        <DataLabel label={'DOB'} data={formData.dob} />
        <DataLabel
          label={'Gender'}
          data={
            formData.gender === 'M'
              ? 'Male'
              : formData.gender === 'F'
              ? 'Female'
              : formData.gender === 'F'
              ? 'Other'
              : ''
          }
        />

        <div className='flex flex-row items-center justify-center'>
          <FormLabel>Contact Info</FormLabel>
        </div>
        <hr className='p-2' />
        <DataLabel label={'Phone No'} data={formData.pno} />
        <DataLabel label={'Email'} data={formData.email} />
        <DataLabel label={'Address'} data={formData.address} />

        <div className='flex flex-row items-center justify-center'>
          <FormLabel>Education Info</FormLabel>
        </div>
        <hr className='p-2' />

        <DataLabel label={'10th School Name'} data={formData.schoolName10th} />
        <DataLabel label={'10th Mark'} data={formData.mark10th} />

        <DataLabel label={'12th School Name'} data={formData.schoolName12th} />
        <DataLabel label={'12th Mark'} data={formData.mark12th} />

        <DataLabel label={'Collage Name'} data={formData.collageName} />
        <DataLabel label={'Degree Mark'} data={formData.mark12th} />
      </Form>
    </div>
  );
};

export default Home;
