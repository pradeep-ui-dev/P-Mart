import { Link } from "react-router-dom";

const FooterLinks = ({links}) => {
    return (
        <div className="basis-1/2 flex-grow-0 max-w-1/2">
            <ul>
                {links.map((link, index) => (
                    <li key={index} className="mb-3 list-none"><Link to={link.href} className="font-semibold text-sm text-gray-700 hover:text-gray-700 hover:underline">{link.text}</Link></li>
                ))}
            </ul>
        </div>
    )
}
export default FooterLinks;