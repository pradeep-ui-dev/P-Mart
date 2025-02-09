const FormLabel = (props) => {
    const {className="", label, htmlFor} = props
    return(
        <label className={` ${className}`} htmlFor={htmlFor}>{label}</label>
    )
}
export default FormLabel;