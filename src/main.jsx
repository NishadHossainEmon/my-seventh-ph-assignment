import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./component/Router";
import FriendContextProvider from "./component/FriendContextProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </FriendContextProvider>
  </StrictMode>,
);
