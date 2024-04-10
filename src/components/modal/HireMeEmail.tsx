import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../../UseContext/context.tsx";

export default function HireMe() {
  const [hireMeName, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const { hireMeModal, setHireMeModal, msgSent, setMsgSent } = useTheme();
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
    setHireMeModal(!hireMeModal);
    setMsgSent(!msgSent);
  };

  return (
    <div className="absolute max-md:fixed top-0 left-0 dark:bg-ar_color1/20 bg-ar_color1/40 backdrop-blur-lg z-0 h-screen w-screen max-sm:min-h-screen p-12 max-sm:p-2">
      <form className="dark:bg-ar_color1 bg-ar_neutral_alpha w-[50%] max-sm:w-[100%] m-auto p-24 max-sm:p-5 max-sm:py-10 text-center rounded-xl">
        <div className="mb-6">
          <p className="font-extrabold text-4xl max-sm:text-3xl text-ar_color4 dark:text-ar_color4">
            Hire Me!
          </p>
          <p className="max-sm:text-sm">
            Thank you for your interest in me, kindly fill the form below and I
            will reach out to you as soon as you click the send button
          </p>
        </div>
        <div className="flex flex-col text-left gap-2 mb-4">
          <label className="font-semibold ml-1  dark:text-ar_neutral text-ar_color1">
            Name
          </label>
          <input
            value={hireMeName}
            type="text"
            name="user_name"
            className="p-2 px-5 rounded-lg"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-left gap-2 mb-4">
          <label className="font-semibold ml-1 dark:text-ar_neutral text-ar_color1">
            Email
          </label>
          <input
            value={email}
            type="email"
            name="user_email"
            className="p-2 px-5 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-left gap-2 mb-4">
          <label className="font-semibold ml-1 dark:text-ar_neutral text-ar_color1">
            Message
          </label>
          <textarea
            value={message}
            name="message"
            className="p-2 px-5 rounded-lg h-20 mb-3"
            onChange={(e) => setMessage(e.target.value)}
          >
            {" "}
          </textarea>
        </div>
        <div className="flex flex-row max-sm:flex-col-reverse gap-2">
          <button
            type="submit"
            onClick={handleClose}
            className="p-3 rounded-lg border border-ar_color4 dark:border-ar_neutral_alpha w-[70%] max-sm:w-[100%] dark:text-ar_neutral_alpha text-ar_color4 dark:text-ar_color1"
          >
            {" "}
            Close{" "}
          </button>{" "}
          <button
            type="submit"
            onClick={sendEmail}
            className="p-3 rounded-lg bg-ar_color2 dark:bg-ar_color4 w-[70%] max-sm:w-[100%] text-ar_neutral dark:text-ar_color1"
          >
            {" "}
            Send{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
