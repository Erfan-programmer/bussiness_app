 
import { Routes, Route } from "react-router-dom";
import Home from "./components/layout/Home";
import About from "./components/layout/About";
import Blog from "./components/layout/Blog";
import Contact from "./components/layout/Contact";
import FAQ from "./components/layout/FAQ";
import Feature from "./components/layout/Feature";
import Offer from "./components/layout/Offer";
import Service from "./components/layout/Service";
import Team from "./components/layout/Team";
import Testimonial from "./components/layout/Tetimonial";
import NotFound from "./components/layout/404";

// Define a type for route configuration
type RouteConfig = {
  path: string;
  element: React.ReactElement;
};

// Create an array of route configurations
const routes: RouteConfig[] = [
  { path: "/", element: <Home /> },
  { path: "/*", element: <NotFound /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/feature", element: <Feature /> },
  { path: "/offer", element: <Offer /> },
  { path: "/service", element: <Service /> },
  { path: "/team", element: <Team /> },
  { path: "/testimonial", element: <Testimonial /> },
];

// Main app component
function RoutesContainer() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default RoutesContainer;
