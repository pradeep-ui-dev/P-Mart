import { useEffect, useState } from "react"
import FormContainer from "../shared/form/FormContainer"
import FormInput from "../shared/form/FormInput"
import FormLabel from "../shared/form/FormLabel"
import FormRow from "../shared/form/FormRow"
import Button from "../shared/form/Button"
import axios from "axios"

const AddRoles = () => {
    const [roles, setRoles] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([])

    useEffect(() => {
        const fetchRoles = async () => {
            try{
                const response = await axios.get("http://localhost:8000/users/roles", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                console.log(response.data.data)
                setRoles(response.data.data)
            }
            catch (error){
                console.log(error)
            }
        }
        fetchRoles()
    }, [])

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        emailId: "",
        roles: [],
    })
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(() => {
            const updatedValues = {
                ...formData,
                [name]: value
            }
            validate(updatedValues)
            return updatedValues
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validate(formData)){
            console.log("Form is submitted successfully!")

        }
    }
    const validate = (formValueObj) => {
        const newErrors = {};
        if(!formValueObj.firstName.trim()) {
            newErrors.firstName = "Please enter First Name"
        }
        if(!formValueObj.lastName.trim()) {
            newErrors.lastName = "Please enter Last Name"
        }
        if(!formValueObj.userName.trim()) {
            newErrors.userName = "Please enter User Name"
        }
        if (!formValueObj.emailId.trim()) {
            newErrors.emailId = "Please enter Email ID";
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formValueObj.emailId)) {
            newErrors.emailId = "Please enter Valid Email ID";
        }
        // if(!formValueObj.firstName.trim()) {
        //     newErrors.firstName = "Please enter First Name"
        // }

        setErrors(newErrors)
        return !Object.keys(newErrors).length
    }


    return(
        <div className="bg-green-100 flex items-center justify-center py-10">
            <div className="bg-white max-w-xl my-4 p-8 rounded-md shadow-xl w-full">
                <h2 className="text-gray-600 font-bold mb-6 text-center text-2xl">Add Roles</h2>
                <FormContainer>
                    <FormRow>
                        <FormLabel
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="firstName"
                            label="First Name"
                        />
                        <FormInput
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {errors?.firstName && (
                            <p className="text-sm text-red-700">
                                {errors.firstName}
                            </p>
                        )}
                    </FormRow>
                    <FormRow>
                        <FormLabel
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="lastName"
                            label="Last Name"
                        />
                        <FormInput
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors?.lastName && (
                            <p className="text-sm text-red-700">
                                {errors.lastName}
                            </p>
                        )}
                    </FormRow>
                    <FormRow>
                        <FormLabel
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="userName"
                            label="User Name"
                        />
                        <FormInput
                            type="text"
                            name="userName"
                            id="userName"
                            value={formData.userName}
                            onChange={handleChange}
                        />
                        {errors?.userName && (
                            <p className="text-sm text-red-700">
                                {errors.userName}
                            </p>
                        )}
                    </FormRow>
                    <FormRow>
                        <FormLabel
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="emailId"
                            label="Email ID"
                        />
                        <FormInput
                            type="text"
                            name="emailId"
                            id="emailId"
                            value={formData.emailId}
                            onChange={handleChange}
                        />
                        {errors?.emailId && (
                            <p className="text-sm text-red-700">
                                {errors.emailId}
                            </p>
                        )}
                    </FormRow>
                    <FormRow>
                        <FormLabel
                            className="block text-sm font-medium text-gray-700 mb-1"
                            htmlFor="roles"
                            label="Roles"
                        />
                        {roles.map((role) => (
                            <label key={role.id} className="flex items-center space-x-2 mb-2">
                                <input 
                                    type="checkbox"
                                    className="w-4 h-4 accent-blue-500"
                                    value={role.role}
                                />
                                <span className="text-gray-700">{role.role}</span>
                            </label>
                        ))}
                    </FormRow>

                    <Button type="button" onClick={handleSubmit} icon="" className="w-full mt-3 px-4 py-2 text-white rounded-md transition duration-200 " variant="success" btnText="Submit" />
                </FormContainer>
            </div>
        </div>
    )
}

export default AddRoles