import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile/Profile";
import Projects from "../pages/Projects/Projects";
import Home from "../pages/Home/Home";
import Project from "../pages/Project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "work",
        element: <Projects />,
      },
      {
        path: "work/:id",
        element: <Project />,
      },
    ],
  },
]);

export default router;
