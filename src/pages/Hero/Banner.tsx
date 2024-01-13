import React from "react";
import { TypeAnimation } from "react-type-animation";
// @ts-ignore
import ProfileImage from "../../assets/Web.png";

function Banner() {
  return (
    <div className="p-12 flex content-center">
      <div className="w-[45%]">
        <span className="uppercase font-semibold dark:text-ar_color2 text-ar_neutral text-sm bg-ar_color4 rounded-md p-3">
          💡 software developer | Creative Designer
        </span>
        <p className="dark:text-ar_neutral text-ar_color2 text-7xl font-bold pt-5 leading-tight">
          <TypeAnimation
            sequence={[
              `Hi there 👋🏾,\nI am Are Oluwasegun Johnson...`,
              1000,
              "But please call me Rex.",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </p>
      </div>
      <div className="w-[45%]">
        <img src={ProfileImage} className="w-25" />
      </div>
    </div>
  );
}

export default Banner;
