import React from 'react'
import Mongodb from '../../public/Mongodb.png';
import Node from '../../public/Node.png';
import JavaScript from '../../public/JavaScript.png';
import Git from '../../public/Git.png';
import ReactLogo from '../../public/React.png';
import Tailwind_CSS from '../../public/Tailwind_CSS.png';
import Express from '../../public/Express.png';

function Skillset() {
  const cardItem = [
    {
      id: 1,
      logo: Mongodb,
      name: "Mongodb",
      text: "Worked with Mongodb Comapass & Atlas server based database"
    },
    {
      id: 2,
      logo: Express,
      name: "Express",
      text: "Practiced on Node framework Express to work with API's"
    },
    {
      id: 3,
      logo: ReactLogo,
      name: "React",
      text: "Hands-on Experience with React Hooks & Libraries"
    },
    {
      id: 4,
      logo: Node,
      name: "Node",
      text: "Experienced Node executing JavaScript code outside a web browser."
    },
    {
      id: 5,
      logo: JavaScript,
      name: "JavaScript",
      text: "Proficient with ES6 features of javaScript"
    },
    {
      id: 6,
      logo: Tailwind_CSS,
      name: "Tailwind CSS",
      text: "Got Hands dirty with rapid fast CSS, a boon for developers"
    },
    {
      id: 7,
      logo: Git,
      name: "Git",
      text: "Git Keeps my code up to date & helps me in collaboration"
    },



  ]


  return (

    
    <div
      name="Skillset"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skill set</h1>
        <span className=" underline text-xl">I Worked With the Technologies</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 my-10 align-content">
          {cardItem.map(({ id, logo, name, text }) => (
            <div
              className="md:w-[280px] md:h-[280px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 justify-center align-content m-auto"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] m-auto"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2 text-center">{name}</div>
                <p className="px-1 text-gray-700 text-center text-sm">
                  {text}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded hover:animate-bounce">
                  Explore
                </button>
                {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button> */}
              </div>

            </div>


          ))}


        </div>
      </div>
      <br />
      <br />
      <hr />

    </div>
  )
}

export default Skillset;
