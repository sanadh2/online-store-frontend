import React, { useEffect, useState } from "react";
import { useToast } from "../../Components/ui/use-toast";
import { loginApi } from "../../Api/user";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store, { RootState } from "../../redux/store";
import { setLoggIn } from "../../redux/reducers/userReducer";
import Input from "../../Components/ui/Input";
import useForm from "../../hooks/useForm";
import { Button } from "../../Components/ui/button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
export type FormData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    return errors;
  };

  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = () => {
    loginApi(values)
      .then(() => {
        store.dispatch(setLoggIn());
        navigate("/");
      })
      .catch((error: string) => {
        toast({ variant: "destructive", title: error });
      });
  };

  const {
    values,
    handleSubmit,
    handleInputChange: handleChange,
  } = useForm(initialState, validate, onSubmit);

  const { loggedIn } = useSelector((store: RootState) => store.user);
  useEffect(() => {
    if (loggedIn) navigate("/");
  }, [navigate, loggedIn]);

  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });

  useGSAP(
    () => {
      if (focus.email) {
        gsap.to("#bg", {
          backgroundColor: "green",
        });
      } else if (focus.password) {
        gsap.to("#bg", {
          backgroundColor: "red",
        });
      } else {
        gsap.to("#bg", {
          backgroundColor: "white",
        });
      }
    },
    { dependencies: [focus.email, focus.password] }
  );

  return (
    <div id="bg" className="flex justify-center items-center h-svh">
      <div className="flex flex-col bg-primary dark:bg-neutral-900 items-center min-h-96 justify-center  min-w-72 mx-2 w-full max-w-[30rem] dark:shadow-transparent rounded-md shadow-xl  p-3 ">
        <h1 className="text-3xl font-light font-Poppins tracking-wider">
          Login
        </h1>
        <form action="" className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="email" className="font-Montserrat font-semibold">
              Email:
            </label>
            <Input
              id="email"
              name="email"
              required
              autoComplete="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onFocus={() => setFocus({ email: true, password: false })}
              onBlur={() => setFocus((prev) => ({ ...prev, email: false }))}
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="password" className="font-Montserrat font-semibold">
              Password
            </label>
            <Input
              id="password"
              name="password"
              required
              autoComplete="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter your password"
              onFocus={() => setFocus({ email: false, password: true })}
              onBlur={() => setFocus((prev) => ({ ...prev, password: false }))}
            />
          </div>

          <Button
            variant={"outline"}
            className="w-full h-12 text-lg mt-3"
            type="submit"
          >
            Submit
          </Button>
        </form>
        <div className="flex justify-end gap-3 w-full mt-8">
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
