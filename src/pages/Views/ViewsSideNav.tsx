import React from "react";
import { GoLightBulb } from "react-icons/go";
import { FaComputer } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { PiHandshake } from "react-icons/pi";
import { LuContact2 } from "react-icons/lu";
import { Tooltip } from "react-tooltip";

// about, skills, my project,  leave a comment, contact, work experience, education
export default function ViewSideNav() {
  return (
    <div className="w-[5%] rounded-lg">
      <div className="w-[100%] flex flex-col py-24 text-xl justify-between items-center h-[100%] bg-ar_neutral/20 text-center text-ar_neutral/80 rounded-lg p-5">
        
        <a id="toolTip"  data-tooltip-content="About Me" className="hover:text-ar_color4"><GoLightBulb /></a>
        <a id="toolTip" data-tooltip-content="My Skill" className="hover:text-ar_color4"> <FaRegStar /></a>
        <a id="toolTip" data-tooltip-content="My Project" className="hover:text-ar_color4"><HiOutlineBriefcase /></a>
        <a id="toolTip" data-tooltip-content="Work Experience" className="hover:text-ar_color4"><PiHandshake /></a>
        <a id="toolTip" data-tooltip-content="Education" className="hover:text-ar_color4"><PiGraduationCap /></a>
        <a id="toolTip" data-tooltip-content="My Contact" className="hover:text-ar_color4"><LuContact2 /></a>
        <a id="toolTip" data-tooltip-content="Leave a Comment" className="hover:text-ar_color4"><HiOutlineChatBubbleLeftEllipsis /></a>
        <Tooltip anchorSelect="#toolTip" place="left" style={{backgroundColor: "#FA58B6"}}/>

      </div>
    </div>
  );
}
