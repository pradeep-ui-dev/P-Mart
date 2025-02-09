import { NavLink } from "react-router-dom";

const NavLinks = () => {

    const LinksArr = [
        { href: "/products", text: "Products"},
        { href: "/products/package-food/snacks", text: "Snacks"},
        { href: "/products/home-kitchen/home-appliances", text:  "Home Appliances"},
        { href: "/products/home-kitchen/cookware", text:  "Cookware"},
        { href: "/products/sports-fitness/fitness-accessories", text:  "Fitness Accessories"},
        { href: "/products/electronics-appliances/smartphones", text:  "Smartphones"},
        { href: "/products/personal-care-beauty/skin-care", text:  "Skin Care"}
    ]

    return(
        <div className="flex border-l">
            <ul className="flex-grow">
                {LinksArr.map((link, index) => (
                    <li key={index} className="inline-flex">
                        <NavLink to={link.href} className={({isActive}) => `font-semibold py-3 px-4 text-sm ${isActive ? "text-green-600" : "text-gray-700"} hover:underline`}>{link.text}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavLinks;