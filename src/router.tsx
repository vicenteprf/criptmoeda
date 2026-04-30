import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Detail } from "./pages/detail/detail";
import { NotFound } from "./pages/notfound/notFaound";
import { Layout } from "./components/layout/layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:cripto",
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
