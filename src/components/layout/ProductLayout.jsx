import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ProductNavigation from "../shared/product/ProductNavigation";

const ProductsLayout = () => {   

  return (
    <>
      <Header />
      <main className="flex min-h-screen bg-gray-100">
        <aside className="w-64 min-w-[220px] bg-white shadow-md">
          <ProductNavigation />
        </aside>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </main>
      <Footer />
    </>
  );
};

export default ProductsLayout;
