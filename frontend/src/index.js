import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import '@fortawesome/fontawesome-free/css/all.min.css';

import HomePage from "./landind_page/home/HomePage";
import Signup from "./landind_page/signup/Signup";
import Login from "./landind_page/signup/Login";  //  Import Login Page
import AboutPage from "./landind_page/about/AboutPage";
import ProductPage from "./landind_page/product/ProductPage";
import Investment from "./landind_page/product/Invesment";
import PricingPage from "./landind_page/pricing/PricingPage";
import SupportPage from "./landind_page/support/SupportPage";
import Navbar from "./landind_page/Navbar";
import Footer from "./landind_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />  {/*  Added Login Route */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/investments" element={<Investment />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
