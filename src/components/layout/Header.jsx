import { useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import MegaMenu from "../shared/main-menu/MegaMenu";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate()
    const {cartItems} = useSelector((state) => state.cart)

    return(
        <header className="bg-white shadow-lg sticky top-0 right-0 z-[1100]">
            <div className="mx-auto flex items-center justify-between py-3 px-6">
                <div className="flex items-center space-x-2">
                    <a to="/dashboard" className="logo">
                        <img
                        src="https://cdn.dmart.in/images/icons/dmart_ready_logo.svg"
                        alt="Logo"
                        className="h-12"
                        />
                    </a>
                </div>
                <SearchBar />
                <div className="flex items-center space-x-4">
                    <button className="flex gap-1 items-center focus:border-transparent hover:border-transparent">
                        <span className="material-icons">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>
                        </span>
                        <span className="text-sm">Account</span>
                    </button>
                    <button onClick={() => navigate("/dashboard/cart")} className="flex gap-1 items-center focus:border-transparent hover:border-transparent">
                        <span className="material-icons">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                        </span>
                        <span className="text-sm">Cart ({cartItems.length})</span>
                    </button>
                </div>
            </div>
            <div className="flex border-t">
                <MegaMenu />
                <NavLinks />                
            </div>
        </header>
    )
}

export default Header;