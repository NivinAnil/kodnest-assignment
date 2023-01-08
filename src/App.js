import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Header from "./components/Header";
import { auth } from "./firebase";
import Profile from "./Pages/Profile";
import SignIn from './Pages/Signin';
import SignUp from './Pages/Signup';



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
        </Routes>
      </Router>
    </>
  );
}

export default App;
