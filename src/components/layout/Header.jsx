import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const Header = () => {

    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false)

    const openProductMenu = () => {
        setIsProductMenuOpen(true)
    }
    const closeProductMenu = () => {
        setIsProductMenuOpen(false)
    }

    

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
                    {/* <TriggerModalButton /> */}

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
                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                        </span>
                        <span className="text-sm">Cart</span>
                    </button>
                </div>
            </div>

            {/* <Nav /> */}
            <div className="flex border-t">
                <button className="flex items-center px-6 py-2 text-gray-700 rounded-md group hover:border-transparent w-[220px]" onClick={openProductMenu}>
                    <span>
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
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                        </svg>
                    </span>
                    <span className="text-base ml-2">All Categories</span>
                </button>
                
                <div className={`absolute left-0 top-full w-full bg-white shadow-lg p-6 pt-12 hidden1 group-hover:block border-t border-gray-200 ${isProductMenuOpen === false ? 'hidden' : ''}`}>
                
                    <button onClick={closeProductMenu} className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 focus:outline-none">✖</button>
                    
                    
                    {/* <div className="flex gap-4 flex-wrap">
                        {productsMenuData.map((productMenuData, index) => {
                            //console.log('This is data', productMenuData)
                        const {id, name, image, slug} = productMenuData;
                        return(                
                            <div
                            id={id}
                            key={index}
                            className="mb-4 border border-gray-100 rounded-md p-4 hover:shadow-md transition w-[24%] text-left flex flex-col"
                            >
                            <img
                                src={image}
                                alt={name}
                                className="w-[50px] h-[50px] mb-4"
                            />    
                            <h3 className="text-lg leading-tight font-semibold text-gray-800 mb-2">
                                <Link to={`/products/${slug}`} onClick={handleClose}>{name}</Link>
                            </h3>
                
                            <ul className="text-sm text-gray-600 space-y-1">
                                {productMenuData.subcategories.map((subcategory, productIndex) => (
                                <li key={productIndex} className="hover:text-gray-800">
                                    <Link to={`/products/${slug}/${subcategory.slug}`} onClick={handleClose}>{subcategory.name}</Link>
                                </li>
                                ))}
                            </ul>
                            </div>
                        );
                        })}
                    </div> */}

                </div>

                <NavLinks />
                
            </div>
        </header>
    )
}

export default Header;