import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Collections from "./components/Collections";
import SignIn from "./components/Signin";
import Bestseller from "./components/Bestseller";
import Whiskreach from "./components/Whiskreach";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collections" element={<Collections />} />
       

        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Bestseller" element={<Bestseller />} />
        <Route path="/Whiskreach" element={<Whiskreach />} />

        {/* <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
