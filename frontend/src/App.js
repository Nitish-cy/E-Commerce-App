import './App.css';
import Header from './component/layout/header/Header.js'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './component/layout/footer/Footer.js'
import Home from './component/home/Home.js'
import ProductDetail from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search  from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp></LoginSignUp>} />
      </Routes>
      <Footer />
    </Router>
  );
 
};

export default App;
