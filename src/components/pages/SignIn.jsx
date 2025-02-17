import { useState } from "react";
import FormContainer from "../shared/form/FormContainer";
import FormRow from "../shared/form/FormRow";
import FormLabel from "../shared/form/FormLabel";
import FormInput from "../shared/form/FormInput";
import Button from "../shared/form/Button";
import { SignInIcon } from "../shared/Icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => {
      const updatedValues = {
        ...formData,
        [name]: value,
      };
      validate(updatedValues);
      return updatedValues;
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate(formData)) {
      try {
        const { data: response } = await axios({
          method: "POST",
          url: "http://localhost:6001/auth/login",
          headers: {
            is_user: false,
          },
          data: {
            username: formData.username,
            password: formData.password,
          },
        });

        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } catch (error) {
        toast.error("Login failed", {
          position: "top-left",
          autoClose: false,
        });
      }
    } else {
      console.log("Form has some errors!");
    }
  };
  const validate = (formValueObj) => {
    const newErrors = {};
    if (!formValueObj.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formValueObj.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formValueObj.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  return (
    <div className="bg-green-100 flex items-center justify-center min-h-screen">
      <div className="bg-white max-w-md my-4 p-8 rounded-md shadow-xl w-full">
        <h2 className="text-gray-600 font-bold mb-6 text-center text-2xl">
          Sign In
        </h2>
        <FormContainer>
          <FormRow>
            <FormLabel
              className="block text-sm font-medium text-gray-700"
              htmlFor="username"
              label="Username"
            />
            <FormInput
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors?.username && (
              <p className="text-sm text-red-700">
                {errors.username}
              </p>
            )}
          </FormRow>
          <FormRow>
            <FormLabel
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
              label="Password"
            />
            <FormInput
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors?.password && (
              <p className="text-sm text-red-700">
                {errors.password}
              </p>
            )}
          </FormRow>
          <Button
            type="button"
            onClick={handleSubmit}
            icon={<SignInIcon />}
            className="w-full mt-3 px-4 py-2 text-white rounded-md transition duration-200 "
            variant="success"
            btnText="Log In"
          />
          <p>
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-semibold underline"
            >
              Create one here
            </a>
            .
          </p>
        </FormContainer>
      </div>
    </div>
  );
};

export default SignIn;
