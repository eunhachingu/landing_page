import React from "react";

function Navbar() {
  return (
    <nav className=" text-white flex justify-between bg-gray-700 items-center">
      <h1 className="cursor-pointer text-xl ml-10 hover:text-gray-500 py-2 font-extrabold">
        Choi
      </h1>
      <ul className="flex space-x-6 text-sm uppercase font-medium">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="flex">
        <button className="border-white border-2 px-4 py-1 text-sm mr-10">
          Free Trial
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
