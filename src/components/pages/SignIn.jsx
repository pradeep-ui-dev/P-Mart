import { useState } from "react";


const SignIn = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(() => {
            const updatedFormValues = {
                ...formData,
                [name]:value
            }
            validate(updatedFormValues);
            return updatedFormValues
        })
    }
    const validate = (formObjVal) => {
        const newErrors = {};
        if(!formObjVal.username.trim()){
            newErrors.username = "Username is required"
        }
        if(!formObjVal.password.trim()){
            newErrors.password = "Password is required"
        } else if (formObjVal.password.length < 6){
            newErrors.password = "Password must be at least 6 characters"
        }
        setErrors(newErrors)
        return !Object.keys(newErrors)
    }
    const handleSubmit = () => {
        if(validate(formData)){
            console.log("Form Successfully submitted!")
        }
        else {
            console.log("Form has some errors!")
        }
    }
    
    return (
        <div className="bg-green-100 flex items-center justify-center min-h-screen">
            <div className="bg-white max-w-md my-4 p-8 rounded-md shadow-xl w-full">
                <h2 className="text-gray-600 font-bold mb-6 text-center text-2xl">
                Sign In
                </h2>
                <div className="container">
                <form action="" className="space-y-4">
                    <div className="row">
                        <label className={`block text-sm font-medium text-gray-700`} htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" className={`w-full mt-1 px-3 py-2 border border-gray-400 rounded focus:outline-none`}
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors?.username && (<p className="text-sm text-red-700">{errors.username}</p>)}
                        
                    </div>
                    <div className="row">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className={`w-full mt-1 px-3 py-2 border border-gray-400 rounded focus:outline-none`}
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors?.password && (<p className="text-sm text-red-700">{errors.password}</p>)}
                    </div>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full mt-3 px-4 py-2 text-white rounded-md transition duration-200 bg-green-600 hover:bg-green-700"
                    >
                        Log In
                    </button>
                    {/* <Button type="button" text="Log In" onClick={handleSubmit} icon="" variant="success" className="w-full mt-3 px-4 py-2 text-white rounded-md transition duration-200 bg-green-600 hover:bg-green-700" /> */}
                    {/* variant values=primary, secondary, success, danger, warning, info, light, dark */}
                    {/* <Button type="button" text="Submit" onClick={() => handleSubmit} icon={<HomeIcon/>} variant="primary" /> */}
                    <p>Don't have an account? <a href="/signup" className="font-semibold underline">Create one here</a>.</p>
                </form>
            </div>
        </div>
    </div>
    )
}

export default SignIn;