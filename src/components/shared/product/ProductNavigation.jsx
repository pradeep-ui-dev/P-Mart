import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "../Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductCategories } from "../../../redux/product.category.api";

const ProductNavigation = () => {
  //const [categoryLinks, setCategoryLinks] = useState([]);
  //const [loading, setLoading] = useState([]);

  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.productsCategories)
  
  useEffect(() => {
    dispatch(fetchProductCategories())
  }, [dispatch]);

  //console.log(categoryLinks)
  return (
    <>
      <h2 className="text-lg border-b font-semibold p-3 capitalize">
        Category
      </h2>
      <Link
        to="/products"
        className="text-green-600 font-medium hover:underline block border-b p-3 underline"
      >
        All Products
      </Link>
      {loading && !categories.length ? (
        <Spinner/>
      ) : (
        categories.map((category) => {
          return (
            <NavLink
              key={category.slug}
              to={`/products/${category.slug}`}
              state={{
                categoryName: category.name,
              }}
              className={({ isActive }) =>
                `block p-3 space-y-1 pl-4 capitalize ${
                  isActive
                    ? "text-green-600 font-medium"
                    : "text-gray-600"
                } hover:text-green-600 hover:underline`
              }
            >
              {category.name}
            </NavLink>
          );
        })
      )}
    </>
  );
};

export default ProductNavigation;
