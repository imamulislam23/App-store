import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import Container from "../Components/Container";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
