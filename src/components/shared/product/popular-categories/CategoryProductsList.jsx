import { v4 as uuidv4 } from "uuid";
import CategoryProductCard from "./CategoryProductCard";
const CategoryProductsList = () => {
    const categoryProducts = [
        { id: uuidv4(), href: "/products/dairy-beverages", imgSrc: "https://cdn.dmart.in/images/rwd/banners/cards/1may23-popularcat-dairy.png", productName: "Dairy"},
        { id: uuidv4(), href: "#", imgSrc: "https://cdn.dmart.in/images/rwd/banners/cards/12sept23-popularcat-tea1.png", productName: "Tea"},
        { id: uuidv4(), href: "#", imgSrc: "https://cdn.dmart.in/images/rwd/banners/cards/12sept23-popularcat-softdrinks.png", productName: "Soft Drinks"},
        { id: uuidv4(), href: "#", imgSrc: "https://cdn.dmart.in/images/rwd/banners/cards/1oct24-popularcat-cleaners.png", productName: "Cleaners"},
        { id: uuidv4(), href: "#", imgSrc: "https://cdn.dmart.in/images/rwd/banners/cards/12jan24-popularcat-soaps.png", productName: "Bath Soaps"},
        { id: uuidv4(), href: "#", imgSrc: "https://cdn.dmart.in/images/rwd/banners/cards/12sept23-popularcat-toothpaste.png", productName: "Toothpaste"},
        { id: uuidv4(), href: "#", imgSrc: "https://cdn.dmart.in/images/rwd/banners/cards/12jan24-popularcat-shampoos.png", productName: "Shampoos"},
        { id: uuidv4(), href: "#", imgSrc: "https://cdn.dmart.in/images/rwd/banners/cards/16jan23-popularcat-poojaneeds.png", productName: "Pooja Needs"},
    ];

    return(
        <div className="flex flex-wrap -ml-4">
            {categoryProducts.map((product) => (
                <CategoryProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}
export default CategoryProductsList;