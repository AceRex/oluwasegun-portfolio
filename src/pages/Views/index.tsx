import React, { useState } from "react";
import SideProfile from "../../components/side-profile.tsx";
import NavHeader from "../../components/Nav-header.tsx";
import MainView from "./mainView.tsx";
import ViewSideNav from "./ViewsSideNav.tsx";
import { useTheme } from "../../UseContext/context.tsx";

function Hero() {
 const {theme} = useTheme()
  return (
    <div className="flex flex-row gap-5 py-3 px-10 min-h-screen">
      <div className="w-[30%] dark:bg-ar_neutral/10 bg-ar_neutral backdrop-blur-lg max-h-screen p-7 rounded-lg">
        {theme}
        <SideProfile />
      </div>
      <div className="w-[70%] max-h-screen rounded-lg">
        <NavHeader />
        <div className="flex flex-row gap-5 mt-5 h-[85vh]">
          <MainView />
          <ViewSideNav/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
