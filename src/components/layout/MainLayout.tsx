/* eslint-disable @typescript-eslint/no-explicit-any */

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      {/* <div > */}
      <Outlet></Outlet>
      {/* </div> */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
