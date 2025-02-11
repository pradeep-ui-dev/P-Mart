import { useDispatch, useSelector } from "react-redux";
import { CartIcon } from "../Icons";
import Button from "../form/Button";
import cartSlice, { removeFromCart, updateQuantity } from "../../../redux/cartSlice";

const ProductCardItem = ({product}) => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const existingItem = cartItems.find((item) => item.id === product.id)
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            cartSlice.actions.addToCart({
                id: product.id, name: product.title, image: product.thumbnail, price: product.price
            })
        )
    }

    return (
        <div
            key={product.id}
            className="bg-white min-w-[280px] max-w-[280px] rounded-lg border border-gray-300 overflow-hidden shadow-lg p-4"
            >
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
            />
            <p className="mt-2 text-base">
                Brand: {product.brand}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">
                Price: ₹ {product.price}
                </div>
                <div className="font-semibold text-right">
                <span className="bg-green-500 rounded-md text-white py-1 px-2">
                    ₹ {product.discountPercentage}%
                    OFF
                </span>
                </div>
            </div>

            <p className="mt-2 text-base">
                {product.title}
            </p>
            <p
                className="mt-2 min-h-[38px] text-gray-700 text-sm overflow-hidden leading-tight"
                style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                }}
                title={product.description}
            >
                {product.description}
            </p>

            <div className="mt-2">
                <span className="block font-semibold leading-3">
                Dimensions:
                </span>
                <span className="text-xs">
                Width:{product.dimensions.width};
                Height: {product.dimensions.height};
                Depth: {product.dimensions.depth}
                </span>
            </div>
            <div className="mt-2 flex justify-between text-black gap-2 text-xs">
                <div>
                {product.warrantyInformation}
                </div>
                <div>{product.returnPolicy}</div>
            </div>
            <p className="mt-2 text-xs text-gray-500">
                Rating:{" "}
                <span className="text-black">
                {product.rating}
                </span>
            </p>
            <p className="mt-2 text-xs text-gray-500">
                Shipping:{" "}
                <span className="text-black">
                {product.shippingInformation}
                </span>
            </p>
            <p className="mt-2 text-xs text-gray-500">
                Availability:{" "}
                <span className="text-black">
                {product.availabilityStatus}
                </span>
            </p>
            <div>
                {existingItem ? 
                (
                <div className="flex items-center justify-between mt-2 pt-1.5 space-x-2">
                    {/* {console.log(existingItem)} */}
                    <div className="border border-gray-400 rounded flex text-center items-center">
                        <button 
                            onClick={() => existingItem.quantity > 1 && dispatch(updateQuantity({ id: product.id, quantity: existingItem.quantity - 1 }))} 
                            className="px-2 py-1 bg-red-500 text-white rounded w-8"
                        >
                            -
                        </button>
                        <span className="w-10">{existingItem.quantity}</span>
                        <button 
                            onClick={() => dispatch(updateQuantity({ id: product.id, quantity: existingItem.quantity + 1 }))} 
                            className="px-2 py-1 bg-green-500 text-white rounded w-8"
                        >
                            +
                        </button>
                    </div>
                    <button 
                        onClick={() => dispatch(removeFromCart(product.id))} 
                        className="px-3 py-1 bg-gray-500 text-white rounded"
                    >
                        Remove
                    </button>
                </div>) : 
                <Button
                    type="submit"
                    btnText="Add to Cart"
                    onClick={handleAddToCart}
                    icon={<CartIcon />}
                    variant="success"
                    className={`mt-2 w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-1.5 rounded-md transition duration-200`}
                />}
                
                
                <div>

                </div>
            </div>
        </div>
    )
}

export default ProductCardItem;