import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Policy from "./pages/Policy/Policy";
import Pagenotfound from "./pages/Pagenotfound/Pagenotfound";
import Register from "./pages/Auth/Register";
import {ToastContainer} from 'react-toastify';
import Login from './pages/Auth/Login'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
