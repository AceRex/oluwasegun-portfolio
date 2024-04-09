import React from "react";
import Hero from "./pages/Views/index.tsx";
import { useTheme } from "./UseContext/context.tsx";
import HireMe from "./components/modal/HireMeEmail.tsx";

export default function App() {
  const { hireMeModal } = useTheme();

  return (
    <div id="reader" className="dark:bg-ar_color1 bg-ar_neutral_alpha relative">
      <Hero />
      {hireMeModal && <HireMe />}
    </div>
  );
}
