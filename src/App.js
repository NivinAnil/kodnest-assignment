import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Header from "./components/Header";
import { auth } from "./firebase";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignIn from './Pages/Signin';
import SignUp from './Pages/Signup';
import StepForm from "./Pages/StepForm";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

    });
  }, [])


  return (
    <>

      <Router>
        <Header logout={isLoggedIn} />
        <Routes>

          <Route exact path="/signin"
            element={<SignIn />} />

          <Route exact path="/signup"
            element={<SignUp />} />

          <Route exact path="/"
            element={<Profile />} />

          <Route exact path="/form"
            element={<StepForm />} />

          <Route exact path="/home"
            element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
