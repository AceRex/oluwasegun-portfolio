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
      <div className=" w-[200px] h-[200px] mt-5 rounded-lg overflow-hidden m-auto bg-ar_color3">
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
        <p className="text-center font-normal text-sm text-ar_neutral/50">
          Software Engineer & Developer
        </p>
      </div>
      <div className="mt-10 flex flex-row gap-2 w-[100%] m-auto">
        <button className="bg-ar_color4 py-3 px-4 rounded-lg text-ar_neutral font-semibold w-[50%]">
          Hire Me!
        </button>
        <button className="border border-ar_neutral/40 py-4 px-3 rounded-lg text-ar_neutral/70 font-semibold w-[50%]">
          Download CV
        </button>
      </div>
      <div className="mt-10 flex flex-row gap-2 w-[90%] m-auto">
        <p className="text-center text-ar_neutral/70">
          Frontend major, experienced in Mongo DB, Node JS, Express JS and Nest
          JS backend.
        </p>
      </div>
      <div className="mt-10 flex flex-row justify-between gap-2 w-[50%] m-auto">
        <a
          href="https://www.linkedin.com/in/oluwasegun-are-035b8a140/"
          target="_blank"
          className="text-ar_neutral/70 border rounded-lg p-2"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href="https://web.facebook.com/rexareswag"
          target="_blank"
          className="text-ar_neutral/70 border rounded-lg p-2"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.x.com/AreOluwasegun"
          target="_blank"
          className="text-ar_neutral/70 border rounded-lg p-2"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.instagram.com/oluwatisegunrex/"
          target="_blank"
          className="text-ar_neutral/70 border rounded-lg p-2"
        >
          <FaInstagram />
        </a>
      </div>
    </>
  );
}
