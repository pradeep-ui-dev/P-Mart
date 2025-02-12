import { useState } from "react";
import { useSelector } from "react-redux";
import FormContainer from "../shared/form/FormContainer";
import FormRow from "../shared/form/FormRow";
import FormLabel from "../shared/form/FormLabel";
import FormInput from "../shared/form/FormInput";
import Button from "../shared/form/Button";
import SelectDropdown from "../shared/form/SelectDropdown";

const CheckoutPage = () => {
    const { totalQuantity, totalPrice} = useSelector((state) => state.cart);

    const paymentMethodOptions = [
        {value: "", label: "Select"},
        {value: "cod", label: "Cash on Delivery"},
        {value: "upi", label: "UPI"},
        {value: "card", label: "Credit/Debit Card"}
    ]

    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        paymentMethod: "",
    });
    const [errors, setErrors] = useState({});

    const validate = (formObjValues) => {
        const newErrors = {};
        if(!formObjValues.fullName.trim()){
          newErrors.fullName = "Full Name is required"
        }
        if (!formObjValues.mobileNumber.trim()) {
          newErrors.mobileNumber = "Please enter Mobile Number";
        } 
        else if (!/^\d{10}$/.test(formObjValues.mobileNumber)) {
            newErrors.mobileNumber = "Please enter Valid Mobile Number";
        }
        if (!formObjValues.email.trim()) {
            newErrors.email = "Please enter Email ID";
        } 
        else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formObjValues.email)) {
            newErrors.email = "Please enter Valid Email ID";
        }
        if(!formObjValues.address.trim()){
          newErrors.address = "Shipping Address is required"
        }
        if(!formObjValues.city.trim()){
          newErrors.city = "City is required"
        }
        if(!formObjValues.zip.trim()){
          newErrors.zip = "ZIP Code is required"
        }
        if(!formObjValues.paymentMethod.trim()){
          newErrors.paymentMethod = "Payment Method is required"
        }

        setErrors(newErrors);
        return !Object.keys(newErrors).length
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(() => {
            const updatedValues = {
              ...formData,
              [name]: value
            }
            validate(updatedValues);
            return updatedValues;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate(formData)){
          console.log("Order Placed", formData);
          alert("Order placed successfully!");
        }        
    };

    return (
        <div className="flex-grow bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-4">Checkout</h2>

                <div className="border-b pb-4 mb-4">
                  <p className="text-lg">Total Items: {totalQuantity}</p>
                  <p className="text-lg font-semibold">Total Price: ₹{totalPrice}</p>
                </div>

                <FormContainer>
                    <FormRow>
                        <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="fullName" label="Full Name" />
                        <FormInput type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} />
                        {errors?.fullName && (<p className="text-sm text-red-700">{errors.fullName}</p>)}
                    </FormRow>
                    <FormRow className="flex space-x-4">                        
                        <div className="w-1/2">
                            <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="mobileNumber" label="Mobile Number" />
                            <FormInput type="number" name="mobileNumber" id="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
                            {errors?.mobileNumber && (<p className="text-sm text-red-700">{errors.mobileNumber}</p>)}
                        </div>
                        <div className="w-1/2">
                            <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="email" label="Email Address" />
                            <FormInput type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
                            {errors?.email && (<p className="text-sm text-red-700">{errors.email}</p>)}
                        </div>
                    </FormRow>
                    <FormRow>
                        <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="address" label="Shipping Address" />
                        <FormInput type="text" name="address" id="address" value={formData.address} onChange={handleChange} />
                        {errors?.address && (<p className="text-sm text-red-700">{errors.address}</p>)}
                    </FormRow>
                    <FormRow className="flex space-x-4">
                        <div className="w-1/2">
                            <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="city" label="City" />
                            <FormInput type="text" name="city" id="city" value={formData.city} onChange={handleChange} />
                            {errors?.city && (<p className="text-sm text-red-700">{errors.city}</p>)}
                        </div>
                        <div className="w-1/2">
                            <FormLabel className="block text-sm font-medium text-gray-700" htmlFor="zip" label="ZIP Code" />
                            <FormInput type="number" name="zip" id="zip" value={formData.zip} onChange={handleChange} />
                            {errors?.zip && (<p className="text-sm text-red-700">{errors.zip}</p>)}
                        </div>                        
                    </FormRow>
                    <FormRow>
                        <SelectDropdown
                            name="paymentMethod"
                            options={paymentMethodOptions}
                            value={formData.paymentMethod}
                            onChange={handleChange}
                        />                        
                        {errors?.paymentMethod && <p className="text-sm text-red-700">{errors.paymentMethod}</p>}
                    </FormRow>
                    <Button type="button" onClick={handleSubmit} icon="" className="w-full mt-3 px-4 py-2 text-white rounded-md transition duration-200 " variant="success" btnText="Payment" />
                </FormContainer>
            </div>
        </div>
    );
}
export default CheckoutPage;