import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggelManueHandeler = () => {
    dispatch(toggleSidebar());
  }
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img
          onClick={() => toggelManueHandeler()}
          className="h-6 w-6"
          src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-menu-icon-image_1344445.jpg"
          alt="Menu Icon"
        />
        <a href="/">
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
          />
        </a>
      </div>

      <div className="flex items-center space-x-2">
        <input
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search"
        />
        <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
          <svg
            className="h-5 w-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-end">
        <img
          className="h-8 w-8 rounded-full"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Head;
