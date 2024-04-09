import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../../UseContext/context.tsx";

export default function HireMe() {
  const [hireMeName, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const { hireMeModal, setHireMeModal } = useTheme();
  const handleClose = () => {
    setHireMeModal(!hireMeModal);
  };
  const templateParams = {
    from_name: hireMeName,
    from_email: email,
    to_name: "Are Oluwasegun Johnson",
    message: message,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_vi6pm3l",
        "template_ibx4bth",
        templateParams,
        "Rrhy3QTtv3cnLoLQ9"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="absolute top-0 left-0 dark:bg-ar_color1/20 bg-ar_color1/40 backdrop-blur-lg z-0 h-screen w-screen p-12">
      <form className="dark:bg-ar_color1 bg-ar_neutral_alpha w-[50%] m-auto p-24 text-center rounded-xl">
        <div className="mb-6">
          <p className="font-extrabold text-4xl text-ar_color4 dark:text-ar_color4">Hire Me!</p>
          <p>
            Thank you for your interest in me, kindly fill the form below and I
            will reach out to you as soon as you click the send button
          </p>
        </div>
        <div className="flex flex-col text-left gap-2 mb-4">
          <label className="font-semibold ml-1 text-ar_neutral">Name</label>
          <input
            value={hireMeName}
            type="text"
            name="user_name"
            className="p-2 px-5 rounded-lg"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-left gap-2 mb-4">
          <label className="font-semibold ml-1 text-ar_neutral">Email</label>
          <input
            value={email}
            type="email"
            name="user_email"
            className="p-2 px-5 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-left gap-2 mb-4">
          <label className="font-semibold ml-1 text-ar_neutral">Message</label>
          <textarea
            value={message}
            name="message"
            className="p-2 px-5 rounded-lg h-20 mb-3"
            onChange={(e) => setMessage(e.target.value)}
          >
            {" "}
          </textarea>
        </div>
        <div className="flex flex-row gap-2">
          <button
            type="submit"
            onClick={handleClose}
            className="p-3 rounded-lg border border-ar_color4 dark:border-ar_neutral_alpha w-[70%] dark:text-ar_neutral_alpha text-ar_color4 dark:text-ar_color1"
          >
            {" "}
            Close{" "}
          </button>{" "}
          <button
            type="submit"
            onClick={sendEmail}
            className="p-3 rounded-lg bg-ar_color2 dark:bg-ar_color4 w-[70%] text-ar_neutral dark:text-ar_color1"
          >
            {" "}
            Send{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
