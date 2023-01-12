import { onAuthStateChanged } from 'firebase/auth';
import { child, get, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HandleRoutes from '../components/HandleRoutes';
import { Institute, Person, Phone } from '../components/Icons';
import NavLabel from '../components/NavLabel'
import { auth, db } from '../firebase';

const Dashboard = () => {
    const navigate = useNavigate();

    const [selectedNav, setSelectedNav] = useState({})

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

                const uid = user.uid;
                const name = user.displayName;
                const email = user.email;
                const fname = name.split(" ")[0];
                const lname = name.split(" ").slice(1).join(" ") ?? " "


                const dbRef = ref(db);
                get(child(dbRef, `users/${uid}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        const profile = snapshot.val();
                        SetFormData({ ...profile });
                    } else {
                        SetFormData({ ...formData, fName: fname ?? "", lName: lname ?? "", email: email });
                    }
                }).catch((error) => {
                    console.error(error);

                });

            } else {
                // User is signed out
                navigate(HandleRoutes.SIGNIN);
                console.log("user is logged out")
            }

        });


    }, [])
    return (
        <div className='h-[90vh] flex flex-row'>
            <aside className="w-64 " aria-label="Sidebar">
                <div className="px-3 py-4 overflow-y-auto  bg-blue-200 h-[90vh]">
                    <ul className="space-y-2">
                        <NavLabel title="Personal Data"
                            selected={selectedNav.person}
                            onClick={() => { setSelectedNav({ person: true }) }} >
                            <Person />
                        </NavLabel>
                        <NavLabel title="Contact Data"
                            selected={selectedNav.contact}
                            onClick={() => { setSelectedNav({ contact: true }) }}
                        >
                            <Phone />
                        </NavLabel>
                        <NavLabel title="Education Data"
                            selected={selectedNav.education}
                            onClick={() => { setSelectedNav({ education: true }) }}
                        >
                            <Institute />
                        </NavLabel>
                    </ul>
                </div>
            </aside>

            <div className='p-10 w-5/6'>
                <div className='text-right text-blue-400 hover:text-blue-700 cursor-pointer underline'> <div>Edit</div></div>
                {selectedNav.person && <div>
                    <h1 className='text-3xl font-semibold font-sans'>Personal Data</h1>
                    <hr className=' pt-5' />
                    <div>First Name : {formData.fName}</div>
                    <div>Last Name : {formData.lName}</div>
                    <div>Gender : {formData.gender === "M" ? "Male" : formData.gender == "F" ? "Female" : "Other"}{ }</div>
                    <div>DOB : {formData.dob}{ }</div>
                </div>}
                {selectedNav.contact && <div>
                    <h1 className='text-2xl'>Contact Data</h1>
                    <hr />

                </div>}
                {selectedNav.education && <div>
                    <h1 className='text-2xl'>Education Data</h1>
                    <hr />

                </div>}
            </div>
        </div>
    )
}

export default Dashboard