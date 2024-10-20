import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { Fragment } from "react";
import { Home } from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
