import { React, useEffect } from "react";
import { connect } from 'react-redux';
import { loginSuccess } from './Core/Actions/userActions';
import { theme } from './theme.js';
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
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(props) {
  useEffect(() => {
    let activeUser = JSON.parse(localStorage.getItem('activeUser'));
    if (activeUser) {
      props.loginSuccess(activeUser);
    }
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/:section" element={<ProductList />} />
          <Route path="/:section/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderSuccessfull" element={<OrderSuccessfull />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    loginSuccess: (user) => dispatch(loginSuccess(user))
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);
