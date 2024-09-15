import { Outlet } from "react-router-dom";
import Navbar from "../component/Navber";
import Footer from "../component/Footer";


const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;