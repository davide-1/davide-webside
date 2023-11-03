import React from "react";
import heroImage from "../assets/IMG/heroImage.jpg";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <div name="home" className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold text-white">Fullstack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">Full-Stack Developer with over 6 years of experience operating a family business gaining invaluable experience in managing a business, teamwork, critical thinking, decision-making and problem-solving.</p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRight 
                className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div>
            <img src={heroImage} 
            alt="my profile" 
            className=" rounded-2xl mx-auto w-2/3 md:w-2/4"
            />
        </div>
      </div>
    </div>
  );
}
