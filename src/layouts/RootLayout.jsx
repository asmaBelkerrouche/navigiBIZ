import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const RootLayout = () => {
  return (
    <div className="root-layout flex justify-center h-screen ">
      <div className="absolute  w-[80%] top-[25px] z-10">
        <Nav />
      </div>

      <main className="w-[100%] h-fit">
        <Outlet />
      </main>

      <div className="absolute  w-full h-[50vh] mt-[250vh]">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
