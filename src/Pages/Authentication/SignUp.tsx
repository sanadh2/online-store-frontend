import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signUpApi } from "../../Api/user";
import { RxAvatar } from "react-icons/rx";
import { toast } from "../../Components/ui/use-toast";
import { Link } from "react-router-dom";

export type SignUpData = {
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpData>();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [avatar, setAvatar] = useState<File>();

  const onSubmit = async (data: SignUpData) => {
    console.log(data);
    await signUpApi(data, avatar)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        toast({ variant: "destructive", title: err });
      });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = e.target.value;
    const numericValue: string = inputValue.replace(/[^0-9]/g, "");
    setPhoneNumber(numericValue);
    setValue("phoneNumber", parseInt(numericValue, 10));
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setAvatar(file);
  };
  return (
    <div className="h-svh flex justify-center items-center">
      <div className="min-h-80 min-w-40 w-full max-w-[40rem] border rounded-lg p-3">
        <h1 className="text-3xl font-Montserrat text-center my-4">Sign Up</h1>
        <form
          className="lg:p-3 h-full  rounded-md font-Outfit "
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          action=""
        >
          {/* name */}
          <div className="w-full">
            <input
              type="text"
              className="w-full pl-3 bg-black outline-none rounded h-10"
              placeholder="Name"
              required
              {...register("name", {
                minLength: {
                  value: 3,
                  message: "must have at least 3 letters",
                },
                required: true,
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mt-3 md:mt-0 flex justify-between flex-col md:flex-row gap-3 w-full">
            {/* email */}
            <div className="mt-0 md:mt-3 w-full">
              <input
                type="email"
                className="w-full pl-3 bg-black outline-none rounded h-10"
                placeholder="Email"
                required
                {...register("email")}
              />
            </div>
            {/* password */}
            <div className="mt-0 md:mt-3 w-full">
              <input
                type="password"
                autoComplete="Password"
                className="w-full pl-3 bg-black  outline-none rounded h-10"
                placeholder="Password"
                required
                {...register("password", {
                  minLength: 8,
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          {/* phoneNumber */}
          <div className="mt-3 w-full">
            <input
              type="text"
              id="number"
              autoComplete="Phone Number"
              className="w-full pl-3 bg-black outline-none rounded h-10"
              placeholder="Phone Number"
              required
              {...register("phoneNumber", {
                max: {
                  value: 9999999999,
                  message: "invalid phone number",
                },
                min: { value: 100000000, message: "invalid phone number" },
              })}
              onChange={onChange}
              value={phoneNumber}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="md:mt-0 mt-3 flex justify-between flex-col md:flex-row gap-3 w-full">
            {/* city */}
            <div className="mt-0 md:mt-3 w-full">
              <input
                type="text"
                id="city"
                autoComplete="City"
                className="w-full pl-3 bg-black outline-none rounded h-10"
                placeholder="City"
                required
                {...register("city")}
              />
            </div>
            {/* postal code */}
            <div className="mt-0 md:mt-3 w-full">
              <input
                type="text"
                id="postal-code"
                autoComplete="Postal Code"
                className="w-full pl-3 bg-black outline-none rounded h-10"
                placeholder="Postal Code"
                required
                {...register("postalCode")}
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
                className="w-full pl-3 bg-black outline-none rounded h-10"
                placeholder="Country"
                required
                {...register("country")}
              />
            </div>
            {/* state */}
            <div className="mt-0 md:mt-3 w-full">
              <input
                type="text"
                id="state"
                autoComplete="Country"
                className="w-full pl-3 bg-black outline-none rounded h-10"
                placeholder="State"
                required
                {...register("state")}
              />
            </div>
          </div>
          {/* avatar */}
          <div className="mt-3 w-full relative">
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              id="avatar"
              onChange={onFileChange}
            />
            <label
              htmlFor="avatar"
              tabIndex={1}
              className="w-full cursor-pointer  h-10 rounded flex justify-normal pl-3 items-center bg-black"
            >
              Add avatar
            </label>
            {avatar ? (
              <img
                draggable={false}
                alt="avatar"
                id="avatar"
                src={URL.createObjectURL(avatar)}
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
