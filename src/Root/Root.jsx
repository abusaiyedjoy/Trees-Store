import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from './../Components/Navbar/Navbar';
const Root = () => {
  return (
    <div>

      <div className="h-[80px]">
        <Navbar></Navbar>
      </div>

      <div
        className=" flex justify-center items-center min-h-[calc(100vh-360px)] bg-[#DAE4E6]">
        <Outlet></Outlet>
      </div>

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
