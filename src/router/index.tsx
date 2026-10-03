import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import HomePage from "../pages";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import RootLayout from "../pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="about" element={<AboutPage />} />
    </Route>,
  ]),
);

export default router;
