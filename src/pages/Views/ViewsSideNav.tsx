import React from "react";
import { GoLightBulb } from "react-icons/go";
import { FaComputer } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { PiHandshake } from "react-icons/pi";
import { LuContact2 } from "react-icons/lu";

// about, my project, skills, leave a comment, contact, work experience, education
export default function ViewSideNav() {
  return (
    <div className="w-[5%] rounded-lg">
      <div className="w-[100%] flex flex-col py-24 text-xl justify-between items-center h-[100%] bg-ar_neutral/20 text-center text-ar_neutral/80 rounded-lg p-5">
          <GoLightBulb />
        <HiOutlineBriefcase />
        <LuContact2 />
        <FaRegStar />
        <PiGraduationCap />
        <HiOutlineChatBubbleLeftEllipsis />
        <PiHandshake />
      </div>
    </div>
  );
}
