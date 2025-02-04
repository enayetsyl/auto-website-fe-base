
const AboutUs = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-extrabold text-headerColor">About Us</h2>
            <p className="mt-4 text-lg text-textColor">
              Learn more about our journey, our mission, and the values that drive us.
            </p>
            <p className="mt-4 text-base text-textColor">
              We believe in delivering the best experiences for our customers by focusing on quality,
              innovation, and integrity.
            </p>
          </div>
          <div>
            <img
              src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
