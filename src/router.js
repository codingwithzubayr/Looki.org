import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./components/Login/Login";
import CheckLogin from "./components/Check/CheckLogin";
import RegisterPage from "./components/Register/Register";
import Admin from "./components/Admin";
import { AddToCart } from "./components/addToCart/AddToCart";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/addToCart",
    element: <AddToCart />,
  },
  {
    path: "/admin",
    element: (
      <>
        <Admin />
      </>
    ),
  },
  {
    path: "/checkLogin",
    element: <CheckLogin />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
