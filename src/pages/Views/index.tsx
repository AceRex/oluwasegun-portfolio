import React, { useState } from "react";
import SideProfile from "../../components/side-profile.tsx";
import NavHeader from "../../components/Nav-header.tsx";
import MainView from "./mainView.tsx";

function Hero() {
  // const [color, setColor] = useState("#FA58B6");

  return (
    <div className="flex flex-row gap-5 py-3 px-10 min-h-screen">
      <div className="w-[30%] bg-ar_neutral/10 backdrop-blur-lg max-h-screen p-7 rounded-lg">
        <SideProfile />
      </div>
      <div className="w-[70%] max-h-screen rounded-lg">
        <NavHeader />
        <div className="flex flex-row gap-5 mt-5 h-[85vh]">
          <MainView />
          <div className="w-[10%] p-5 bg-ar_neutral/10 backdrop-blur-lg rounded-lg">
            something
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
