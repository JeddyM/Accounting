import React from 'react';
import HeroImage from "./Images/hero-image.jpg";

function Banner1() {
  return (
    <section className=" text-center py-20 bg-red-300">
        <div className="mx-auto max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content (Left) */}

            {/* Image (Right) */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
              <img
                src={HeroImage} // Replace with your image path
                alt="Event Community"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Turn Events into Communities
              </h1>
              <p className="text-lg md:text-xl mb-8">
                You can run the entire event, from talks to coffee break,
                networking and afterparty. Then your community can live on past
                the initial events.
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Signup for Beta
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Banner1