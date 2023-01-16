import React, { useState } from "react";
import Button from "./Button";

export const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/" },
    { name: "Blogs", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-40">
        <div className="md:flex items-center justify-between bg-white py-5 px-5">
          <div className="flex item-center font-bold text-2xl cursor-pointer">
            Space
            <span className="text-3xl text-indigo-600 mr-1">X</span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-1xl absolute right-4 top-5 cursor-pointer md:hidden"
          >
            {open ? "CLOSE" : "MENU"}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static
          bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 
          pl-5 transition-all duration-500 ease-in ${
            open ? "top-30" : "top-[-260px]"
          }`}
          >
            {Links.map((link) => {
              return (
                <li
                  key={link.name}
                  className="md:flex items-center md:ml-8 text md:my-0 my-5"
                >
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-gray-500 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            <div className="md:ml-8">
              <Button>Get Started</Button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
