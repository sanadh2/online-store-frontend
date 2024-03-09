import React, { useEffect, useState } from "react";
import { useToast } from "../../Components/ui/use-toast";
import { loginApi } from "../../Api/user";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store, { RootState } from "../../redux/store";
import { setLoggIn } from "../../redux/reducers/userReducer";

export type FormData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginApi(formData)
      .then(() => {
        store.dispatch(setLoggIn());
        navigate("/");
      })
      .catch((error: string) => {
        toast({ variant: "destructive", title: error });
      });
  };

  const { loggedIn } = useSelector((store: RootState) => store.user);
  useEffect(() => {
    if (loggedIn) navigate("/");
  }, [navigate, loggedIn]);

  return (
    <div className="flex justify-center items-center h-svh">
      <div className="flex flex-col bg-neutral-200 dark:bg-neutral-900 items-center min-h-96 justify-center  min-w-72 mx-2 w-full max-w-[30rem] dark:shadow-transparent rounded-md shadow-xl  border-2 border-neutral-400 dark:border-transparent p-3 ">
        <h1 className="text-3xl font-light font-Poppins tracking-wider">
          Login
        </h1>
        <form action="" className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="email" className="font-Montserrat font-semibold">
              Email:
            </label>
            <input
              id="email"
              name="email"
              required
              autoComplete="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full  pl-3 outline-none  h-10 dark:bg-neutral-800 rounded text-sm border-2 dark:border-transparent border-border/50 focus:border-border"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="password" className="font-Montserrat font-semibold">
              Password
            </label>
            <input
              id="password"
              name="password"
              required
              autoComplete="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full  pl-3 outline-none  h-10 dark:bg-neutral-800 rounded text-sm border-2 dark:border-transparent border-border/50 focus:border-border"
              placeholder="Enter your password"
            />
          </div>

          <button
            className="w-full mt-5 h-10 bg-button rounded dark:text-white  dark:bg-stone-950"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-end gap-3 w-full mt-4">
          <p>Don't have an account?</p>
          <Link
            to={"/sign-up"}
            className="text-blue-500 underline underline-offset-2 decoration-transparent hover:decoration-current transition-colors duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
