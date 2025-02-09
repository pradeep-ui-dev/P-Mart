const FormInput = (props) => {
    const {type="text", name, id, className="", value, onChange} = props;
    const state = 'I am from that component'
    return(
        <input type="text" name={name} id={id} className={`w-full mt-1 px-3 py-2 border border-gray-400 rounded focus:outline-none ${className}`}
            value={value}
            onChange={onChange}
        />
    )
}
export default FormInput;