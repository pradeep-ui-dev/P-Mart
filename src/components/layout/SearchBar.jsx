
const SearchBar = () => {
    return (
        <div className="flex-grow max-w-lg">
            <div className="relative">
                <input
                type="text"
                placeholder="Search for products"
                className="border-2 border-gray-400 w-full py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button className="absolute top-1/2 right-0 transform -translate-y-1/2  bg-green-700 hover:bg-green-800 text-white rounded px-3 py-2">
                Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar;