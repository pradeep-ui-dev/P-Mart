const FormRow = (props) => {
    const {children, className=""} = props
    return(
        <div className={`row ${className}`}>
            {children}
        </div>
    )
}
export default FormRow;