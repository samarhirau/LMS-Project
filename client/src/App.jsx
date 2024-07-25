// import "./App.css";
import {Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUsPage";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
  );
}

export default App;
