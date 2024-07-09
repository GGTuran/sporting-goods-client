import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import AllProducts from "@/pages/AllProducts";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Contact from "@/pages/Contact";
import HomePage from "@/pages/HomePage";
import ManageProducts from "@/pages/ManageProducts";
import SIngleProduct from "@/pages/SIngleProduct";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                index: true,
                // path:'/home',
                element: <HomePage></HomePage>
            },
            {
                path: 'all-products',
                element: <AllProducts></AllProducts>
            },
            {
                path: 'about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'manage-products',
                element: <ManageProducts></ManageProducts>
            },
            {
                path: 'single-product',
                element: <SIngleProduct></SIngleProduct>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'checkout',
                element: <Checkout></Checkout>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
        ]
    }
]);

export default router;