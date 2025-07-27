import React from "react";
import {Link} from "react-router-dom";


function Services() {
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
                className="flex flex-col items-center text-center  bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 ">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <div className="">
                 <Link to="/services">
                    <button className="px-3 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2">
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
                    </Link>          
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
