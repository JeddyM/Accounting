import React from 'react';


const services = [
  {
    title: "Assurance",
    description:
      "Our Assurance services provide independent audits and reviews designed to give stakeholders confidence in your financial reporting. Whether you're a corporation, nonprofit, or small business, we help you meet statutory requirements, uncover financial discrepancies, and improve internal controls. Through our risk-based approach, we ensure your financials are accurate, transparent, and compliant with regulatory standards.",
  },
  {
    title: "Advisory",
    description:
      "We partner with you to provide forward-looking strategic advice that drives sustainable growth. Our Advisory services include financial planning, business restructuring, mergers & acquisitions, performance improvement, and risk management. We tailor our insights to your unique industry, helping you unlock hidden value, streamline operations, and make informed decisions that move your business forward with confidence.",
  },
  {
    title: "Accounting",
    description:
      "Stay focused on growing your business while we manage your books with precision and care. Our Accounting services cover daily bookkeeping, accounts payable/receivable, payroll processing, bank reconciliations, and the preparation of financial statements. We use industry-leading software to ensure your records are accurate, up-to-date, and ready for tax filing or financial planning. Whether you're a startup or an established company, we scale our support to meet your needs.",
  },
  {
    title: "Tax",
    description:
      "Navigating the complex world of taxes doesn’t have to be a burden. Our Tax services help you plan proactively, comply confidently, and save money legally. We offer tax planning and preparation for individuals and businesses, VAT and excise duty support, international tax advisory, and audit representation. With constant changes in tax laws, we stay ahead so you don’t have to. Let us help you minimize liabilities while maximizing your after-tax income.",
  },
];

function ServicesDetails() {
  return (
    
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Expert Services
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a comprehensive range of accounting and financial services tailored to help businesses thrive. Whether you're a small startup or an established enterprise, our team of experts is here to guide your financial decisions with clarity and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetails