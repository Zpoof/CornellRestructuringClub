import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logos/image12.png" alt="Cornell Restructuring Club" className="h-16 w-auto" />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="font-nav text-black hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link to="/what-we-do" className="font-nav text-black hover:text-gray-600 transition-colors">
              What We Do
            </Link>
            <Link to="/resources" className="font-nav text-black hover:text-gray-600 transition-colors">
              Resources
            </Link>
            <Link to="/apply" className="font-nav text-black hover:text-gray-600 transition-colors">
              Apply
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 