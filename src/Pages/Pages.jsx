import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/data/Common/Header";
import Home from "../Components/home/Home";
import Footer from "../Components/data/Common/Footer";
import About from "../Components/About/About";
import Services from "../Components/services/Services";
import Blog from "../Components/blog/Blog";
import Pricing from "../Components/pricing/Pricing";
import Contact from "../Components/contact/Contact";
const Pages = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Pages;
