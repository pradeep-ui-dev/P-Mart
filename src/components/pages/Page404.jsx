import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Page404 = () => {
    return(
        <>
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex flex-grow items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-7xl font-bold text-green-600">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
                    <p className="text-gray-600 mt-2">
                    The page you are looking for doesn’t exist or has been moved.
                    </p>
                    <Link to="/dashboard" className="mt-6 inline-block px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-md shadow-md hover:bg-green-700 transition"
                    >
                    Back to Home
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
            
        </>

    )
}
export default Page404;