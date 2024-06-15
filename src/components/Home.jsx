import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoGitBranch } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import bigpic from "../../public/big_pic.png";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
<FaSquareWhatsapp />;

function Home() {
  return (
    <div
      name="Home"
      className="container max-w-screen-2xl mx-auto px-4 md:px-20 my-20"
    >
      <div className="md:flex-row flex-col flex">
        {/* Left */}
        <div className="md:w-1/2 md:mt-24 mt-12 space-y-2 md:order-1 order-2">
          <div className="text-xl">
            Welcome to my{" "}
            <span className="text-green-700 font-bold">Portfolio</span>
          </div>
          <div className="flex md:text-4xl text-2xl space-x-1">
            <h1>Hello, I'm a&nbsp;</h1>
            {/* <span className='text-red-700'>Developer</span> */}
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
          <br />
          <p className="text-sm md:text-md text-justify">
            Innovative Frontend Web Developer carrying 3.5 years of experience
            with a strong foundation in programming and problem solving,
            experience in React.js frontend development, agile methodologies,
            passionate about staying up-to-date with emerging technologies and
            collaborating with cross-functional team to deliver cutting edge
            products.
          </p>
          <br />
          <br />
          {/* social media icons */}
          <div className="flex flex-col md:flex-row justify-between pt-5 space-y-6 md:space-y-0 ">
            <div className="space-y-2">
              <h1 className="text-green-600 font-semibold text-center ">
                Available on
              </h1>
              <div className="flex space-x-5 ">
                <ul className="flex space-x-4 md:space-x-2 md:text-2xl cursor-pointer m-auto">
                  <li className="hover:scale-150 duration-300">
                    <a href="tel:8886195979" target="_blank">
                      <IoCall size={25} />
                    </a>
                  </li>
                  <li className="hover:scale-150 duration-300">
                    <a href="whatsapp://call?number=8886195979" target="_blank">
                      <FaSquareWhatsapp size={25} />
                    </a>
                  </li>

                  <li className="hover:scale-150 duration-300">
                    <a href="mailto:ahmedev247@gmail.com" target="_blank">
                      <MdMail size={25} />
                    </a>
                  </li>
                  <li className="hover:scale-150 duration-300">
                    <a href="https://github.com/Furqan619" target="_blank">
                      <FaGithubSquare size={25} />
                    </a>
                  </li>
                  <li className="hover:scale-150 duration-300">
                    <a href="www.linkedin.com/in/furqanwebdev" target="_blank">
                      <IoLogoLinkedin size={25} />
                    </a>
                  </li>
                  <li className="hover:scale-150 duration-300">
                    <a
                      href="https://www.facebook.com/furqan.mohammed.37"
                      target="_blank"
                    >
                      <FaFacebookSquare size={25} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Technologies */}
            <div>
              <div className="space-y-2">
                <h1 className="text-green-600 font-semibold text-center">
                  Currently Working on
                </h1>
                <div className="flex space-x-2 ">
                  <ul className="flex space-x-2 space-x-5 md:space-x-2 md:text-2xl cursor-pointer m-auto">
                    <li className="hover:scale-150 duration-300 ">
                      <BiLogoMongodb />
                    </li>
                    <li className="hover:scale-150 duration-300">
                      <SiExpress />
                    </li>
                    <li className="hover:scale-150 duration-300">
                      <RiReactjsLine />
                    </li>
                    <li className="hover:scale-150 duration-300">
                      <FaNodeJs />
                    </li>
                    <li className="hover:scale-150 duration-300">
                      <SiTailwindcss />
                    </li>
                    <li className="hover:scale-150 duration-300">
                      {" "}
                      <IoGitBranch />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="mt-5 px-20 order-1 md:order-2 mb-10">
          <img
            className="rounded-full hover:animate-pulse duration-75"
            src={bigpic}
            alt=""
          />
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Home;
