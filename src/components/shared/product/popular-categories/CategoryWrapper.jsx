import CategoryProductsList from "./CategoryProductsList";

const CategoryWrapper = () => {

    

    return (
        <section className="p-6 pb-0 text-xs">
            <div className="bg-white border-[0.5px] border-gray-300 rounded p-6">
                <h3 className="font-semibold text-base">Popular Categories</h3>                
                <CategoryProductsList />
            </div>
        </section>
    )
}
export default CategoryWrapper;