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
            <h3 className="mt-4 text-xl font-semibold text-headerColor">Best Hotel</h3>
            <p className="mt-2 text-base text-textColor">You will get best hotels for staying during your visit. You get all the comforts in our hotel. All the amenities are included in the package.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <i className="fas fa-globe"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-headerColor">Car Service</h3>
            <p className="mt-2 text-base text-textColor">We have a pool of cars. All the cars are brand new and comfortable. The price are reasonable.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <i className="fas fa-hiking"></i>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-headerColor">Guide Service</h3>
            <p className="mt-2 text-base text-textColor">We have experience guide available who can show you all the interesting places within a short time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
