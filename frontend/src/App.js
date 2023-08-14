import './App.css';
import Header from './component/layout/header/Header.js'
import { useEffect, useState } from "react";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './component/layout/footer/Footer.js'
import Home from './component/home/Home.js'
import ProductDetail from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search  from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails";
import axios from "axios";

import store from "./store";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
    console.log('Mishra ji stirpe data '+data.stripeApiKey)
  }

useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp></LoginSignUp>} />
        <Route exact path="/account" element={<Profile></Profile>} />
        <Route exact path="/me/update" element={<UpdateProfile></UpdateProfile>} />
        <Route exact path="/password/update" element={<UpdatePassword></UpdatePassword>} />
        <Route exact path="/password/forgot" element={<ForgotPassword></ForgotPassword>} />
        <Route exact path="/password/reset/:token" element={<ResetPassword></ResetPassword>} />
        <Route exact path="/password/reset/:token" element={<ResetPassword></ResetPassword>} />
        <Route exact path="/cart" element={<Cart></Cart>} />
        <Route exact path="/shipping" element={<Shipping></Shipping>} />
        <Route exact path="/order/confirm" element={<ConfirmOrder></ConfirmOrder>} />
        {/* <Route exact path="/process/payment" element={<Payment></Payment>} /> */}
        {/* <Route path="/account" element={<ProtectedRoute component={Profile} />} />must resolve */}
       
          <Route exact path="/process/payment" element={
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Payment />
            </Elements>
          }/>
           <Route exact path="/success" element={<OrderSuccess></OrderSuccess>} />
           <Route exact path="/orders" element={<MyOrders></MyOrders>} />
           <Route exact path="/order/:id" element={<OrderDetails></OrderDetails>} />
      </Routes>
      <Footer />
    </Router>
  );
 
};

export default App;
