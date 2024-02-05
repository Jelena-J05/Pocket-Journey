import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/UserAccount/Login";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ShoppingCart from "./components/ShoppingCart";
/* import BookFlights from "./components/BookFlights"; */
import GlobalCommunityPage from "./components/GlobalCommunityPage";
import LayoutWithNavBar from "./components/LayoutWithNavbar";
import Register from "./components/UserAccount/Register";
import EditAccount from "./components/UserAccount/EditAccount";
import { UserProvider } from './UserContext'; // Importa UserProvider
import { CartProvider } from './CartContext'; // Importa il CartProvider

function App() {


  return (
      <BrowserRouter>
      <UserProvider> {/* Utilizza UserProvider qui */}
      <CartProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<LayoutWithNavBar/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/profile" element={<EditAccount />} />
          <Route path="/community" element={<GlobalCommunityPage />} />
          </Route>
        </Routes>
        </CartProvider>
        </UserProvider>
      </BrowserRouter>
  );
}

export default App;

