import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Header from "./components/Header";
import Profile from "./Pages/Profile";
import SignIn from './Pages/Signin';
import SignUp from './Pages/Signup';

function App() {
  return (
    <>
      <Header />
      <Router>
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
