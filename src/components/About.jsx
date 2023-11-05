import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        {/* lorem50 */}
        <p className="text-xl">
        Hello, I'm Davide La Placa, a recent graduate of an immersive, fast-paced full-stack development bootcamp. My journey into the world of web development started with a passion for problem-solving and a desire to create meaningful digital experiences.
        During the bootcamp, I honed my skills in both front-end and back-end development, mastering technologies such as HTML, CSS, JavaScript, Node.js, React, and more. I thrive on the challenge of turning ideas into functional, user-friendly websites and applications. My goal is to make the web a better place through clean, efficient, and elegant code.
        </p>
        <br />
        <p className="text-xl">
        As a full-stack developer, I am equally comfortable working on the user interface as I am with the server-side logic. I love building dynamic web applications that engage users and deliver exceptional experiences. My dedication to continuous learning and staying up-to-date with the latest web development trends allows me to adapt to the rapidly changing tech landscape.
        </p>
      </div>
    </div>
  );
}
