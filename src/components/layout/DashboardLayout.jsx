import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const DashboardLayout = () => {
    return (
        <>
            <Header/>
            <main className="wrapper bg-gray-100">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default DashboardLayout;