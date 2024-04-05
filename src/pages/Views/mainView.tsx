import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoHandLeftOutline } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import ReactCurvedText from "react-curved-text";
// @ts-ignore
import Logo from "../../assets/aceLogos/ace2.png";
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

export default function MainView() {
  return (
    <div className="w-[90%] flex flex-row gap-12 p-12 bg-ar_neutral/10 backdrop-blur-lg rounded-lg">
      <div className="flex flex-col w-[75%] ">
        <p className="flex flex-row gap-2 text-ar_neutral/70 font-normal">
          <IoHandLeftOutline size={20} className="text-ar_color4" /> Hi there!
        </p>
        <p className="font-light h-[50%] overflow-hidden py-4 leading-none">
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
            style={{ fontSize: "3rem" }}
            repeat={Infinity}
          />
        </p>
      </div>
      <div className="w-[35%] relative flex justify-center text-ar_neutral">
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
        <motion.img
          className="absolute top-8 w-[180px]"
          src={Logo}
          alt="Your Logo"
          initial={{ rotate: 0 }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}
