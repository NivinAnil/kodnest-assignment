import { onAuthStateChanged } from 'firebase/auth';
import { child, get, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import routes from '../components/HandleRoutes';
import { Institute, Person, Phone } from '../components/Icons';
import NavLabel from '../components/NavLabel'
import ProfilePage from '../components/NavPages/ProfilePage';
import ContactPage from '../components/NavPages/ContactPage';
import { auth, db } from '../firebase';
import EducationPage from '../components/NavPages/EducationPage';

const Dashboard = () => {
    const navigate = useNavigate();

    const [selectedNav, setSelectedNav] = useState({ person: true })

    const [formData, SetFormData] = useState({
        // Personal Info
        fName: "",
        lName: "",
        gender: "",
        dob: "",
        // Contact Info
        email: "",
        pno: "+91",
        address: "",
        // Education Info
        schoolName10th: "",
        mark10th: "",
        schoolName12th: "",
        mark12th: "",
        collageName: "",
        markDeg: "",
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                const uid = user.uid;
                const dbRef = ref(db);
                get(child(dbRef, `users/${uid}`)).then((snapshot) => {
                    console.log({ snapshot })
                    if (snapshot.exists()) {
                        const profile = snapshot.val();
                        SetFormData({ ...profile });
                    } else {
                        navigate(routes.FORM)
                    }
                }).catch((error) => {
                    console.error(error);

                });

            } else {
                // User is signed out

                navigate(routes.SIGNIN);
                console.log("user is logged out")
            }

        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className='h-[89.9vh] flex flex-row'>
                <aside className="w-1/6 top-0 md:w-[25%]" aria-label="Sidebar">
                    <div className="px-3 py-4  bg-blue-200 h-full">
                        <h1 className='text-center uppercase'>Details</h1>
                        <hr className='border-blue-500 font-semibold pb-2' />
                        <ul className="space-y-2 text-left">
                            <NavLabel title="Personal"
                                selected={selectedNav.person}
                                onClick={() => { setSelectedNav({ person: true }) }} >
                                <Person />
                            </NavLabel>
                            <NavLabel title="Contact"
                                selected={selectedNav.contact}
                                onClick={() => { setSelectedNav({ contact: true }) }}
                            >
                                <Phone />
                            </NavLabel>
                            <NavLabel title="Education"
                                selected={selectedNav.education}
                                onClick={() => { setSelectedNav({ education: true }) }}
                            >
                                <Institute />
                            </NavLabel>
                        </ul>
                    </div>
                </aside>

                <div className='p-10 xl:m-20 m-2 md:m-5 w-5/6 bg-blue-100  shadow-xl rounded-xl'>
                    <div className=' text-right text-blue-400 hover:text-blue-700 cursor-pointer underline'> <Link to="/form">Edit</Link></div>
                    {selectedNav.person && <ProfilePage data={formData} />}
                    {selectedNav.contact && <ContactPage data={formData} />}
                    {selectedNav.education && <EducationPage data={formData} />}
                </div>
            </div>

        </>
    )
}

export default Dashboard