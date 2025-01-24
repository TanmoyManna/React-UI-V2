"use client";
import { useState } from "react";
import Link from "next/link";

const searchOptions = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
];

const ComponentHeader = () => {

  return (
    <header className="fixed top-0 left-0 w-full bg-white  shadow-md py-4 px-6 flex items-center justify-center">

      <div className="relative w-72">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          {/* <FaSearch /> */}
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none"
        />
      </div>
    </header>
  );
};

export default ComponentHeader;
