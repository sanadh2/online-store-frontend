import React from "react";

type PropTypes = {
  password: string;
};
const PasswordStrengthChecker: React.FC<PropTypes> = ({ password }) => {
  return (
    <div className="min-w-60 w-full max-w-3xl mx-auto mt-7">
      <ul className="list-disc grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 list-inside">
        <li
          className={`
      ${password.length > 8 ? "text-green-500" : "text-red-500"} font-extralight ml-0  p-0`}
        >
          password must have atleast 8 letters
        </li>
        <li
          className={`
      ${
        password.match(/.*\d.*/) ? "text-green-500" : "text-red-500"
      } font-extralight m-0`}
        >
          password must have atleast 1 digit
        </li>
        <li
          className={`
      ${
        password.match(/.*\d.*/) ? "text-green-500" : "text-red-500"
      } font-extralight m-0`}
        >
          password must have atleast 1 character
        </li>
        <li
          className={`{
      ${
        password.match(/.*[A-Z].*/) ? "text-green-500" : "text-red-500"
      } font-extralight m-0`}
        >
          password must have atleast 1 uppercase letter
        </li>
        <li
          className={`
      ${
        password.match(/.*[a-z].*/) ? "text-green-500" : "text-red-500"
      } font-extralight m-0`}
        >
          password must have atleast 1 lowercase letter
        </li>
      </ul>
    </div>
  );
};

export default PasswordStrengthChecker;
