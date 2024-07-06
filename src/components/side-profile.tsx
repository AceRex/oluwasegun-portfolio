import React from "react";
// @ts-ignore
import ProfileImage from "../assets/Web.png";
import { FaDiscord, FaFacebookF, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useTheme } from "../UseContext/context.tsx";
import SideNavImg from "../assets/sidenavBg.png";
import { motion } from "framer-motion";

export default function SideProfile() {
  const { hireMeModal, setHireMeModal } = useTheme();

  const handleClick = () => {
    setHireMeModal(!hireMeModal);
  };
  return (
    <div className="overflow-hidden p-2 relative">
      <div
        className="w-[100%] h-[100px] rounded-lg bg-ar_color4 p-5 mt-0 m-auto"
        style={{
          backgroundImage: `url(${SideNavImg})`,
          backgroundPosition: "top left",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-[180px] h-[180px] m-auto rounded-full bg-ar_neutral_alpha  -mt-12 p-1">
        <motion.div
         
          className=" w-[100%] h-[100%] overflow-hidden bg-ar_neutral/50 dark:bg-ar_color4 rounded-full"
        >
          {/*  eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <motion.img
          animate={{
            scale: [1, 0, 0, 1, 1],
            rotateY: [0, 0, 180, 180, 0],
          }}
          transition={{
            scale: {
              duration: 0.5,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Infinity,
              repeatDelay: 10,
            },
            rotateY: {
              duration: 1,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Infinity,
              repeatDelay: 10,
            },
          }}
            src={ProfileImage}
            alt="Profile-photo"
            className="dark:grayscale max-sm:w-[270px] -mt-2 max-sm:m-auto max-sm:-mt-4"
          />
        </motion.div>
      </div>
      <div className="px-12">
        <div className="mt-5 ">
          <p className="text-center mt-10 max-sm:mt-2 font-semibold text-2xl max-sm:font-bold">
            Are Oluwasegun Johnson
          </p>
          <p className="text-center max-sm:mt-2 font-normal text-sm dark:text-ar_neutral/50 text-ar_color2">
            Software Engineer & Developer
          </p>
        </div>
        <div className="mt-10 max-sm:mt-6 flex flex-row max-sm:flex-col gap-2 max-sm:gap-2 w-[100%] max-sm:w-[70%] m-auto">
          <button
            onClick={handleClick}
            className="dark:bg-ar_color4 bg-ar_color3 hover:dark:bg-ar_color4/90 hover:dark:bg-ar_color3/50 py-3 px-4 rounded-lg text-ar_neutral font-semibold w-[50%] max-sm:w-[100%]"
          >
            Hire Me!
          </button>
          <a
            href="https://drive.google.com/file/d/1JzmkA4-zT-ZlZ7jJ9TmbQwaMq6rrapAq/view?usp=drive_link"
            target="_blank"
            download
            className="border dark:border-ar_neutral/40 border-ar_color2 py-4 px-3 rounded-lg text-center dark:text-ar_neutral/70 text-ar_color2 font-semibold w-[50%] max-sm:w-[100%]"
          >
            Download CV
          </a>
        </div>
        <div className="mt-10 max-sm:mt-5 w-[90%] m-auto">
          <p className="text-center dark:text-ar_neutral/70 text-ar_color1">
            Frontend major, experienced in Mongo DB, Node JS, Express JS and
            Nest JS backend.
          </p>
        </div>
        <div className="mt-10 max-sm:my-8 flex flex-row justify-between gap-2 w-[80%] m-auto mb-2">
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
          <a
            href="https://stackoverflow.com/users/11398971/dare-ace-rex"
            target="_blank"
            className="dark:text-ar_neutral/70 text-ar_color1 border rounded-lg p-2 hover:dark:bg-ar_color4 hover:bg-ar_color3 hover:dark:border-ar_color4 hover:border-ar_color3 hover:dark:text-ar_neutral hover:text-ar_neutral"
          >
            <FaStackOverflow />
          </a>
        </div>
      </div>
    </div>
  );
}
