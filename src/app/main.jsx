import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router";
import "./index.css";
import Provider from "./provider.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

import App from "./pages/App.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
      </Routes>
    </Provider>
  </StrictMode>
);
