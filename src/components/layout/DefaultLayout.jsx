import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const DefaultLayout = () => {
    
    return (
        <div className="wrapper">
            <ToastContainer />
            <Outlet />
        </div>
    )
}

export default DefaultLayout;