import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import "../App.css";

const Layouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-140px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
