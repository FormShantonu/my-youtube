import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { YOUTUBE_SUGGETIONS_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();
  const toggelManueHandeler = () => {
    dispatch(toggleSidebar());
  }

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      getSuggestions()
    }, 200)
    //Clear the timer if the user types again
    return () => clearTimeout(debounceTimer);
  }, [searchQuery])

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGETIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  }
  return (
    <div className="grid grid-cols-3 gap-4 p-2 bg-white shadow-md">
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

      <div className="items-center space-x-2">
        <div className="flex">
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
        <div className="absolute bg-white py-2 px-2 w-[25rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion} className="flex items-center px-3 py-2 shadow-sm hover:bg-gray-100">
                <img
                  className="mr-2 h-4 w-4"
                  alt="history-icon"
                  src="https://png.pngtree.com/png-clipart/20230920/original/pngtree-illustration-of-a-simple-magnifying-glass-icon-research-tool-magnifying-vector-png-image_12700281.png"
                />
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
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
