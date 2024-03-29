import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./AddCoffee.jsx";
import UpdateCoffee from "./UpdateCoffee.jsx";
import View from "./View.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import Users from "./Users.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () =>
      fetch(
        "https://coffee-store-server-ez6apvq1b-ammars-projects-dc5c7534.vercel.app/coffees"
      ),
  },
  {
    path: "/addcoffee",

    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-ez6apvq1b-ammars-projects-dc5c7534.vercel.app/coffee/${params.id}`
      ),
  },
  {
    path: "/view/:id",
    element: <View></View>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-ez6apvq1b-ammars-projects-dc5c7534.vercel.app/coffee/${params.id}`
      ),
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },

  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () =>
      fetch(
        "https://coffee-store-server-ez6apvq1b-ammars-projects-dc5c7534.vercel.app/users"
      ),
  },
  {
    path: "/user/:id",
    element: <Users></Users>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-ez6apvq1b-ammars-projects-dc5c7534.vercel.app/user/${params.id}`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
