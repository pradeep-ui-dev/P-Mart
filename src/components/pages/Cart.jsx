import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateQuantity } from "../../redux/cartSlice";
import Button from "../shared/form/Button";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate()
    const {cartItems, totalQuantity, totalPrice} = useSelector((state) => state.cart)
    //console.log(`Total Quantity: ${totalQuantity}, Total Price: ${totalPrice}`)

    // const total = cartItems.reduce(
    //     (acc, item) => {
    //         acc.totalQuantity += item.quantity;
    //         acc.totalPrice += item.price * item.quantity;
    //         return acc
    //     }, {totalQuantity: 0, totalPrice: 0})
    
    //console.log(total.totalQuantity, total.totalPrice)
    
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(
            removeFromCart(id));
      };
    
    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
          dispatch(
            updateQuantity({ id, quantity }));
        }
    };
    const minValue = 10;

    return(
        <div className="bg-gray-100 p-6 flex-grow">
            <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold border-b pb-4 flex justify-between items-center">My Cart 
                    {(cartItems.length > 0) && <button className=" bg-green-600 text-base p-3 text-white py-2 mt-4 rounded-md hover:bg-green-700 transition"
                        onClick={() => {
                            dispatch(
                                clearCart()
                            )
                        }}
                    >
                        Clear Cart
                    </button>}
                    
                </h1>

                {cartItems.length === 0 ? (
                <p className="text-center text-gray-600 mt-6">Your cart is empty.</p>
                ) : (
                <div className="mt-6">
                    {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-b py-4"
                    >
                        <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1 ml-4">
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        <p className="text-gray-600">₹{item.price}</p>
                        <div className="mt-2 flex items-center">
                            <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="px-3 py-1 border rounded-l bg-gray-200 hover:bg-gray-300"
                            >
                            -
                            </button>
                            <span className="px-4 py-1 border">{item.quantity}</span>
                            <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="px-3 py-1 border rounded-r bg-gray-200 hover:bg-gray-300"
                            >
                            +
                            </button>
                        </div>
                        </div>
                        <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 hover:text-red-700"
                        >
                        Remove
                        </button>
                    </div>
                    ))}
                </div>
                )}

                {cartItems.length > 0 && (
                
                <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Order Summary</h2>
                    <p className="text-gray-700 mt-2">
                    Total Items:{" "}
                    <span className="font-semibold">
                        {/* {console.log(cartItems)} */}
                        {totalQuantity}
                    </span>
                    </p>
                    <p className="text-gray-700 mt-2">
                    Total Price:{" "}
                    <span className="font-semibold">
                        ₹ {(totalPrice).toFixed(2)}
                    </span>
                    </p>
                    {totalPrice < minValue && <p className="text-gray-700 mt-2">
                    Minimum order value should be:{" "} 
                    <span className="font-semibold">
                        ₹ {minValue}
                    </span>
                    </p>}
                    
                    <Button disabled={totalPrice < minValue} type="button" 
                    onClick={() => {
                        totalPrice > minValue && navigate('/checkout')
                    }} 
                    className={`w-full bg-green-600 text-white py-2 mt-4 rounded-md hover:bg-green-700 transition ${totalPrice < minValue ? ('opacity-60') : (<></>)}`} icon = "" variant="primary" btnText="Proceed to Checkout" />
                </div>
                )}
            </div>
        </div>
    )
}

export default Cart;