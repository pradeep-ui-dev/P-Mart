import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "../Spinner";

const ProductNavigation = () => {
  const [categoryLinks, setCategoryLinks] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const data = await response.json();
        setCategoryLinks(data);
        setLoading(false)
      } catch (error) {}
    };
    fetchData();
  }, []);

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
      {loading && !categoryLinks.length ? (
        // <Spinner/>
        <Spinner/>
      ) : (
        categoryLinks.map((category) => {
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
