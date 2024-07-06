import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/Views/About.tsx";
import App from "./App.jsx";
import MainView from "./pages/Views/mainView.tsx";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<MainView />} />
          <Route path="about-me" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
