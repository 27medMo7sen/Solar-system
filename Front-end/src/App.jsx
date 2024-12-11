import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import React, { Fragment } from "react";
const Home = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));
// const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const Partnership = React.lazy(() => import("./pages/Partnership"));
const Categories = React.lazy(() => import("./pages/Categories"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
import { Authentication } from "./pages/Authentication";
import {ProductDetails} from './pages/ProductDetails'
import { action as authAction } from "./pages/Authentication";
import {
  Confirmation,
  loader as confirmationLoader,
} from "./pages/Confirmation";
import { ToastContainer } from "react-toastify";
import { action as logOutAction } from "./pages/Logout";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <Home />
            </React.Suspense>
          ),
        },
        {
          path: "products",
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <Products />
            </React.Suspense>
          ),
        },
        {
          path: "product-details/:name",
          element: (
              <ProductDetails />    
          ),
        },
        {
          path: "categories",
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <Categories />
            </React.Suspense>
          ),
        },
        {
          path: "partnership",
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <Partnership />
            </React.Suspense>
          ),
        },
        {
          path: "dashboard",
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <DashboardPage />
            </React.Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <AboutPage />
            </React.Suspense>
          ),
        },
        {
          path: "authentication",
          element: <Authentication />,
          action: authAction,
        },
        {
          path: "confirm/:token",
          element: <Confirmation />,
          loader: confirmationLoader,
        },
        {
          path: "logout",
          id: "logout",
          action: logOutAction,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

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
