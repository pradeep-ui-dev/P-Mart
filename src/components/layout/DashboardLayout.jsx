import { Outlet } from "react-router-dom";
import Header from "./Header";


const DashboardLayout = () => {
    return (
        <>
            <Header/>
            <main className="wrapper">
                <Outlet />
            </main>
        </>
    )
}

export default DashboardLayout;