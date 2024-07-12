import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import AllProducts from "@/pages/AllProducts";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import HomePage from "@/pages/HomePage";
import ManageProducts from "@/pages/ManageProducts";
import ProductDetail from "@/pages/ProductDetail";
import SuccessPage from "@/pages/SuccessPage";


import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement:<Error></Error>,
        children: [
            {
                index: true,
                // path:'/home',
                element: <HomePage></HomePage>
            },
            {
                path: 'products',
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
            {
                path:'product/:productId',
                element: <ProductDetail></ProductDetail>
            },
            {
                path: '/success',
                element: <SuccessPage></SuccessPage>
            }
        ]
    }
]);

export default router;