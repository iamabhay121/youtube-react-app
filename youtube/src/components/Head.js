import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HamBugImg from "../assets/hamMenu.jpg";
import YouTubeLogo from "../assets/youtube-logo.webp";
import UserLogo from "../assets/user-logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { toggleMenu } from "../utils/features/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    console.log("search item", searchQuery);
    const timer = setTimeout(() => {
      getSearchSuggestion();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log("json", json[1]);
    setSuggestions(json[1]);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          src={HamBugImg}
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img className="h-8 mx-2" alt="youtube-logo" src={YouTubeLogo} />
        </a>
      </div>
      <div className="input col-span-10 px-10 ">
        <div>
          <input
            placeholder="Search"
            className="w-1/2 border bg-gray-100 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border bg-gray-300 px-4 py-3 rounded-r-full">
            <IoSearchSharp />
          </button>
        </div>
        <div className="fixed bg-white py-2 px-5 w-[26rem] shadow-lg rounded-lg border border-black-100">
          <ul>
            {suggestions.map(
              (s) =>
                s && ( // Check if s is truthy (not empty or undefined)
                  <li
                    key={s}
                    className="flex items-center p-2 shadow-sm hover:bg-gray-100"
                  >
                    <IoSearchSharp />
                    <span className="px-2">{s}</span>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
      <div className="user-logo col-span-1">
        <img className="h-8" alt="user-logo" src={UserLogo} />
      </div>
    </div>
  );
};

export default Head;
