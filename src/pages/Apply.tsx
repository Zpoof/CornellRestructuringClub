import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cornell-red"
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Subscribe
        </button>
      </form>
      {status === "sending" && (
        <div className="text-blue-500 mt-2">Sending...</div>
      )}
      {status === "error" && (
        <div className="text-red-500 mt-2" dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status === "success" && (
        <div className="text-green-500 mt-2">Subscribed!</div>
      )}
    </div>
  );
};

const Apply = () => {
  const MAILCHIMP_URL = "YOUR_MAILCHIMP_URL"; // You'll need to replace this

  return (
    <div className="min-h-screen">
      {/* Hero Section with Apply Text */}
      <div className="bg-sky-100 py-24">
        <h1 className="text-4xl font-semibold text-center mt-20">Apply</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Two Column Layout for Eligibility and Timeline */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Eligibility Column */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-center font-semibold mb-4">Eligibility</h2>
            <ul className="space-y-3 text-gray-600">
              <p>
              Cornell Restructuring Club will be taking it's inaugural new member class for the Fall 2025 semester. Recruitment is limited to Rising Sophomores in the 2024-2025 academic year, and strong preference will be given to students that have completed a new member education program from the Cornell Financial Analysts, Cornell Alpha Fund, Cornell Hedge Fund, Cornell Investment Banking Club, Cornell Finance Club, BlackGen Capital, or Banking at Cornell. Cornell Restructuring Club is looking to admit students interested in pursuing Restructuring Investment Banking roles. For students not selected for the program, all powerpoints and educational content covered in the education program are publicly available on our website.
              </p>
            </ul>
          </div>

          {/* Timeline Column */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-center font-semibold mb-4">Timeline</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <p>
                Our recruitment process is intentionally informal and places less emphasis on technical questions than other undergraduate finance organizations. Instead, we look for candidates who demonstrate a strong work ethic, genuine curiosity about restructuring, and compelling, diverse backgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-center font-semibold mb-6">Application Form</h2>
          <div className="aspect-[4/3] w-full">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeDHgSmI9m9dx-jSWC3jVPGNpMd6x5LTC6kJllsFzSRHDU2Bg/viewform?usp=header"
              className="w-full h-full"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
        </div>

        {/* Mailing List Section - Centered Below */}
        <div className="max-w-2xl mx-auto text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Join our Mailing List</h2>
          <p className="text-gray-600 mb-6">
            Stay updated on recruitment timelines and club events.
          </p>
          <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Apply; 