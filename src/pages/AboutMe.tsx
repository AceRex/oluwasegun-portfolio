import React from "react";

function AboutMe() {
  return (
    <section
      id="about_me"
      className="p-12 grid grid-flow-col grid-cols-3 gap-8"
    >
      <div className="">
        <h2 className="text-right text-7xl font-extrabold bg-ar_color4 p-8 rounded-lg">
          ABOUT ME
        </h2>
        <p className="text-justify text-lg mt-4 font-light">
          <span className="text-3xl font-bold">I</span> am a self-taught
          enthusiast in software development, passionate about creating software
          that provides equal opportunities to everyone, regardless of their
          financial capabilities or level of expertise. My goal is to make a
          significant contribution to the world's economy by providing
          tech-based solutions for different aspects of living, such as
          hospitality, healthcare, and more. I also aspire to be a valuable team
          player who supports the growth of existing businesses.
        </p>
      </div>
      <div className="">
        <p className="text-justify text-lg mt-4 font-light">
          <span className="text-3xl font-bold">A</span>s a versatile software
          developer, I possess a diverse set of skills. I am an expert in the
          MERN stack (MongoDB, Express.js, React, and Node.js), TypeScript,
          JavaScript, CSS, Sass, HTML, EJS, React Native, and UI design. These
          skills allow me to tackle web and mobile development from multiple
          angles. I use Figma to create visually appealing and user-friendly
          interfaces. I have experience working with both SQL and NoSQL
          databases, and I am passionate about creating well-designed,
          user-friendly web and mobile applications that utilize the latest
          technologies. My love for innovation and problem-solving drives me to
          continuously seek out new technologies and development methodologies.
        </p>
      </div>
      <div className="">
        <p className="text-justify text-lg mt-4 font-light">
          <span className="text-3xl font-bold">W</span>ith my well-rounded skill
          set and eagerness to take on new challenges, I am confident in my
          ability to help any team or organization create polished and robust
          web and mobile applications that meet industry standards and user
          needs. I am always seeking new and challenging opportunities to
          improve my skill set and grow as a developer.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
