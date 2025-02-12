import React from 'react';

const Hero = ({heroHeading, heroText, heroImage}) => {
  return (
    <div className="relative bg-primary ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(70%)',
          height: '90vh'
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-headerColor">
          {heroHeading}
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-textColor">
          {heroText}
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block bg-button text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-secondary transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
