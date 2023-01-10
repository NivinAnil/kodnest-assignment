import React, { useEffect, useState } from "react";
import FormLabel from "../components/FormLabel";
import validator from "validator";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ref, set, get, child } from "firebase/database";
import HandleRoutes from "../components/HandleRoutes";
import Form from "../components/Form";
import Loading from "../components/Loading";

const Profile = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [profileForm, setProfileForm] = useState(
        {
            fName: "",
            lName: "",
            email: "",
            pno: "+91",
            dob: "",
            gender: "",
            address: ""
        }
    )

    const [errorMessage, setErrorMessage] = useState(null);


    useEffect(() => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const name = user.displayName;
                const email = user.email;
                const fname = name.split(" ")[0];
                const lname = name.split(" ").slice(1).join(" ")


                const dbRef = ref(db);
                get(child(dbRef, `users/${uid}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        const profile = snapshot.val();
                        setProfileForm({ ...profile });
                    } else {
                        setProfileForm({ ...profileForm, fName: fname ?? "", lName: lname ?? "", email: email });
                    }
                }).catch((error) => {
                    console.error(error);
                    setLoading(false)
                });

            } else {
                // User is signed out
                navigate(HandleRoutes.SIGNIN);
                console.log("user is logged out")
            }
            setLoading(false)
        });
    }, [])

    const validateProfile = () => {

        const phNoOptions = { strictMode: true }


        if (!validator.isAlpha(profileForm.fName, 'en-IN', { ignore: " " }))
            return [false, "Invalid First Name"];
        if (!validator.isAlpha(profileForm.lName, 'en-IN', { ignore: " " }))
            return [false, "Invalid Last Name"];
        if (!validator.isEmail(profileForm.email))
            return [false, "Invalid Email"];
        if (!validator.isMobilePhone(profileForm.pno, 'any', phNoOptions))
            return [false, "Invalid Phone Number"];
        if (!validator.isDate(profileForm.dob))
            return [false, "Invalid DOB"];
        if (profileForm.gender === "")
            return [false, "Invalid Gender"];

        return [true, "Valid"];
    }

    const handleSaveForm = async () => {
        const [valid, message] = validateProfile();
        if (valid) {
            console.log(profileForm);
            setErrorMessage("")

            // saving data to firebase

            const uid = auth.currentUser.uid;

            set(ref(db, 'users/' + uid), {
                ...profileForm
            });

            // try {
            //     const docRef = await addDoc(collection(db, `users/${uid}/profile`,), {
            //         ...profileForm
            //     });
            //     console.log("Document written with ID: ", docRef.id);
            // } catch (e) {
            //     console.error("Error adding document: ", e);
            // }

        }

        else {
            setErrorMessage(message)
            console.log({ error: message });
        }

    }

    return (<>
        {
            loading ?
                <div className="h-screen flex flex-col items-center justify-center">
                    <Loading />
                </div>
                :
                <div className=" py-1 flex flex-col items-center justify-center">
                    <Form title="Profile">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <FormLabel>First Name</FormLabel>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-first-name"
                                    type="text"
                                    placeholder=""
                                    value={profileForm.fName}
                                    onChange={(e) => { setProfileForm({ ...profileForm, fName: e.target.value }) }}
                                    required
                                />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <FormLabel>Last Name</FormLabel>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-last-name"
                                    type="text"
                                    placeholder=""
                                    value={profileForm.lName}
                                    onChange={(e) => { setProfileForm({ ...profileForm, lName: e.target.value }) }}
                                />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <FormLabel>Email</FormLabel>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="text"
                                    placeholder="abc@email.com"
                                    required
                                    value={profileForm.email}
                                    onChange={(e) => { setProfileForm({ ...profileForm, email: e.target.value }) }}
                                    disabled
                                />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <FormLabel>Phone No.</FormLabel>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-phone-number"
                                    type="text"
                                    placeholder="+91 1234567890"
                                    required
                                    value={profileForm.pno}
                                    onChange={(e) => { setProfileForm({ ...profileForm, pno: e.target.value }) }}
                                />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <FormLabel>DOB</FormLabel>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    type="date"
                                    value={profileForm.dob}
                                    onChange={(e) => { setProfileForm({ ...profileForm, dob: e.target.value }) }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <FormLabel>Gender</FormLabel>
                            </div>
                            <div className="md:w-2/3"></div>
                            <select
                                className="w- bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                value={profileForm.gender}
                                onChange={(e) => {
                                    setProfileForm({ ...profileForm, gender: e.target.value })
                                }}
                            >
                                <option hidden>Gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="O">Other</option>
                            </select>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <FormLabel>Address</FormLabel>
                                <textarea
                                    className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={profileForm.address}
                                    onChange={(e) => { setProfileForm({ ...profileForm, address: e.target.value }) }}
                                />
                            </div>
                        </div>
                        <div className="m-2">
                            <p className="text-center uppercase text-sm font-semibold text-red-500">{errorMessage}</p>
                        </div>
                        <div className="flex flex-wrap justify-around">
                            <button
                                className="shadow bg-gray-300 border-purple-200 hover:bg-gray-800 hover:text-white focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded"
                                type="button"
                                onClick={() => {
                                    handleSaveForm();
                                }}
                            >
                                Save
                            </button>
                        </div>
                    </Form>
                </div>

        }
    </>
    );
}

export default Profile;