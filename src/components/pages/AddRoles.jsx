import { useEffect, useState } from "react";
import FormContainer from "../shared/form/FormContainer";
import FormInput from "../shared/form/FormInput";
import FormLabel from "../shared/form/FormLabel";
import FormRow from "../shared/form/FormRow";
import Button from "../shared/form/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddRoles = () => {
    const navigate = useNavigate()
    const [roles, setRoles] = useState([]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        emailId: "",
        roles: [],  // Store selected roles
    });

    const [errors, setErrors] = useState({});

    // Fetch roles from API
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get("http://localhost:8000/users/roles", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                console.log(response.data.data)
                setRoles(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRoles();
    }, []);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const updatedValues = { ...prev, [name]: value };
            validate(updatedValues);
            return updatedValues;
        });
    };

    // Handle checkbox selection
    const handleCheckboxChange = (roleId) => {
        setFormData((prev) => {
            const updatedRoles = prev.roles.includes(roleId)
                ? prev.roles.filter((id) => id !== roleId) // Remove if already selected
                : [...prev.roles, roleId]; // Add if not selected

            const updatedValues = { ...prev, roles: updatedRoles };
            validate(updatedValues);
            return updatedValues;
        });
    };

    // Form validation
    const validate = (formValueObj) => {
        const newErrors = {};

        if (!formValueObj.firstName.trim()) newErrors.firstName = "Please enter First Name";
        if (!formValueObj.lastName.trim()) newErrors.lastName = "Please enter Last Name";
        if (!formValueObj.userName.trim()) newErrors.userName = "Please enter User Name";

        if (!formValueObj.emailId.trim()) {
            newErrors.emailId = "Please enter Email ID";
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formValueObj.emailId)) {
            newErrors.emailId = "Please enter Valid Email ID";
        }

        if (formValueObj.roles.length === 0) {
            newErrors.roles = "Please select at least one role";
        }

        setErrors(newErrors);
        return !Object.keys(newErrors).length;
    };

    // Form submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate(formData)) {
            console.log(formData.roles)
            try {
              const { data: response } = await axios({
                method: "POST",
                url: "http://localhost:8000/users/add",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                data: {
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    username: formData.userName,
                    email: formData.emailId,
                    roles: formData.roles
                },
              });
              //console.log(response.data.token)
              //localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            } catch (error) {
                console.error("Axios Error:", error);
                toast.error("Error in adding role/s", {
                    position: "top-left",
                    autoClose: false,
                });
            }
          } else {
            console.log("Form has some errors!");
          }
    };

    return (
        <div className="bg-green-100 flex items-center justify-center py-10">
            <div className="bg-white max-w-xl my-4 p-8 rounded-md shadow-xl w-full">
                <h2 className="text-gray-600 font-bold mb-6 text-center text-2xl">Add Roles</h2>
                <FormContainer>
                    <FormRow>
                        <FormLabel htmlFor="firstName" label="First Name" />
                        <FormInput type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                        {errors.firstName && <p className="text-sm text-red-700">{errors.firstName}</p>}
                    </FormRow>
                    <FormRow>
                        <FormLabel htmlFor="lastName" label="Last Name" />
                        <FormInput type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        {errors.lastName && <p className="text-sm text-red-700">{errors.lastName}</p>}
                    </FormRow>
                    <FormRow>
                        <FormLabel htmlFor="userName" label="User Name" />
                        <FormInput type="text" name="userName" value={formData.userName} onChange={handleChange} />
                        {errors.userName && <p className="text-sm text-red-700">{errors.userName}</p>}
                    </FormRow>
                    <FormRow>
                        <FormLabel htmlFor="emailId" label="Email ID" />
                        <FormInput type="text" name="emailId" value={formData.emailId} onChange={handleChange} />
                        {errors.emailId && <p className="text-sm text-red-700">{errors.emailId}</p>}
                    </FormRow>
                    <FormRow>
                        <FormLabel htmlFor="roles" label="Roles" />
                        {roles.map((role) => (
                            <label key={role.id} className="flex items-center space-x-2 mb-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-blue-500"
                                    value={role.id}
                                    checked={formData.roles.includes(role.id)}
                                    onChange={() => handleCheckboxChange(role.id)}
                                />
                                <span className="text-gray-700">{role.role}</span>
                            </label>
                        ))}
                        {errors.roles && <p className="text-sm text-red-700">{errors.roles}</p>}
                    </FormRow>

                    <Button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full mt-3 px-4 py-2 text-white rounded-md transition duration-200"
                        variant="success"
                        btnText="Submit"
                    />
                </FormContainer>
            </div>
        </div>
    );
};

export default AddRoles;