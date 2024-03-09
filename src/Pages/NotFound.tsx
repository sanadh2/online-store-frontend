import React from "react";
import { Link } from "react-router-dom";
const NotFound: React.FC = () => {
  return (
    <main className="grid h-svh place-items-center bg-neutral-300 dark:bg-neutral-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold text-indigo-600 animate-bounce">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-500 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-50">
          Sorry, we could not find the page you are looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
