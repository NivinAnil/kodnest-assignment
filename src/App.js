import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { auth } from './firebase';
import HandleRoutes from './components/HandleRoutes';
import SignIn from './Pages/Signin';
import SignUp from './Pages/Signup';
import StepForm from './Pages/StepForm';
import Dashboard from './Pages/Dashboard';

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
  }, []);

  return (
    <div className='h-screen overflow-x-hidden'>
      <Router>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route exact path={HandleRoutes.SIGNIN} element={<SignIn />} />

          <Route exact path={HandleRoutes.SIGNUP} element={<SignUp />} />

          <Route exact path={HandleRoutes.FORM} element={<StepForm />} />
          {/* 
          <Route exact path={HandleRoutes.HOME}
            element={<Home />} /> 
          */}
          <Route exact path={HandleRoutes.DASHBOARD} element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
