import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { IoHandLeftOutline } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import ReactCurvedText from "react-curved-text";
// @ts-ignore
import Logo from "../../assets/aceLogos/ace3.png";
import LogoW from "../../assets/aceLogos/AcelogoWhite.png";
import {
  width,
  height,
  cx,
  cy,
  rx,
  ry,
  startOffset,
  reversed,
  text,
  textProps,
  textPathFill,
  textPathProps,
  tspanProps,
  ellipseProps,
} from "./roundedTextProperty/roundedTextEffectPpt.tsx";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { useTheme } from "../../UseContext/context.tsx";

export default function MainView() {
  const { theme } = useTheme();
  return (
    <div className="w-[95%] max-sm:w-[100%] flex flex-col gap-7 relative p-12 max-sm:p-5  dark:bg-ar_neutral/10 bg-ar_neutral backdrop-blur-lg rounded-lg">
      <div className="flex flex-row gap-12 w-[100%] h-[90%] max-sm:mt-5 overflow-hidden">
        <div className="flex flex-col w-[75%] max-sm:w-[100%] ">
          <p className="flex flex-row gap-2 dark:text-ar_neutral/70 text-ar_color4 font-normal">
            <IoHandLeftOutline
              size={20}
              className="dark:text-ar_color4 text-ar_color3"
            />{" "}
            Hi there!
          </p>
          <p className="font-light py-4 max-sm:h-[45vh] max-sm:py-2 leading-none">
            <TypeAnimation
              sequence={[
                `I turn beautiful designs into functional realities, `,
                1000,
                "I create Seamless view that works on any device.",
                1000,
                "Craft an unified experience: Linking backend to frontend.",
                1000,
                "Empower with backend API creation.",
                1000,
                "Proficient in developing desktop, mobile, and web applications.",
                1000,
                "Expertly utilize state management technologies effectively.",
                1000,
                "Feel free to call me Rex",
                2000,
              ]}
              speed={50}
              style={{ fontSize: "50px" }}
              repeat={Infinity}
            />
          </p>
        </div>
        <div className={`w-[35%] max-sm:w-[100%] max-sm:absolute max-sm:-top-[55em] max-sm:left-[12rem] flex justify-center `}>
          {/* @ts-ignore */}
          <ReactCurvedText
            width={width}
            height={height}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            startOffset={startOffset}
            reversed={reversed}
            text={text}
            textProps={textProps}
            textPathProps={textPathProps}
            tspanProps={tspanProps}
            ellipseProps={ellipseProps}
            svgProps={{ className: "rotating-curved-text absolute " }}
          />
          {theme != "dark" ? (
            <motion.img
              className="absolute top-20 max-sm:top-5 w-[180px]"
              src={LogoW}
              alt="Your Logo"
              initial={{ rotate: 0 }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          ) : (
            <motion.img
              className="absolute top-20 max-sm:top-5 w-[180px]"
              src={Logo}
              alt="Your Logo"
              initial={{ rotate: 0 }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col  rounded-lg p-4 dark:bg-ar_color1 bg-ar_neutral_alpha">
        <p>
          {"<"}
          <span className="text-ar_color4 dark:text-ar_color4">{"head"}</span>
          {">"}
        </p>
        <p className="ml-8">
          {"<"}
          <span className="text-ar_color4 dark:text-ar_color4">title</span>
          {">"}
          <span className="text-[#2dd4bf] dark:text-[#2dd4bf]">{`My Portfolio`}</span>
          {"</"}
          <span className="text-ar_color4 dark:text-ar_color4">title</span>
          {">"}
        </p>
        <p className="ml-8">
          {"<"}
          <span className="text-ar_color4 dark:text-ar_color4">link</span>
          {` rel="Hire_Me" href="`}
          <span className="text-[#f59e0b] dark:text-[#f59e0b]">contact_below</span>
          {`"/>`}
        </p>
        <p>
          {"</"}
          <span className="text-ar_color4 dark:text-ar_color4">{"head"}</span>
          {">"}
        </p>
        <p>
          {"<"}
          <span className="text-ar_color4 dark:text-ar_color4">{"body"}</span>
          {">"}
        </p>
      </div>
      <div className="flex flex-row max-sm:flex-col gap-5 w-[90%]">
        <div className="w-[50%] max-sm:w-[100%] flex flex-row items-center">
          <div className="w-[20%] text-ar_color4">
            <MdOutlineMarkEmailUnread size={60} />
          </div>
          <div className="w-[80%] text-sm max-sm:text-start flex flex-col max-sm:text-base text-ar_color4">
            <a href="mailto: johnsonare2207@gmail.com">
              Johnsonare2207@gmail.com
            </a>
            <a href="mailto: johnsonare0722@gmail.com">
              Johnsonare0722@gmail.com
            </a>
          </div>
        </div>
        <div className="w-[50%] max-sm:w-[100%] flex flex-row max-sm:text-center max-sm:text-base items-center">
          <div className="w-[20%] text-ar_color4">
            <MdOutlinePhoneInTalk size={50} />
          </div>
          <div className="w-[80%] max-sm:text-start flex flex-col text-sm text-ar_color4">
            <a href="tel:+2347035042130">+234 703 504 2130</a>
            <a href="tel:+2348088735524">+234 808 873 5524</a>
          </div>
        </div>
      </div>
    </div>
  );
}
