import React from "react";
import HeroImage from "./Images/hero-image.jpg";

function Hero() {
  return (
    <section className="h-[500px] text-center py-20 bg-red-300">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content (Left) */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simplifying Finances. Empowering Growth.
            </h1>
            <p className="text-lg md:text-xl mb-8">
              From bookkeeping and tax preparation to strategic financial
              advice, we help businesses stay compliant, save time, and make
              smarter financial decisions. Your success is our business.
            </p>

            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Learn More
            </button>
          </div>

          {/* Image (Right) */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
            <img
              src={HeroImage} // Replace with your image path
              alt="Event Community"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
