import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div className="wrapper flex flex-col min-h-screen">
            <Outlet />
        </div>
    )
}

export default DefaultLayout;