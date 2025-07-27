import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Hero from "./hero";
import Services from "./Services";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Workwithus from "./Workwithus";
import Footer from "./footer";
import ServicesDetails from "./ServicesDetails";
import "./App.css";

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Services />
              <Banner1 />
              <Workwithus />
              <Banner2 />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <ServicesDetails />
              <Footer/>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

//  <div  className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
