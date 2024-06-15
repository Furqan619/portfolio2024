import React from "react";
import mern from "../../public/certificate-1.jpg";
import ui from "../../public/certificate-2.jpg";
import code from "../../public/certificate-3.jpeg";
import udemy from "../../public/Udemy.jpg";

function Certificates() {
  const cardItem = [
    {
      id: 1,
      logo: mern,
      name: "Mern Technology",
      text: `Institute: Naresh IT, HYD Course: Mern Stack Develpment  Duration: (Dec-2023 to April-2024)`,
    },
    {
      id: 2,
      logo: udemy,
      name: "Web Development",
      text: `Institute: Udemy Online  Course: Web dev Bootcamp  Duration: (April-2023 to July-2023)`,
    },
    {
      id: 3,
      logo: ui,
      name: "UI Technology",
      text: `Institute: Durgasof Technologies  Course: UI Develpment  Duration: (Nov-2019 to Jun-2020)`,
    },
    {
      id: 4,
      logo: code,
      name: "Code Certificate",
      text: `Website: Code.org, Challenge: Code Online`,
    },
  ];

  return (
    <>
      <div
        name="Certificates"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Certifications</h1>
          <span className=" underline text-xl">
            I have Certified in these Technologies
          </span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 my-10 align-content justify-center  m-auto">
            {cardItem.map(({ id, logo, name, text }) => (
              <div
                className="   p-1 cursor-pointer hover:scale-110 duration-300 justify-center align-content m-auto"
                key={id}
              >
                <a
                  href="http://localhost:5173/public/certificate-1.jpg"
                  target="_blank"
                >
                  <img
                    src={logo}
                    className="w-[200%] h-[200%]  border-[2px] m-auto mb-6"
                    alt=""
                  />
                </a>

                <div>
                  <div className="px-2 font-bold text-xl mb-2 text-center mt-2">
                    {name}
                  </div>
                  <p className="px-2 text-gray-700 text-center text-sm">
                    {text}
                  </p>
                </div>
                <div className=" px-6 py-4 space-x-3 text-center">
                  {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded hover:animate-bounce">
                  Explore
                </button> */}
                  {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Certificates;
