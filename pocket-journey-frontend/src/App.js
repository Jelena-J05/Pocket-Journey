import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/flights" element={<BookFlights />} />
          <Route path="/trains" element={<BookTrains />} />
          <Route path="/hotels" element={<BookHotels />} />
          <Route path="/restaurants" element={<BookRestaurants />} />
          <Route path="/experiences" element={<BookExperiences />} />
          <Route path="/community" element={<GlobalCommunityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

