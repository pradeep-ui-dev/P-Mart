import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products.slice";
import ProductCardItem from "../shared/product/ProductCardItem";

const ProductsLanding = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(
    (state) => state.products
  );
  const { categoryParam, brandParam } = useParams();

  useEffect(() => {
    dispatch(fetchProducts({
      limit: 20,
      offset: 2
    }))
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-svh flex justify-center items-center">
        Loading....
      </div>
    );
  }
  let category;
  if (products && products.length) {
    category = products.find(
      (product) => product.category === categoryParam
    );
  }

  return (
    <>
      <nav className="text-sm text-gray-500 mb-4 capitalize">
        <Link
          to="/dashboard"
          className="text-green-600 hover:underline"
        >
          Home
        </Link>
        {" / "}
        <span>Products</span>
      </nav>
      <h1 className="text-2xl font-bold mb-6 capitalize">
        {brandParam ? (
          <>{brandParam.replace("-", " ")}</>
        ) : categoryParam ? (
          <>{category.category}</>
        ) : (
          <>Products</>
        )}
      </h1>

      <div className="flex flex-wrap gap-6">
        {products?.map((product) => {
          return (
            <ProductCardItem
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    </>
  );
};
export default ProductsLanding;
