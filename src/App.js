import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Proudcts from "./Components/Proudcts/Proudcts";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import About from "./Components/About/About";
import Categories from "./Components/Categories/Categories";
import NotFound from "./Components/NotFound/NotFound";
import Brands from "./Components/Brands/Brands";
import Proudctdetails from "./Components/Proudctdetails/Proudctdetails";
import categorySlider from "./Components/categorySlider/categorySlider";
import toast, { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import ProutectedRoute from "./Components/ProutectedRoute/ProutectedRoute";
import Mainslider from "./Components/Mainslider/Mainslider";
import { CartContextProvider } from "./Context/CartContext";
import BrandsDetails from "./Components/BrandsDetails/BrandsDetails";
import CategoryDetails from "./Components/CategoyrDetails/CategoyrDetails";

function App() {
  const [userData, setuserData] = useState(null);

  function saveUserData() {
    let encodedTokin = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedTokin);
    setuserData(decodedToken);
  }

  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout userData={userData} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "categories",
          element: (
            <ProutectedRoute>
              <Categories />
            </ProutectedRoute>
          ),
        },
        {
          path: "CategoryDetails",
          element: <CategoryDetails/>,
        },
        {
          path: "categorySlider",
          element: (
            <ProutectedRoute>
              <categorySlider />
            </ProutectedRoute>
          ),
        },
        {
          path: "Mainslider",
          element: (
            <ProutectedRoute>
              <Mainslider />
            </ProutectedRoute>
          ),
        },
        {
          path: "proudcts",
          element: <Proudcts />,
        },
        {
          path: "Proudctdetails",
          element: <Proudctdetails />,
        },

        {
          path: "about",
          element: <About />,
        },
        {
          path: "cart",
          element: (
            <ProutectedRoute>
              <Cart />
            </ProutectedRoute>
          ),
        },
        {
          path: "brands",
          element: <Brands />,
        },
        {
          path: "brands/BrandsDetails",
          element: <BrandsDetails />,
        },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <CartContextProvider>
      <Toaster />
      <RouterProvider router={routers}></RouterProvider>;
    </CartContextProvider>
  );
}

export default App;
