
const CategoryProductCard = ({product}) => {
    return (
        <div key={product.id} className="p-4">
            <a href={product.href} className="inline-block hover:scale-110 transition-transform duration-300">
                <img src={product.imgSrc} alt={product.productName} className="max-w-[100px]"/>
            </a>
            <h4 className="text-center p-3 pb-0 font-semibold text-sm">{product.productName}</h4>
        </div>
    )
}
export default CategoryProductCard;