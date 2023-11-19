import React from "react";



export default function Contact() {
    return (
        <div name="contact" className=" w-full h-screen  bg-gradient-to-b from-gray-800 to-black p-4 text-white">
            <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className=" mt-48 sm:mt-0 pb-8 ">
                    <p className=" text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/8bc5587d-8bdb-4662-9e29-878431b0e7f5" 
                    method="POST"
                    className="flex flex-col w-full md:w-1/2">
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea 
                        name="message"
                        placeholder="Enter your message"
                        rows="10"
                        className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <button className=" text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Submit
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )
}