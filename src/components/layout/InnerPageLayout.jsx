import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const InnerPageLayout = () => {
    return (
        <>
            <Header />
            <div className="innerWrapper flex flex-col flex-grow">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
export default InnerPageLayout;