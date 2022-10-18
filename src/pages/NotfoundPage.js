import React from "react";
import { Link } from "react-router-dom";

const NotfoundPage = () => {
  return (
    <div className="h-screen px-2 flex justify-center items-center">
      <div className="flex flex-col gap-y-6 items-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-3xl text-gray-800">SORRY, PAGE NOT FOUND</p>
        <Link
          to="/"
          className=" bg-gray-500 text-gray-50 transition-all duration-250 hover:bg-gray-600 px-2 py-1 rounded-md font-medium"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotfoundPage;
