import React from "react";
import { GoLightBulb } from "react-icons/go";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { PiHandshake } from "react-icons/pi";
import { LuContact2 } from "react-icons/lu";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

// about, skills, my project,  leave a comment, contact, work experience, education
export default function ViewSideNav() {
  return (
    <div className="w-[5%] sticky top-0 max-sm:w-[100%] rounded-lg">
      <div className="w-[100%] flex flex-col max-sm:flex-row py-24 max-sm:py-5 text-xl justify-between items-center h-[100%] dark:bg-ar_neutral/20 bg-ar_neutral text-center dark:text-ar_neutral/80 text-ar_color3 rounded-lg p-5">
        <Link
          to={"/about-me"}
          id="toolTip"
          data-tooltip-content="About Me"
          className="hover:text-ar_color4"
        >
          <GoLightBulb />
        </Link>
        <Link to={"/my-skill"}
          id="toolTip"
          data-tooltip-content="My Skill"
          className="hover:text-ar_color4"
        >
          {" "}
          <FaRegStar />
        </Link>
        <Link to={"/my-project"}
          id="toolTip"
          data-tooltip-content="My Project"
          className="hover:text-ar_color4"
        >
          <HiOutlineBriefcase />
        </Link>
        <Link to={"/work-experience"}
          id="toolTip"
          data-tooltip-content="Work Experience"
          className="hover:text-ar_color4"
        >
          <PiHandshake />
        </Link>
        <Link to="/education"
          id="toolTip"
          data-tooltip-content="Education"
          className="hover:text-ar_color4"
        >
          <PiGraduationCap />
        </Link>
        <Link to={"/my-contact"}
          id="toolTip"
          data-tooltip-content="My Contact"
          className="hover:text-ar_color4"
        >
          <LuContact2 />
        </Link>
        <Link to={"/leave-a-comment"}
          id="toolTip"
          data-tooltip-content="Leave a Comment"
          className="hover:text-ar_color4"
        >
          <HiOutlineChatBubbleLeftEllipsis />
        </Link>
        <Tooltip
          anchorSelect="#toolTip"
          place="left"
          style={{ backgroundColor: "#FA58B6" }}
        />
      </div>
    </div>
  );
}
