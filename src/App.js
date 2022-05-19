import React from "react";
import './App.css';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import ProductList from "./Pages/ProductList";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/:section" element={<ProductList/>} />
        <Route path="/:section/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
