import { useState } from "react";
import Button from "../shared/form/Button";
import FormContainer from "../shared/form/FormContainer";
import FormInput from "../shared/form/FormInput";
import FormLabel from "../shared/form/FormLabel";
import FormRow from "../shared/form/FormRow";
import { SignUpIcon } from "../shared/Icons";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        emailId: "",
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(() => {
            const updatedValues = {
                ...formData,
                [name]: value
            }
            validate(updatedValues);
            return updatedValues
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate(formData)){
            console.log("Form is successfully submitted!");
            navigate("/signin")
        }
        else{
            console.log("Form has some errors!")
        }
    }
    const validate = (formValueObj) => {
        const newErrors = {};
        if (!formValueObj.firstName.trim()) {
            newErrors.firstName = "Please enter First Name";
        }
        if (!formValueObj.lastName.trim()) {
            newErrors.lastName = "Please enter Last Name";
        }
        if (!formValueObj.mobileNumber.trim()) {
            newErrors.mobileNumber = "Please enter Mobile Number";
        } else if (!/^\d{10}$/.test(formValueObj.mobileNumber)) {
            newErrors.mobileNumber = "Please enter Valid Mobile Number";
        }
        if (!formValueObj.emailId.trim()) {
            newErrors.emailId = "Please enter Email ID";
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formValueObj.emailId)) {
            newErrors.emailId = "Please enter Valid Email ID";
        }
        if (!formValueObj.password.trim()) {
            newErrors.password = "Please enter Password";
        }
        if (!formValueObj.confirmPassword.trim()) {
            newErrors.confirmPassword = "Please enter Password";
        }
        if (formValueObj.confirmPassword != formValueObj.password) {
            newErrors.confirmPassword = "Password not matching";
        }

        setErrors(newErrors);
        return !Object.keys(newErrors).length
    }


    return(
        <div className="bg-green-100 flex items-center justify-center min-h-screen">
            <div className="bg-white max-w-md my-4 p-8 rounded-md shadow-xl w-full">
                <h2 className="text-gray-600 font-bold mb-6 text-center text-2xl">Sign Up</h2>
                <FormContainer>
                    <FormRow className="flex space-x-3">
                        <div className="w-1/2">
                            <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="firstName" label="First Name" />
                            <FormInput type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
                            {errors?.firstName && (<p className="text-sm text-red-700">{errors.firstName}</p>)}
                        </div>
                        <div className="w-1/2">
                            <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="lastName" label="Last Name" />
                            <FormInput type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
                            {errors?.lastName && (<p className="text-sm text-red-700">{errors.lastName}</p>)}
                        </div>
                    </FormRow>
                    <FormRow>
                        <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="mobileNumber" label="Mobile Number" />
                        <FormInput type="number" name="mobileNumber" id="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
                        {errors?.mobileNumber && (<p className="text-sm text-red-700">{errors.mobileNumber}</p>)}
                    </FormRow>
                    <FormRow>
                        <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="emailId" label="Email ID" />
                        <FormInput type="email" name="emailId" id="emailId" value={formData.emailId} onChange={handleChange} />
                        {errors?.emailId && (<p className="text-sm text-red-700">{errors.emailId}</p>)}
                    </FormRow>
                    <FormRow>
                        <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="password" label="Password" />
                        <FormInput type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
                        {errors?.password && (<p className="text-sm text-red-700">{errors.password}</p>)}
                    </FormRow>
                    <FormRow>
                        <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword" label="Confirm Password" />
                        <FormInput type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                        {errors?.confirmPassword && (<p className="text-sm text-red-700">{errors.confirmPassword}</p>)}
                    </FormRow>
                    <Button type="button" onClick={handleSubmit} icon={<SignUpIcon/>} className="w-full mt-3 px-4 py-2 text-white rounded-md transition duration-200 " variant="success" btnText="Sign Up" />
                </FormContainer>
            </div>
        </div>
    )
}
export default SignUp;