import React from "react";
import './App.css';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import ProductList from "./Pages/ProductList";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart"
import OrderSuccessfull from "./Pages/OrderSuccessfull";
import OrderHistory from './Pages/OrderHistory';
import Wishlist from "./Pages/Wishlist";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/:section" element={<ProductList/>} />
        <Route path="/:section/:id" element={<ProductDetail/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orderSuccessfull" element={<OrderSuccessfull/>} />
        <Route path="/orderHistory" element={<OrderHistory/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
