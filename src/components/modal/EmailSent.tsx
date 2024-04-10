import React, { useEffect } from "react";
import { useTheme } from "../../UseContext/context.tsx";

export default function EmailSent() {
  const { msgSent, setMsgSent } = useTheme();
  useEffect(() => {
    setTimeout(() => {
      setMsgSent(!msgSent);
    }, 3000);
  }, []);
  return (
    <div className="absolute max-md:fixed top-0 left-0 dark:bg-ar_color1/20 bg-ar_color1/40 backdrop-blur-lg z-0 h-screen w-screen max-sm:min-h-screen p-20 max-sm:p-6 max-sm:py-24">
      <div className="dark:bg-ar_color1 bg-ar_neutral_alpha w-[50%] max-sm:w-[100%] m-auto p-24 max-sm:p-5 max-sm:py-10 text-center rounded-xl">
        <div className="w-[50%] m-auto">
          <img
            className="object-contain w-[250px]"
            src="https://img.icons8.com/external-flat-design-circle/250/external-Email-sent-seo-development-and-marketing-flat-design-circle.png"
            alt="external-Email-sent-seo-development-and-marketing-flat-design-circle"
          />
        </div>
        <p className="text-lg font-bold w-[70%] m-auto">
          I have received your Message, I will respond to you shortly.
        </p>
      </div>
    </div>
  );
}
