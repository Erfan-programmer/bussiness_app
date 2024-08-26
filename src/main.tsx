import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import "./styles/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
