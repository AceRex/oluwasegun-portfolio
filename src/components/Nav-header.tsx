import React from "react";
// @ts-ignore
import Logo from "../assets/aceLogos/ace2.png";
import { MdLightMode } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

export default function NavHeader() {
  return (
    <div className="flex flex-row gap-5 justify-between">
      {/* Nav Header */}
      <div className="w-[95%] p-1 py-0 bg-ar_neutral/10 backdrop-blur-lg rounded-lg flex flex-row justify-between items-center">
        <div className="w-[95%] flex flex-row gap-1 items-center">
          <div className="w-[70px] h-[70px] overflow-hidden p-3">
            <img
              src={Logo}
              alt="ace-Logo-2"
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="p-5 flex flex-row gap-6 text-ar_neutral/70 text-sm font-normal">
            <li>Home</li>
            <li>Hire Me!</li>
          </ul>
        </div>
        <div className="w-[5%] content-center text-ar_color4">
          <MdLightMode size={25} />
        </div>
      </div>
      <div className="w-[5%] py-0">
        <div className="w-[100%] flex items-center h-[100%] bg-ar_neutral/20 text-center text-ar_neutral/80 rounded-lg p-3 text-2xl">
          <HiMenuAlt3 size={30} />
        </div>
      </div>
    </div>
  );
}
