import React, { useState } from "react";
// @ts-ignore
import Logo from "../assets/aceLogos/ace2.png";
// @ts-ignore
import Logo1 from "../assets/aceLogos/ace3.png";
import { MdLightMode } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../UseContext/context.tsx";

export default function NavHeader() {
  const [darkMode, setDarkMode] = useState(false);
  const {toggleTheme} = useTheme()

  const toggleDarkMode = () => {
    toggleTheme()
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="flex flex-row gap-5 justify-between">
      {/* Nav Header */}
      <div className="w-[95%] p-1 py-0 dark:bg-ar_neutral/10 bg-ar_neutral backdrop-blur-lg rounded-lg flex flex-row justify-between items-center">
        <div className="w-[95%] flex flex-row gap-1 items-center">
          <div className="w-[70px] h-[70px] overflow-hidden p-3">
            {darkMode ? (
              <img
                src={Logo}
                alt="ace-Logo-2"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={Logo1}
                alt="ace-Logo-3"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <ul className="p-5 flex flex-row gap-6 dark:text-ar_neutral/70 text-ar_color3 text-sm font-normal">
            <li>Home</li>
            <li>Hire Me!</li>
          </ul>
        </div>
        <div
          className="w-[5%] content-center dark:text-ar_color4 text-ar_color3"
          onClick={toggleDarkMode}
        >
          {darkMode ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
        </div>
      </div>
      <div className="w-[5%] py-0">
        <div className="w-[100%] flex items-center h-[100%] dark:bg-ar_neutral/20 bg-ar_neutral text-center dark:text-ar_neutral/80 text-ar_color4 rounded-lg p-3 text-2xl">
          <HiMenuAlt3 size={30} />
        </div>
      </div>
    </div>
  );
}
