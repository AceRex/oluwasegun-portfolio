import React from "react";

export default function Header() {
  return (
    <nav className="w-[70%] m-auto dark:bg-ar_neutral/10 bg-ar_color1/10 p-5 flex justify-between rounded-b-xl">
      <p className="w-[50%] text-ar_color2 dark:text-ar_neutral text-lg font-bold">
        IaMREX🤴🏿👑
      </p>
      <div className="justify-between text-center flex w-[50%] text-sm">
        <a href="#about_me">About Me</a>
        <a href="#my_skill">My Skill</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <a href="#">My CV</a>
      </div>
    </nav>
  );
}
