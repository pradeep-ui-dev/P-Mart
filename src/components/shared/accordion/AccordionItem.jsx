const AccordionItem = (itemData) => {
    //console.log(itemData)
    const {id, title, description, openId, handleClick} = itemData
    return (
        <div className="bg-white" key={id}>
            <h3 className={`cursor-pointer flex items-center justify-between w-full font-semibold p-4
                ${ openId === id ? "active" : ""}`}
                onClick={() => handleClick(id)}
            >
            <span>{title}</span>
            <svg className="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${ openId === id ? "!rotate-180" : ""}`} />
                <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${ openId === id ? "!rotate-180" : ""}`} />
            </svg>
            </h3>
            <div className={`p-4 pt-0 ${
                openId === id ? "" : "hidden"
                }`}
            >
                <p>{description}</p>
            </div>
        </div>
    )
}
export default AccordionItem;