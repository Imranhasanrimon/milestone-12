import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () => {
    const location = useLocation();
    const noNavbarFooter = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div>
            {noNavbarFooter || <Navbar></Navbar>}
            <div className="max-w-screen-2xl w-11/12 mx-auto">
                <Outlet></Outlet>
            </div>
            {noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;