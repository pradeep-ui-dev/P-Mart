import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/product.api";
import { useEffect } from "react";
import ProductCardItem from "./ProductCardItem";

const ProductList = () => {

    const dispatch = useDispatch();
    const { products, loading } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts({
        limit: 5,
        offset: 2
        }))
    }, []);
    console.log(products)
    if (loading) {
        return (
          <div className="w-full min-h-svh flex justify-center items-center">
            Loading....
          </div>
        );
      }
    return (
        <section className="p-6">
            <div className="bg-cyan-50 p-6 border-[0.5px] border-gray-300 rounded-lg">
            <div className="flex justify-between mb-4">
                <h3 className="font-semibold text-base">Premium Picks</h3>
                <a href="/products" className="text-green-700 underline font-semibold text-base hover:text-green-700 hover:no-underline">View All</a></div>
                <div className="w-full whitespace-nowrap">
                    <div className="overflow-auto flex gap-6">
                            {products.map((product) => {
                                return (
                                    <ProductCardItem key={product.id} product={product} />
                                );
                            })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductList;