import React, { useEffect, useState } from 'react';
import ContactForm from '../components/FormPages/ContactForm';
import EduForm from '../components/FormPages/EduForm';
import Form from '../components/Form';
import PersonalForm from '../components/FormPages/PersonalForm';
import Preview from '../components/FormPages/Preview';
import { auth, db } from '../firebase';
import { child, get, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import HandleRoutes from '../components/HandleRoutes';

const StepForm = () => {
  const navigate = useNavigate();
  const [next, setNext] = useState(false);
  const [formData, SetFormData] = useState({
    // Personal Info
    fName: '',
    lName: '',
    gender: '',
    dob: '',
    // Contact Info
    email: '',
    pno: '+91',
    address: '',
    // Education Info
    schoolName10th: '',
    mark10th: '',
    schoolName12th: '',
    mark12th: '',
    collageName: '',
    markDeg: '',
  });
  const [page, setPage] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const name = user.displayName;
        const email = user.email;
        const fname = name.split(' ')[0];
        const lname = name.split(' ').slice(1).join(' ') ?? ' ';

        const dbRef = ref(db);
        get(child(dbRef, `users/${uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const profile = snapshot.val();
              SetFormData({ ...profile });
            } else {
              SetFormData({
                ...formData,
                fName: fname ?? '',
                lName: lname ?? '',
                email: email,
              });
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        // User is signed out
        navigate(HandleRoutes.SIGNIN);
        console.log('user is logged out');
      }
    });
  }, []);

  const form = () => {
    if (page === 0) {
      return (
        <PersonalForm
          formData={formData}
          SetFormData={SetFormData}
          setNext={setNext}
        />
      );
    } else if (page === 1) {
      return (
        <ContactForm
          formData={formData}
          SetFormData={SetFormData}
          setNext={setNext}
        />
      );
    } else if (page === 2) {
      return (
        <EduForm
          formData={formData}
          SetFormData={SetFormData}
          setNext={setNext}
        />
      );
    } else if (page === 3) {
      return <Preview formData={formData} setPage={setPage} />;
    }
  };

  const onSubmit = () => {
    const uid = auth.currentUser.uid;

    set(ref(db, 'users/' + uid), {
      ...formData,
    })
      .then(() => {
        navigate(HandleRoutes.DASHBOARD);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const title = ['Personal Info', 'Contact Info', 'Education Info', 'Preview'];
  return (
    <div className='flex flex-col items-center justify-center pt-10'>
      <Form title={title[page]}>
        {form()}
        <div className='flex flex-wrap justify-around'>
          <button
            className='focus:shadow-outline rounded border-purple-200 bg-blue-400 py-2 px-4 font-bold shadow hover:bg-blue-600  hover:text-white focus:outline-none disabled:bg-gray-300 disabled:text-gray-700'
            type='button'
            disabled={page === 0}
            onClick={() => {
              setPage((page) => page - 1);
            }}
          >
            Prev
          </button>
          <button
            className='focus:shadow-outline rounded border-purple-200 bg-blue-400 py-2 px-4 font-bold shadow hover:bg-blue-600  hover:text-white focus:outline-none disabled:bg-gray-300 disabled:text-gray-700'
            type='button'
            disabled={next}
            onClick={() => {
              if (page === title.length - 1) {
                console.log(formData);
                onSubmit();
              } else {
                setPage((page) => page + 1);
              }
            }}
          >
            {page === title.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default StepForm;
