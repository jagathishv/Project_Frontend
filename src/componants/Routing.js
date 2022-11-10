import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../continer/Home";
import Login from "../continer/Login";
import Register from "../continer/Register";
import Contact from "../continer/Contact";
import About from "../continer/About"
import Cart from "../continer/Cart";
import Myorders from "../continer/My orders";
import UserProfile from "../continer/My profile"
import Privacy from "../continer/Privacy and policy";
import Terms from "../continer/Terms and condition";
import Quick from "../continer/Quick view";
import { CartProvider } from "react-use-cart";
import Adminlogin from "../Admin module/Admin Login";
import Mainpage from "../Admin module/Admin pages/Main page";
import Userslist from "../Admin module/Admin pages/Users List";
import Productslist from "../Admin module/Admin pages/Products List";
import Orderslist from "../Admin module/Admin pages/Orders List";
import Addproduct from "../Admin module/Admin pages/Add Product";
import Editproduct from "../Admin module/Admin pages/Edit Product";
import AOrdersinfo from "../Admin module/Admin pages/AOrder info";
import UOrdersinfo from "../continer/UOrder info";
import Success from "../continer/Success";


function Routing() {
    return (
        <CartProvider>
            <Routes>
                {/* user route */}
                <Route path={"/"} element={<Home />} />
                <Route path={"/cart"} element={<Cart />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/register"} element={<Register />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/success"} element={<Success />} />
                <Route path={"/pirvacy"} element={<Privacy />} />
                <Route path={"/terms"} element={<Terms />} />
                <Route path={"/quick/:id"} element={<Quick />} />
                <Route path={"/myprofile"} element={<UserProfile />} />
                <Route path={"/myorders"} element={<Myorders />} />
                {/* admin route */}
                <Route path={"/adminlogin"} element={<Adminlogin />} />
                <Route path={"/mainpage"} element={<Mainpage />} />
                <Route path={"/userslist"} element={<Userslist />} />
                <Route path={"/productslist"} element={<Productslist />} />
                <Route path={"/orderslist"} element={<Orderslist />} />
                <Route path={"/addproduct"} element={<Addproduct />} />
                <Route path={"/editproduct/:id"} element={<Editproduct />} />
                <Route path={"/uorderinfo"} element={<UOrdersinfo />} />
                <Route path={"/aorderinfo"} element={<AOrdersinfo />} />
            </Routes>
        </CartProvider>
    );
}

export default Routing;
