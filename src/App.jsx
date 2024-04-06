import React from "react";
import Hero from "./pages/Views/index.tsx";
import { ThemeProvider } from "./UseContext/context.tsx";

export default function App() {
 
  return (
    <ThemeProvider>
      <div id="reader" className="dark:bg-ar_color1 bg-ar_neutral_alpha">
        <Hero />
      </div>
    </ThemeProvider>
  );
}
