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
          <div className="flex justify-between pt-5">
            <div className="space-y-2">
              <h1 className="text-green-600 font-semibold">Available on</h1>
              <div className="flex space-x-2 ">
                <ul className="flex space-x-2 md:space-x-2 md:text-2xl cursor-pointer">
                  <li className="hover:scale-150 duration-300">
                    <a href="http://www.github.com" target="_blank">
                      <FaGithubSquare />
                    </a>
                  </li>
                  <li className="hover:scale-150 duration-300">
                    <a href="http://www.linkedin.com" target="_blank">
                      <IoLogoLinkedin />
                    </a>
                  </li>
                  <li className="hover:scale-150 duration-300">
                    <a href="http://www.facebook.com" target="_blank">
                      <FaFacebookSquare />
                    </a>
                  </li>
                  <li className="hover:scale-150 duration-300">
                    <a href="http://www.telegram.com" target="_blank">
                      <BsTelegram />
                    </a>
                  </li>
                  <li className="hover:scale-150 duration-300">
                    <a href="http://www.youtube.com" target="_blank">
                      <IoLogoYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Technologies */}
            <div>
              <div className="space-y-2">
                <h1 className="text-green-600 font-semibold">
                  Currently Working on
                </h1>
                <div className="flex space-x-2 ">
                  <ul className="flex space-x-1 md:space-x-2 md:text-2xl cursor-pointer">
                    <li className="hover:scale-150 duration-300">
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
