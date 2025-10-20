import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router";
import "./index.css";
import App from "./routes/App.jsx";
import ProjectsPage from "./routes/ProjectsPage.jsx";
import Provider from "./provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Provider>
  </StrictMode>
);
