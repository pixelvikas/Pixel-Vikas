import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Blogs from "./pages/Blog"
import Contactus from "./pages/Contactus"
import SingleBlog from "./pages/SingleBlog"
import SingleProject from "./pages/SingleProject"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/projects/:id" element={<SingleProject />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
