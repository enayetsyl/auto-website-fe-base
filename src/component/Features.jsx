import React from 'react';

const Features = () => {
  return (
    <div className="mt-52 py-16 bg-backgroundColor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-headerColor">Our Features</h2>
          <p className="mt-4 text-lg text-textColor">Explore what we have to offer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <i className="fas fa-mountain"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-headerColor">Feature 1</h3>
            <p className="mt-2 text-base text-textColor">Description of Feature 1.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <i className="fas fa-globe"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-headerColor">Feature 2</h3>
            <p className="mt-2 text-base text-textColor">Description of Feature 2.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <i className="fas fa-hiking"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-headerColor">Feature 3</h3>
            <p className="mt-2 text-base text-textColor">Description of Feature 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
