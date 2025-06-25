import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import UserContact from "./components/UserContact";
// import ImageCompressor from "./components/ImageCompressor";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<UserContact />} />
        {/* <Route path="/compressor" element={<ImageCompressor />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
