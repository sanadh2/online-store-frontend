import React, { useEffect, useState } from "react";
import { signUpApi } from "../../Api/user";
import { RxAvatar } from "react-icons/rx";
import { useToast } from "../../Components/ui/use-toast";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

export type SignUpData = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  gender: "male" | "female" | "others" | null;
  avatar?: File;
};

const SignUp: React.FC = () => {
  const initialState: SignUpData = {
    city: "",
    country: "",
    email: "",
    password: "",
    gender: null,
    name: "",
    phoneNumber: "",
    postalCode: "",
    state: "",
  };
  const validate = (values: SignUpData) => {
    const errors: Record<string, string> = {};
    if (values.city.length < 1) errors.city = "Please complete this field";
    if (values.country.length < 1)
      errors.country = "Please complete this field";
    if (values.email.length < 1) errors.email = "Please complete this field";
    if (values.password.length < 1)
      errors.password = "Please complete this field";
    if (!values.gender) errors.gender = "Please complete this field";
    if (values.name.length < 1) errors.name = "Please complete this field";
    if (values.phoneNumber.length < 1)
      errors.phoneNumber = "Please complete this field";
    if (values.state.length < 1) errors.state = "Please complete this field";
    if (values.phoneNumber.length < 1)
      errors.phoneNumber = "Please complete this field";

    if (/^(.{1,7}|[^a-zA-Z0-9]+)$/.test(values.password))
      errors.password = "weak password";
    return errors;
  };
  const { toast } = useToast();
  const onSubmit = async () => {
    console.log(values);
    signUpApi(values)
      .then((res) => toast({ variant: "destructive", title: res }))
      .catch((err: Error) =>
        toast({ variant: "destructive", title: err.message })
      );
  };
  const { errors, values, handleSubmit, handleFileChange, handleInputChange } =
    useForm(initialState, validate, onSubmit);

  const [passwordCheck, setPasswordCheck] = useState<
    "weak" | "fair" | "strong" | "good" | null
  >(null);

  function passwordChecker(password: string) {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=]).{8,}$/.test(
        password
      )
    )
      return "strong";
    else if (/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) return "fair";
    else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password))
      return "good";
    else return "weak";
  }
  const [ispasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  useEffect(() => {
    setPasswordCheck(passwordChecker(values.password));
  }, [values.password, passwordCheck]);

  return (
    <div className="h-svh flex justify-center items-center">
      <div className="min-h-80 min-w-40 w-full max-w-[40rem] border rounded-lg p-3">
        <h1 className="text-3xl font-Montserrat text-center my-4">Sign Up</h1>
        <form
          className="lg:p-3 h-full  rounded-md"
          onSubmit={handleSubmit}
          method="POST"
          action=""
        >
          {/* name */}
          <div className="w-full">
            <input
              type="text"
              className="w-full pl-3 outline-none ring-1 focus:ring-2 ring-primary-divert rounded h-10"
              placeholder="Name"
              required
              autoFocus
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="mt-3 md:mt-0 flex justify-between flex-col md:flex-row gap-3 w-full">
            {/* email */}
            <div className="mt-0 md:mt-3 w-full">
              <input
                type="email"
                className="w-full pl-3 outline-none ring-1 focus:ring-2 ring-primary-divert rounded h-10"
                placeholder="Email"
                required
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            </div>
            {/* password */}
            <div className="mt-0 md:mt-3 w-full">
              <input
                type=""
                name="password"
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                autoComplete="Password"
                className="w-full pl-3 ring-1 focus:ring-2 ring-primary-divert outline-none rounded h-10"
                placeholder="Password"
                required
                value={values.password}
                onChange={(e) => {
                  handleInputChange(e);
                  setPasswordCheck(passwordChecker(e.target.value));
                }}
              />
              {ispasswordFocused &&
                values.password.length > 0 &&
                !errors.password && (
                  <div className={`h-1 flex gap-2 w-full mt-2`}>
                    <div
                      className={`h-full w-full rounded-full ${passwordCheck !== "weak" ? (passwordCheck !== "fair" ? (passwordCheck !== "good" ? "bg-green-500" : "bg-blue-500") : "bg-yellow-500") : "bg-red-500"}`}
                    ></div>
                    <div
                      className={`h-full w-full rounded-full ${passwordCheck !== "weak" ? (passwordCheck !== "fair" ? (passwordCheck !== "good" ? "bg-green-500" : "bg-blue-500") : "bg-yellow-500") : "bg-red-500"}`}
                    ></div>
                    <div
                      className={`h-full w-full rounded-full ${passwordCheck !== "weak" ? (passwordCheck !== "fair" ? (passwordCheck !== "good" ? "bg-green-500" : "bg-blue-500") : "bg-yellow-500") : "bg-red-500"}`}
                    ></div>
                    <div
                      className={`h-full w-full rounded-full ${passwordCheck !== "weak" ? (passwordCheck !== "fair" ? (passwordCheck !== "good" ? "bg-green-500" : "bg-blue-500") : "bg-yellow-500") : "bg-red-500"}`}
                    ></div>
                  </div>
                )}
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
          </div>

          {/* phoneNumber */}
          <div className="mt-3 w-full">
            <input
              type="number"
              id="number"
              autoComplete="Phone Number"
              className="w-full pl-3 ring-1 focus:ring-2 ring-primary-divert outline-none rounded h-10"
              placeholder="Phone Number"
              required
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="mt-3 w-full">
            <div className="flex w-full items-center gap-3">
              <h3 className="pl-3 pr-8 rounded h-10 justify-center flex items-center w-fit text-neutral-500 bg-white">
                Gender:
              </h3>
              <label htmlFor="male">male</label>
              <input
                type="checkbox"
                id="male"
                autoComplete="Phone Number"
                className="accent-primary-divert "
                placeholder="Phone Number"
                name="gender"
                value={"male"}
                onChange={handleInputChange}
                checked={values.gender === "male"}
              />
              <label htmlFor="female">female</label>
              <input
                type="checkbox"
                id="female"
                className="accent-primary-divert "
                name="gender"
                value={"female"}
                checked={values.gender === "female"}
                onChange={handleInputChange}
              />
              <label htmlFor="pthers">others</label>
              <input
                type="checkbox"
                id="others"
                className="accent-primary-divert "
                name="gender"
                value={"others"}
                checked={values.gender === "others"}
                onChange={handleInputChange}
              />
            </div>

            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>

          <div className="md:mt-0 mt-3 flex justify-between flex-col md:flex-row gap-3 w-full">
            {/* city */}
            <div className="mt-0 md:mt-3 w-full">
              <input
                type="text"
                id="city"
                autoComplete="City"
                className="w-full pl-3 ring-1 focus:ring-2 ring-primary-divert outline-none rounded h-10"
                placeholder="City"
                required
                name="city"
                value={values.city}
                onChange={handleInputChange}
              />
            </div>
            {/* postal code */}
            <div className="mt-0 md:mt-3 w-full">
              <input
                type="text"
                id="postal-code"
                autoComplete="Post  al Code"
                className="w-full pl-3 ring-1 focus:ring-2 ring-primary-divert outline-none rounded h-10"
                placeholder="Postal Code"
                required
                name="postalCode"
                value={values.postalCode}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className=" md:mt-0 mt-3 flex flex-col md:flex-row w-full justify-between gap-3">
            {/* country */}
            <div className="mt-0 md:mt-3 w-full">
              <input
                type="text"
                id="country"
                autoComplete="Country"
                className="w-full pl-3 ring-1 focus:ring-2 ring-primary-divert outline-none rounded h-10"
                placeholder="Country"
                required
                name="country"
                value={values.country}
                onChange={handleInputChange}
              />
            </div>
            {/* state */}
            <div className="mt-0 md:mt-3 w-full">
              <input
                type="text"
                id="state"
                autoComplete="Country"
                className="w-full pl-3 ring-1 focus:ring-2 ring-primary-divert outline-none rounded h-10"
                placeholder="State"
                required
                name="state"
                value={values.state}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* avatar */}
          <div className="mt-3 w-full relative">
            <input
              type="file"
              accept="image/*"
              className="sr-only peer"
              id="avatar"
              name="avatar"
              onChange={handleFileChange}
            />
            <label
              htmlFor="avatar"
              className="w-full cursor-pointer ring-1 peer-focus:ring-2 ring-primary-divert peer-focus:outline-primary-divert text-neutral-500 bg-white outline-primary  h-10 rounded flex justify-normal pl-3 items-center  "
            >
              Add avatar
            </label>
            {values.avatar ? (
              <img
                draggable={false}
                alt="avatar"
                src={URL.createObjectURL(values.avatar)}
                className=" object-cover rounded-full pointer-events-none absolute aspect-square top-1 right-3 h-8"
              />
            ) : (
              <RxAvatar
                id="avatar"
                className="h-8 w-8 pointer-events-none  absolute top-1 right-3"
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full h-10 bg-green-500 mt-3 rounded-md"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-end gap-3 w-full mt-4">
          <p>Already have an account?</p>
          <Link
            to={"/sign-in"}
            className="text-blue-500 underline underline-offset-2 decoration-transparent hover:decoration-current transition-colors duration-300"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
