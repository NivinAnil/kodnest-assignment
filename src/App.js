import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Header from "./components/Header";
import Login from './Pages/Login';
import Register from './Pages/Signup';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>

          <Route exact path="/login"
            element={<Login />} />

          <Route exact path="/signup"
            element={<Register />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
