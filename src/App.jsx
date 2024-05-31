import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Tours from "./pages/Tours.jsx";
import PageNotFound from "./ui/PageNotFound.jsx";
import Hero from "./ui/Hero.jsx";
import Settings from "./pages/Settings.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },

      {
        path: "/tours",
        element: <Tours />,
      },

      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
