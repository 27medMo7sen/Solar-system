import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { Fragment } from "react";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { Authentication } from "./pages/Authentication";
import Partnership from "./pages/Partnership";
import { action as authAction } from "./pages/Authentication";
import { Categories } from "./pages/Categories";
import DashboardPage from "./pages/DashboardPage";
import { Confirmation, loader as confirmationLoader } from "./pages/Confirmation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        action: authAction,
      },
      {
        path:"confirm/:token",
        element:<Confirmation/>,
        loader: confirmationLoader
      }

    ],
  },
]);
function App() {
  return (
    <Fragment>
       <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
