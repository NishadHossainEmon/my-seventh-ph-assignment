import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";


const MainLayOut = () => {
  return (
    <>
     <NavBar></NavBar>
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  );
};

export default MainLayOut;