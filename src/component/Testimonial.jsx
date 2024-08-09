import React from 'react';

const Testimonials = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-headerColor py-5">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="mt-4 text-base text-textColor">
              "This service was amazing! I couldn’t have asked for more."
            </p>
            <h3 className="mt-4 text-xl font-semibold text-headerColor">- Customer 1</h3>
          </div>
          <div className="text-center">
            <p className="mt-4 text-base text-textColor">
              "Highly recommend to anyone looking for great quality."
            </p>
            <h3 className="mt-4 text-xl font-semibold text-headerColor">- Customer 2</h3>
          </div>
          <div className="text-center">
            <p className="mt-4 text-base text-textColor">
              "Exceptional experience from start to finish!"
            </p>
            <h3 className="mt-4 text-xl font-semibold text-headerColor">- Customer 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
