import React from "react";
// import { Navigate } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import Contact from "../components/contact";
import Home from "../components/Home";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

const Root = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Root;
