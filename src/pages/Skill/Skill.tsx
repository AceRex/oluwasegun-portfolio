import React from "react";
import { Frontend_Images } from "./image";

function Skill() {
  return (
    <section
      id="my_skill"
      className="p-28 text-center gap-10 dark:bg-ar_neutral bg-ar_color1 -mx-20 mt-8"
    >
      <h2 className="text-7xl font-normal text-ar_neutral dark:text-ar_color1 w-[70%] m-auto p-8 rounded-lg">
        Experienced in
      </h2>
      <div className="mt-7 w-[80%] m-auto">
        <ul className="grid grid-flow-row grid-cols-9 gap-5">
          {Frontend_Images.map(({ id, img }) => (
            <li key={id} className="w-[40px] h-[40px] mb-5">
              <img src={img} alt={id} className="w-[100px] h-[100px] object-contain object-left-top" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skill;
