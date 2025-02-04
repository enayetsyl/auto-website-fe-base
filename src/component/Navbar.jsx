import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-headerColor shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
          <img src="https://t3.ftcdn.net/jpg/07/20/39/04/360_F_720390490_exwc0Qw8OkOA0U5tqzhof1afEA4sZKZR.jpg" alt="" className="h-12 w-20"/>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-textColor hover:text-button px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-textColor hover:text-button px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-textColor hover:text-button px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
