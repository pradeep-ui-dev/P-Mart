import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div className="wrapper">
            <Outlet />
        </div>
    )
}

export default DefaultLayout;