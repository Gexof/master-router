import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import HomePage from "../pages";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import RootLayout from "../pages/Layout";
import QuickStartPage from "../pages/learn";
import LearnLayout from "../pages/learn/Layout";
import ThinkingInReact from "../pages/learn/ThinkingInReact";
import Installation from "../pages/learn/Installation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>

      {/* Learn Layout */}

      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReact />} />
        <Route path="installation" element={<Installation />} />
      </Route>
    </>,
  ),
);

export default router;
