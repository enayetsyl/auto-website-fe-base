import React from 'react';

const CallToAction = () => {
  return (
    <div className="py-16 bg-primary text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold">Ready to start your journey?</h2>
        <p className="mt-4 text-lg">
          Get in touch with us today to explore more about what we offer.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block bg-secondary text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-button transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
