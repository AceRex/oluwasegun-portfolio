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
          <Route path="my-skill" element={<h1>Page is not done</h1>} />
          <Route path="my-project" element={<h1>Page is not done</h1>} />
          <Route path="work-experience" element={<h1>Page is not done</h1>} />
          <Route path="education" element={<h1>Page is not done</h1>} />
          <Route path="my-contact" element={<h1>Page is not done</h1>} />
          <Route path="leave-a-comment" element={<h1>Page is not done</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
