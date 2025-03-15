import Home from "../src/page/Home/Home.jsx";
import Intro from "../src/page/Home/Intro.jsx";

const homeRoutes = {
  path: "/",
  element: <Home />,
  children: [
    {
      path: "/",
      element: <Intro />,
    },
  ],
};

export default homeRoutes;
