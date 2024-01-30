import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ShoppingCart from "./components/ShoppingCart";
import BookFlights from "./components/BookFlights";
import BookTrains from "./components/BookTrains";
import BookHotels from "./components/BookHotels";
import BookRestaurants from "./components/BookRestaurants";
import BookExperiences from "./components/BookExperiences";
import GlobalCommunityPage from "./components/GlobalCommunityPage";
import LayoutWithNavBar from "./components/LayoutWithNavbar";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route element={<LayoutWithNavBar/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/flights" element={<BookFlights />} />
          <Route path="/trains" element={<BookTrains />} />
          <Route path="/hotels" element={<BookHotels />} />
          <Route path="/restaurants" element={<BookRestaurants />} />
          <Route path="/experiences" element={<BookExperiences />} />
          <Route path="/community" element={<GlobalCommunityPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

