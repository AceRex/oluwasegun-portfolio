import React from "react";
import SideProfile from "../../components/side-profile.tsx";
import NavHeader from "../../components/Nav-header.tsx";
import MainView from "./mainView.tsx";
import ViewSideNav from "./ViewsSideNav.tsx";
import { motion } from "framer-motion";

function Hero() {
  // @ts-ignore
  return (
    <div className="flex flex-row max-sm:flex-col gap-5 py-3 px-10 max-sm:px-3 max-lg:min-h-screen max-sm:min-h-[225vh] relative overflow-hidden">
      <motion.div
       
        className="w-[30%] max-sm:w-[100%] dark:bg-ar_neutral/10 bg-ar_neutral backdrop-blur-lg max-h-screen max-sm:p-0 rounded-lg"
      >
        <SideProfile />
      </motion.div>
      <div className="w-[70%] max-sm:w-[100%] max-h-screen rounded-lg relative ">
        <NavHeader />
        <div className="flex relative flex-row max-sm:flex-col-reverse gap-5 mt-5 h-[85vh] max-sm:h-[100%] ">
          <MainView />
          <ViewSideNav />
        </div>
      </div>
    </div>
  );
}

export default Hero;
