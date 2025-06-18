import React from "react";
import HeroImage from "./Images/hero-image.jpg";

function ProductsSection() {
  const services = [
    {
      title: "Assurance",
      description:
        "Independent audits and reviews to ensure financial transparency and compliance.",
      icon: "🛡️", // Replace with your icon (or <Icon /> component)
    },
    {
      title: "Advisory",
      description:
        "Strategic financial guidance to optimize business performance and growth.",
      icon: "📈",
    },
    {
      title: "Accounting",
      description:
        "Comprehensive bookkeeping and financial reporting tailored to your needs.",
      icon: "📊",
    },
    {
      title: "Tax",
      description:
        "Expert tax planning and compliance to minimize liabilities and maximize savings.",
      icon: "💰",
    },
  ];

  return (
    <div className="">
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading & Description */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Audit And Accounting Services In Kenya
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond providing the best audit and accounting services in Kenya,
              our objectives are to build trust and enhance value for clients
              and stakeholders. Our services are grouped into four distinct
              service lines:
            </p>
          </div>

          {/* 4 Service Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="text-center">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2">
                    View All Services
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-[500px] text-center py-20 bg-red-300">
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Work With Us
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Fast, Friendly, and Satisfaction Guarantee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  Committed to Quality
                </h3>
              </div>
              <p className="text-gray-600">
                A strong & durable reputation are valuable assets every
                organization admires and we have achieved this by embedding
                quality in everything we do.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  A Wealth of Skills & Experience
                </h3>
              </div>
              <p className="text-gray-600">
                Our people have a firm grasp of business principles and
                processes needed to solve complex business problems, and build
                value, manage risk, and improve performance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  Creating Sustainable Value
                </h3>
              </div>
              <p className="text-gray-600">
                Developing and maintaining trust while creating wealth with the
                advice we give – being a trusted business advisor – is where we
                seek to differ from the competition.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                  <svg
                    className="h-6 w-6 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  Client Focused Approach
                </h3>
              </div>
              <p className="text-gray-600">
                We are defined and shaped by the way our clients like to work.
                Our depth and diversity mean we have the ability to meet their
                needs with the perfect team.
              </p>
            </div>

            {/* Card 5 - Additional */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  Fast 24-Hour Service
                </h3>
              </div>
              <p className="text-gray-600">
                Please look forward to your business experience. In order to
                ensure that you have a strong experience with your client, we're
                available around the clock.
              </p>
            </div>

            {/* Card 6 - Additional */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  100% Commitment-Free
                </h3>
              </div>
              <p className="text-gray-600">
                You can know if you are willing to do your own right to get
                started. This offers you a lot of interest compared to having
                you committed to this.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[500px] text-center py-20 bg-red-300">
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
    </div>
  );
}

export default ProductsSection;
