import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCardItem from "./ProductCardItem";
import BreadCrumbsProduct from "./BreadCrumbs";

const ProductByCategory = () => {
  const { categoryParam } = useParams();
  const {state} = useLocation();
  //console.log(categoryParam, state)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/category/${categoryParam}?limit=0`
      );
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    };
    fetchData();
  }, [categoryParam]);

  if (loading) {
    return (
      <div className="w-full min-h-svh flex justify-center items-center">
        Loading....
      </div>
    );
  }
  return (
    <>
      <BreadCrumbsProduct/>
      <h1 className="text-2xl font-bold mb-6 capitalize">
        {categoryParam ? (
          <>{categoryParam}</>
        ) : (
          <>Products</>
        )}
      </h1>
      <div className="flex flex-wrap gap-6">
        {products.map((product) => {
          // console.log(product)
          return (
            <ProductCardItem key={product.id} product={product} />
          );
        })}
      </div>
    </>
  );
};
export default ProductByCategory;
