import { useState } from "react";
import MenuList from "./MenuList";

const MegaMenu = () => {
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
    const openProductMenu = () => {
        setIsProductMenuOpen(true);
    }
    const closeProductMenu = () => {
        setIsProductMenuOpen(false);
    }
    //console.log("Mega Menu Comp")
    return(
        <>
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
                
                <MenuList handleClose={closeProductMenu} />
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
        </>
    )
}
export default MegaMenu;