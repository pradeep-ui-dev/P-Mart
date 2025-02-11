import { Link, useLocation, useParams } from "react-router-dom";

const BreadCrumbsProduct = () => {
  const { categoryParam } = useParams();
  

  return (
    <nav className="text-sm text-gray-500 mb-4 capitalize">
      <Link
        to="/dashboard"
        className="text-green-600 hover:underline"
      >
        Home
      </Link>
      {" / "}
      {categoryParam ? (
        <>
          <Link
            to={`/products`}
            className="text-green-600 hover:underline"
          >
            Products
          </Link>
          {" / "}
          <span className="capitalize">
            {categoryParam.replace("-", " ")}
          </span>
        </>
      ) : (
        <>
          <span>API Products</span>
        </>
      )}
    </nav>
  );
};

export default BreadCrumbsProduct;
