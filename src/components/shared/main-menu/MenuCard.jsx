import { Link } from "react-router-dom"

const MenuCard = ({card, handleClose}) => {
    //console.log("Manu Card Comp")
    const {id, image, name, slug} = card
    return(
        
        <div key={id} className="mb-4 border border-gray-100 rounded-md p-4 hover:shadow-md transition text-left">
            <img src={image} alt={name} className="w-[50px] h-[50px] mb-4"/>    
            <h3 className="text-lg leading-tight font-semibold text-gray-800 mb-2">
                <Link to={`/products/${slug}`} onClick={handleClose}>{name}</Link>
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
                {card.subcategories.map((subcategory) => (
                <li key={subcategory.id} className="hover:text-gray-800">
                    <Link to={`/products/${slug}/${subcategory.slug}`} onClick={handleClose}>{subcategory.name}</Link>
                </li>
                ))}
            </ul>
        </div>
    )
}
export default MenuCard