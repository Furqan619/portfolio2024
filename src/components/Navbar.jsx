import React, { useState } from "react";
import pic from "../../public/pic.png";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Skillset",
    },
    {
      id: 4,
      text: "Certificates",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 bg-white">
        {/* -----------Left----------- */}
        <div className="flex justify-between h-16">
          <div className="flex font-semibold text-xl cursor-pointer my-2">
            <img className="h-12 w-15 rounded-full mx-2" src={pic} alt="" />
            <h1>
              Furqan
              <p className="text-sm ">Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div className="">
            <ul className="md:flex space-x-7 hidden cursor-pointer mt-5">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer hover:text-red-700"
                  key={id}
                >
                  <Link
                    onClick={() => {
                      setMenu(!menu);
                    }}
                    activeClass="active"
                    to={text}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="cursor-pointer md:hidden mt-5"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              {!menu ? <TiThMenu size={24} /> : <IoClose size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar*/}

        {/* Below we are wrapping menu with mobile navbar */}
        {/* if menu activates it also activates menu options */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col items-center justify-center shadow-sm h-80 space-y-5 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold hover:text-red-700"
                  key={id}
                >
                  <Link
                    onClick={() => {
                      setMenu(!menu);
                    }}
                    activeClass="active"
                    to={text}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* -----------Right----------- */}
        <div></div>
      </div>
    </>
  );
}

export default Navbar;
