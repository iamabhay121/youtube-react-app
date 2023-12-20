import React from "react";
import { useDispatch } from "react-redux";
import HamBugImg from "../assets/hamMenu.jpg";
import YouTubeLogo from "../assets/youtube-logo.webp";
import UserLogo from "../assets/user-logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { toggleMenu } from "../utils/features/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
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
      <div className="input col-span-10 px-12 ">
        <input
          placeholder="Search"
          className="w-1/2 border bg-gray-100 p-2 rounded-l-full"
          type="text"
        />
        <button className="border bg-gray-300 px-4 py-3 rounded-r-full">
          <IoSearchSharp />
        </button>
      </div>
      <div className="user-logo col-span-1">
        <img className="h-8" alt="user-logo" src={UserLogo} />
      </div>
    </div>
  );
};

export default Head;
