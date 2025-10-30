import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductAll from "./page/ProductAll.jsx";
import LoginPage from "./page/LoginPage.jsx";
import PrivateRoute from "./route/PrivateRoute.jsx";
import HomePage from "./page/HomePage.jsx";


function Main() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(()=> {
    console.log("인증", authenticate);
  },[authenticate]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <ProductAll /> },
        { path: "/login", 
          element: <LoginPage  setAuthenticate={setAuthenticate}/> },
        { path: "products/:id", element: <PrivateRoute authenticate={authenticate} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(<Main />);
