import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import PasswordStrengthChecker from "./PasswordStrengthChecker";
import { UserCircle2Icon } from "lucide-react";

type initialStateType = {
  name: string;
  email: string;
  city: string;
  country: string;
  state: string;
  phoneNumber: string;
  avatar: undefined | File;
  password: string;
  postalCode: string;
};

const EditProfile: React.FC = () => {
  const userData = useSelector((store: RootState) => store.user.data);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

  const initialState: initialStateType = {
    name: userData?.name || "",
    email: userData?.email || "",
    city: userData?.city || "",
    country: userData?.country || "",
    state: userData?.state || "",
    phoneNumber: String(userData?.phoneNumber) || "",
    avatar: undefined,
    password: "",
    postalCode: userData?.postalCode || "",
  };
  const validate = (state: typeof initialState) => {
    const errors: Record<string, string> = {};
    if (state.email.length < 5)
      errors.email = "email must have at least 5 letters";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(state.email))
      errors.email = "invalid Email";
    if (state.name.length < 5)
      errors.name = "name must have at least 5 letters";
    if (state.city.length < 2) errors.city = "city must have atleast 5 letters";
    if (state.country.length < 3)
      errors.country = "city must have atleast 3 letters";
    if (state.phoneNumber.length !== 10)
      errors.phoneNumber =
        "invalid phone number. phone number must have 10 digits";
    if (
      !state.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
      )
    )
      errors.password = "Invalid password";
    return errors;
  };

  const onSubmit = () => {
    const toUpdate: Partial<initialStateType> = {};
    const {
      avatar,
      city,
      country,
      email,
      name,
      password,
      phoneNumber,
      postalCode,
      state,
    } = values;
    if (avatar) toUpdate.avatar = avatar;
    if (city !== initialState.city) toUpdate.city = city;
    if (country !== initialState.country) toUpdate.country = country;
    if (email !== initialState.email) toUpdate.email = email;
    if (name !== initialState.name) toUpdate.name = name;
    if (phoneNumber !== initialState.phoneNumber)
      toUpdate.phoneNumber = phoneNumber;
    toUpdate.password = password;
    if (postalCode !== initialState.postalCode)
      toUpdate.postalCode = postalCode;
    if (state !== initialState.state) toUpdate.state = state;
    console.log(toUpdate);
  };

  const {
    clearFields,
    errors,
    handleInputChange,
    handleFileChange,
    handleSubmit,
    values,
  } = useForm(initialState, validate, onSubmit);
  const setDisableSubmit = () => {
    for (const key in initialState) {
      if (key === "password") continue;
      if (
        initialState[key as keyof typeof initialState] !==
        values[key as keyof typeof values]
      )
        return false;
    }
    return true;
  };

  const isDisableSubmit = setDisableSubmit();

  return (
    <div className=" w-full px-3 py-5">
      <h2 className=" mb-3 lg:text-3xl font-semibold text-green-600 lg:text-center">
        EDIT YOUR PROFILE
      </h2>
      <form
        action=""
        className="min-w-60 w-full max-w-3xl h-full flex justify-center items-center flex-col mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-3 w-full  h-full">
          <div className="w-full group h-full">
            <label
              htmlFor="name"
              className="group-focus-within:text-green-500 underline-offset-2 decoration-black"
            >
              name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              placeholder="Your name: "
              className="w-full h-10 caret-green-500 rounded outline-none pl-1 sm:pl-1.5  md:pl-2 lg:pl-3 bg-neutral-200 dark:bg-neutral-800"
              onChange={handleInputChange}
            />
            <p className="text-sm text-red-500">{errors.name}</p>
          </div>
          <div className="w-full group h-full">
            <label
              htmlFor="avatar"
              className="group-focus-within:text-green-500 underline-offset-2 decoration-black"
            >
              avatar:
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                placeholder="Your name: "
                className="sr-only"
                onChange={handleFileChange}
              />
              <div className=" relative w-full gap-2 h-10 cursor-pointer text-black dark:text-white flex  items-center caret-green-500 rounded outline-none pl-1 sm:pl-1.5  md:pl-2 lg:pl-3 bg-neutral-200 dark:bg-neutral-800">
                <p>Choose Profile Pic</p>
                {values.avatar ? (
                  <img
                    src={URL.createObjectURL(values.avatar)}
                    className="w-6 h-6   object-cover rounded-full ml-2"
                  />
                ) : (
                  <UserCircle2Icon className=" w-6 h-6" />
                )}
              </div>
            </label>
            <p className="text-sm text-red-500">{errors.name}</p>
          </div>
        </div>
        <div className="w-full group h-full">
          <label
            htmlFor="email"
            className="group-focus-within:text-green-500 underline-offset-2 decoration-black"
          >
            email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            placeholder="Your email: "
            className="w-full h-10 caret-green-500 rounded outline-none pl-1 sm:pl-1.5  md:pl-2 lg:pl-3 bg-neutral-200 dark:bg-neutral-800"
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="flex gap-3 w-full h-full">
          <div className="w-full h-full group">
            <label
              htmlFor="city"
              className="group-focus-within:text-green-500 underline-offset-2 decoration-black"
            >
              city:
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={values.city}
              placeholder="Your city: "
              className="w-full h-10 caret-green-500 rounded outline-none pl-1 sm:pl-1.5  md:pl-2 lg:pl-3 bg-neutral-200 dark:bg-neutral-800"
              onChange={handleInputChange}
            />
            <p className="text-sm text-red-500">{errors.city}</p>
          </div>
          <div className="w-full h-full group ">
            <label
              htmlFor="state"
              className="group-focus-within:text-green-500 underline-offset-2 decoration-black"
            >
              state:
            </label>
            <input
              id="state"
              name="state"
              type="text"
              value={values.state}
              placeholder="Your state: "
              className="w-full h-10 caret-green-500 rounded outline-none pl-1 sm:pl-1.5  md:pl-2 lg:pl-3 bg-neutral-200 dark:bg-neutral-800"
              onChange={handleInputChange}
            />
            <p className="text-sm text-red-500">{errors.state}</p>
          </div>
        </div>

        <div className="flex gap-3 h-full w-full">
          <div className="w-full h-full group ">
            <label
              htmlFor="country"
              className="group-focus-within:text-green-500 underline-offset-2 decoration-black"
            >
              country:
            </label>
            <input
              id="country"
              name="country"
              type="text"
              value={values.country}
              placeholder="Your name: "
              className="w-full h-10 caret-green-500 rounded outline-none pl-1 sm:pl-1.5  md:pl-2 lg:pl-3 bg-neutral-200 dark:bg-neutral-800"
              onChange={handleInputChange}
            />
            <p className="text-sm text-red-500">{errors.country}</p>
          </div>
          <div className="w-full h-full group ">
            <label
              htmlFor="PIN"
              className="group-focus-within:text-green-500 underline-offset-2 decoration-black"
            >
              pin:
            </label>
            <input
              id="PIN"
              name="postalCode"
              type="text"
              value={values.postalCode}
              placeholder="Your name: "
              className="w-full h-10 caret-green-500 rounded outline-none pl-1 sm:pl-1.5  md:pl-2 lg:pl-3 bg-neutral-200 dark:bg-neutral-800"
              onChange={handleInputChange}
            />
            <p className="text-sm text-red-500">{errors.postalCode}</p>
          </div>
        </div>

        <div className="w-full h-full group ">
          <label
            htmlFor="phoneNumber"
            className="group-focus-within:text-green-500 underline-offset-2 decoration-black"
          >
            phone number:
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={values.phoneNumber}
            placeholder="Your phone number: "
            className="w-full h-10 caret-green-500 rounded outline-none pl-1 sm:pl-1.5  md:pl-2 lg:pl-3 bg-neutral-200 dark:bg-neutral-800"
            onChange={handleInputChange}
          />
          <p className="text-sm text-red-500">{errors.phoneNumber}</p>
        </div>
        <div className="w-full flex gap-3">
          <div className="w-full h-full group ">
            <label
              htmlFor="password"
              className="group-focus-within:text-green-500 underline-offset-2 decoration-black"
            >
              your password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              placeholder="Your password: "
              className="w-full h-10 caret-green-500 rounded outline-none pl-1 sm:pl-1.5  md:pl-2 lg:pl-3 bg-neutral-200 dark:bg-neutral-800"
              onChange={handleInputChange}
            />
            <p className="text-sm text-red-500">{errors.password}</p>
          </div>
        </div>

        <div className="flex justify-end items-center gap-3 w-full mt-4">
          <button
            type="button"
            onClick={clearFields}
            className="w-full h-10 caret-green-500 bg-red-500 hover:bg-red-600 transition-colors ease-in duration-200  rounded"
          >
            Clear all fields
          </button>
          <button
            type="submit"
            disabled={isDisableSubmit}
            className="w-full h-10 caret-green-500 bg-green-500 disabled:bg-green-300 disabled:text-black/50 hover:bg-green-600 transition-colors ease-in duration-200  rounded"
          >
            Submit
          </button>
        </div>
      </form>
      <div className={`${!passwordFocus ? "hidden" : "flex"}`}>
        <PasswordStrengthChecker password={values.password} />
      </div>
    </div>
  );
};

export default EditProfile;
