import AccordionWrapper from "../shared/accordion/Index";
import CategoryWrapper from "../shared/product/popular-categories/CategoryWrapper";
import ProductList from "../shared/product/ProductList";
import SingleProductBanner from "../shared/SingleProductBanner"

const HomePage = () => {
    return(
        <>
            <CategoryWrapper/>
            <SingleProductBanner/>
            <ProductList />
            <AccordionWrapper/>
        </>
    )
}

export default HomePage;