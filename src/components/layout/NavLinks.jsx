import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProductCategories } from "../../redux/product.category.api";

const NavLinks = () => {

    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector((state) => state.productsCategories)
    
    useEffect(() => {
        dispatch(fetchProductCategories())
    }, [dispatch])
    const limitedCategories = categories.slice(0, 7);
    if (loading) return <p>Loading categories...</p>;
    if (error) return <p>Error: {error}</p>;
    //console.log(limitedCategories)
    // const LinksArr = [
    //     { href: "/products", text: "Products"},
    //     { href: "/products/package-food/snacks", text: "Snacks"},
    //     { href: "/products/home-kitchen/home-appliances", text:  "Home Appliances"},
    //     { href: "/products/home-kitchen/cookware", text:  "Cookware"},
    //     { href: "/products/sports-fitness/fitness-accessories", text:  "Fitness Accessories"},
    //     { href: "/products/electronics-appliances/smartphones", text:  "Smartphones"},
    //     { href: "/products/personal-care-beauty/skin-care", text:  "Skin Care"}
    // ]

    return(
        <div className="flex border-l">
            <ul className="flex-grow">
                {limitedCategories.map((link, index) => (
                    //console.log(link)
                    <li key={index} className="inline-flex">
                        <NavLink to={`/products/${link.slug}`} className={({isActive}) => `font-semibold py-3 px-4 text-sm ${isActive ? "text-green-600" : "text-gray-700"} hover:underline`}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavLinks;