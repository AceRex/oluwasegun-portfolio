import React from "react";
// @ts-ignore
import ProfileImage from "../assets/Web.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function SideProfile() {
  
  return (
    <>
      <div className=" w-[200px] h-[200px] mt-5 rounded-lg overflow-hidden m-auto dark:bg-ar_color3 bg-ar_color4">
        <img
          src={ProfileImage}
          alt="Profile-photo"
          className="object-contain"
        />
      </div>
      <div className="mt-5">
        <p className="text-center mt-10 font-semibold text-3xl">
          Are Oluwasegun Johnson
        </p>
        <p className="text-center font-normal text-sm dark:text-ar_neutral/50 text-ar_color2">
          Software Engineer & Developer
        </p>
      </div>
      <div className="mt-10 flex flex-row gap-2 w-[100%] m-auto">
        <button className="dark:bg-ar_color4 bg-ar_color3 hover:dark:bg-ar_color4/90 hover:dark:bg-ar_color3/50 py-3 px-4 rounded-lg text-ar_neutral font-semibold w-[50%]">
          Hire Me!
        </button>
        <a href="/assets/CV/AREOLUWASEGUNCV.pdf" download={"ARE_Oluwasegun_CV.pdf"} className="border dark:border-ar_neutral/40 border-ar_color2 py-4 px-3 rounded-lg text-center dark:text-ar_neutral/70 text-ar_color2 font-semibold w-[50%]">
          Download CV
        </a>
      </div>
      <div className="mt-10 flex flex-row gap-2 w-[90%] m-auto">
        <p className="text-center dark:text-ar_neutral/70 text-ar_color1">
          Frontend major, experienced in Mongo DB, Node JS, Express JS and Nest
          JS backend.
        </p>
      </div>
      <div className="mt-10 flex flex-row justify-between gap-2 w-[50%] m-auto">
        <a
          href="https://www.linkedin.com/in/oluwasegun-are-035b8a140/"
          target="_blank"
          className="dark:text-ar_neutral/70 text-ar_color1 border rounded-lg p-2 hover:dark:bg-ar_color4 hover:bg-ar_color3 hover:dark:border-ar_color4 hover:border-ar_color3 hover:dark:text-ar_neutral hover:text-ar_neutral"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href="https://web.facebook.com/rexareswag"
          target="_blank"
          className="dark:text-ar_neutral/70 text-ar_color1 border rounded-lg p-2 hover:dark:bg-ar_color4 hover:bg-ar_color3 hover:dark:border-ar_color4 hover:border-ar_color3 hover:dark:text-ar_neutral hover:text-ar_neutral"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.x.com/AreOluwasegun"
          target="_blank"
          className="dark:text-ar_neutral/70 text-ar_color1 border rounded-lg p-2 hover:dark:bg-ar_color4 hover:bg-ar_color3 hover:dark:border-ar_color4 hover:border-ar_color3 hover:dark:text-ar_neutral hover:text-ar_neutral"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.instagram.com/oluwatisegunrex/"
          target="_blank"
          className="dark:text-ar_neutral/70 text-ar_color1 border rounded-lg p-2 hover:dark:bg-ar_color4 hover:bg-ar_color3 hover:dark:border-ar_color4 hover:border-ar_color3 hover:dark:text-ar_neutral hover:text-ar_neutral"
        >
          <FaInstagram />
        </a>
      </div>
    </>
  );
}
