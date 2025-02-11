import MenuCard from "./MenuCard";
import { MenuCatalogue } from "./MenuCatalogue";
const MenuList = ({handleClose}) => {
    //console.log("MenuList Comp")
    return(
        <div className="grid grid-cols-4 gap-4">
            {MenuCatalogue.map((card, index) => (
                <MenuCard card={card} key={index} handleClose={handleClose} />
            ))}
        </div>
    )
}

export default MenuList;