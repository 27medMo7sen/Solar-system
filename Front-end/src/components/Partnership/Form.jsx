import { useState } from "react";
import { useInput } from "../../hooks/useInput";

const Form = () => {
  const [businessType, setBusinessType] = useState(0);
  const [serviceType, setServiceType] = useState("");
  const [checkbox,setCheckbox]=useState(0);
  const {
    enterdValue: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");
  const {
    enterdValue: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));
  const {
    enterdValue: phone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    valueBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput((value) => value.trim() !== "");
  const {
    entedValue: link,
    isValid: linkIsValid,
    hasError: linkHasError,
    valueChangeHandler: linkChangeHandler,
    valueBlurHandler: linkBlurHandler,
    reset: resetLink,
  } = useInput((value) => value.trim() !== "");
  const {
    enterdValue:address,
    isValid:addressIsValid,
    hasError:addressHasError,
    valueChangeHandler:addressChangeHandler,
    valueBlurHandler:addressBlurHandler,
    reset:resetAddress
  }=useInput((value)=>value.trim()!=="");
  const formIsValid= nameIsValid && emailIsValid && phoneIsValid && linkIsValid && addressIsValid;
  const inputFeildIsNotValidClasses =
    "border border-red-500 p-2 rounded bg-red-200 focus:outline-none focus:bg-red-100";
  return (
    <div className="py-10 flex flex-col gap-3  px-28 mx-lg:px-10 mx-sm:px-2 ">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Become Our Partner
      </h2>
      <form className="flex flex-col gap-3  border border-black p-3 rounded-md">
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 mx-md:grid-cols-1">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className={`${nameHasError ? "text-red-600" : ""}`}
            >
              Business Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              required
              className={`border border-gray-300 p-2 rounded ${
                nameHasError ? inputFeildIsNotValidClasses : ""
              }`}
            />
            {nameHasError && (
              <p className="text-red-500">Name must not be empty</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className={`${emailHasError ? "text-red-600" : ""}`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              required
              className={`border border-gray-300 p-2 rounded ${
                emailHasError ? inputFeildIsNotValidClasses : ""
              }`}
            />
            {emailHasError && (
              <p className="text-red-500">Enter valid E-mail</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone"
              className={`${phoneHasError ? "text-red-600" : ""}`}
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              required
              className={`border border-gray-300 p-2 rounded ${
                phoneHasError ? inputFeildIsNotValidClasses : ""
              }`}
            />
            {phoneHasError && (
              <p className="text-red-500">Phone must not be empty</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="link"
              className={`${linkHasError ? "text-red-600" : ""}`}
            >
              Website or social media link
            </label>
            <input
              type="text"
              id="link"
              value={link}
              onChange={linkChangeHandler}
              onBlur={linkBlurHandler}
              required
              className={`border border-gray-300 p-2 rounded ${
                linkHasError ? inputFeildIsNotValidClasses : ""
              }`}
            />
            {linkHasError && (
              <p className="text-red-500">Link must not be empty</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="businessType">Business Type</label>
            <select
              id="businessType"
              onChange={(e)=>{
                setBusinessType(e.target.value)
              }}
              className="border bg-white p-2 rounded"
            >
              <option hidden disabled selected >
                Choose Business Type
              </option>
              <option value="Products" >
                Products
              </option>
              <option value="Services">
                Services
              </option>
            </select>
          </div>
          {businessType==="Services" && (
            <div className="flex flex-col gap-1">
              <label htmlFor="businessType">Service Type</label>
              <select
                id="businessType"
                value={serviceType}
                onChange={(e) => businessType(e.target.value)}
                className="border  bg-white p-2 rounded"
              >
                <option selected hidden disabled>
                  Choose Service Type
                </option>
                <option>System insallaion</option>
                <option>Maintenance</option>
                <option>Consultation</option>
              </select>
            </div>
          )}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="address"
              className={`${addressHasError ? "text-red-600" : ""}`}
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
              required
              className={`border border-gray-300 p-2 rounded ${
                addressHasError ? inputFeildIsNotValidClasses : ""
              }`}
            />
            {addressHasError && (
              <p className="text-red-500">Address must not be empty</p>
            )}  
            </div>
        </div>
        <div className="flex gap-1">
          <span>
            <input type="checkbox" value={checkbox} onClick={()=>{
              setCheckbox((pre)=>{return !pre})
              console.log(checkbox)
            }} />
          </span>
          <span>I agree to the terms and conditions</span>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-Primary-button text-white py-2 px-4 rounded hover:bg-Primary-button-hover disabled:bg-slate-600 disabled:text-gray-200 disabled:cursor-not-allowed"
            disabled={!formIsValid}
          >
            Submit
          </button>
          </div>
      </form>
    </div>
  );
};

export default Form;
