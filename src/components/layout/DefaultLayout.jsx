import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const DefaultLayout = () => {
    
    return (
        <div className="wrapper flex flex-col min-h-screen">
            <ToastContainer />
            <Outlet />
        </div>
    )
}

export default DefaultLayout;