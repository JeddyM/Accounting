import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import ProductsSection from "./ProductsSection";
import Footer from "./footer";

function App() {
  return (
    <div  className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> 
      <Navbar/>
      <Hero />
      <ProductsSection/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
