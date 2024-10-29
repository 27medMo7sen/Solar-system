import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { Fragment } from "react";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";

import Partnership from "./components/Partnership/Partnership";

import { Categories } from "./pages/Categories";

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

        path: "partnership",
        element: <Partnership />,
      },

        path: "categories",
        element: <Categories />,
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
