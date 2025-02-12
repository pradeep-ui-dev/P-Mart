const SelectDropdown = (props) => {
    const {name, value, onChange, options} = props;
    return (
        <select
            name={name}
            className="w-full border border-gray-400 p-2 rounded"
            value={value}
            onChange={onChange}
            >
            {options.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}
export default SelectDropdown;