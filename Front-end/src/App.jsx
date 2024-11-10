import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { Fragment } from "react";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { Authentication } from "./pages/Authentication";
import Partnership from "./pages/Partnership";

import { Categories } from "./pages/Categories";
import DashboardPage from "./pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product-details/:name",
        element: <ProductDetails />,
      },
     
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "partnership",
        element: <Partnership />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "authentication",
        element: <Authentication />,
      }

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
