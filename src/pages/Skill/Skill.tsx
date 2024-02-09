import React from "react";
import { Frontend_Images } from "./image";

function Skill() {
  return (
    <section
      id="my_skill"
      className="p-28 text-center gap-8 dark:bg-ar_neutral bg-ar_color1 -mx-20 mt-8"
    >
      <h2 className="text-7xl font-extrabold text-ar_neutral dark:text-ar_color1 w-[70%] m-auto p-8 rounded-lg">
        Experienced in
      </h2>
      <div className="mt-7">
        <ul className="grid grid-flow-row grid-cols-8 gap-10">
          {Frontend_Images.map(({ id, img }) => (
            <li key={id} className="w-[70px] h-[70px]">
              <img src={img} alt={id} className="w-[100px] h-[100px] object-contain object-left-top" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skill;
