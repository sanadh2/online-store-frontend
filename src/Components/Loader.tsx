import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed z-50 flex justify-center items-center w-screen h-svh">
      <div className="w-8 border-t-transparent h-8 border-2 border-border dark:border-other dark:border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
