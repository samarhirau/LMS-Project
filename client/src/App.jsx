// import "./App.css";
import {Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUsPage";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Login";
import CourseList from "./Pages/CourseList";
import Contact from "./Pages/Contact";
import Denied from "./Pages/Denied";
import NotRequireAuth from "./Components/Auth/NotRequireAuth";


function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/denied" element={<Denied />} />

        <Route element={<NotRequireAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
  );
}

export default App;
