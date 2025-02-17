
const Button = (props) => {
    const {type="button", disabled=false, onClick, className, icon = "", variant, btnText} = props;

    const validButtonTypes = ["button", "submit"]
    if(!validButtonTypes.includes(type)){
        console.log(`Invalid Button Type: "${type}", Valid Button types are: ${validButtonTypes.join(', ')}`)
    }

    const variantValues = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]
    if(!variantValues.includes(variant)){
        console.log(`Invalid Variant: "${variant}", Valid Variant entries are ${variantValues.join(', ')}`)
    }
    const variantClasses = {
        primary: "bg-blue-200 hover:bg-blue-300",
        secondary: "bg-gray-100 hover:bg-gray-200",
        success: "bg-green-600 hover:bg-green-700",
        danger: "bg-red-200 hover:bg-red-300",
        warning: "bg-yellow-200 hover:bg-yellow-300",
        info: "bg-gray-200 hover:bg-gray-300",
        light: "bg-white hover:bg-gray-100",
        dark: "bg-gray-300 hover:bg-gray-400",
    };
    const buttonClass = variantClasses[variant]
    return(
        <button
            type={type}
            onClick={onClick}
            className={`${className} ${buttonClass}`}
            disabled={disabled}
        >
            <span className="flex justify-center items-center">
                {icon && (<span className="iconWrap mr-2">{icon}</span>)}
                
                {btnText}
            </span>
        </button>
    )
}

export default Button;