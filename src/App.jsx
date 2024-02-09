import React from "react";
import AboutMe from "./pages/AboutMe.tsx";
import Hero from "./pages/Hero/Hero.tsx";
import Skill from "./pages/Skill/Skill.tsx";

export default function App() {
  return (
    <div id="reader" className="container m-auto">
      <Hero />
      <AboutMe />
      <Skill />
    </div>
  );
}
