import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-6 md:px-12 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="https://static.wixstatic.com/media/818d2c_dc5349d89c2b4b08a0d3e36e481a4fb8~mv2.png/v1/crop/x_0,y_150,w_500,h_199/fill/w_233,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cornell_Hedge_Fund_Logo_FA23-removebg-preview.png" 
            alt="Cornell Hedge Fund Logo" 
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-[#102E52] hover:text-[#0F4C85] font-medium">
            Home
          </Link>
          <Link to="/what-we-do" className="text-[#102E52] hover:text-[#0F4C85] font-medium">
            What We Do
          </Link>
          <Link to="/members" className="text-[#102E52] hover:text-[#0F4C85] font-medium">
            Members
          </Link>
          <Link to="/resources" className="text-[#102E52] hover:text-[#0F4C85] font-medium">
            Resources
          </Link>
          <Link to="/gallery" className="text-[#102E52] hover:text-[#0F4C85] font-medium">
            Gallery
          </Link>
          <Link to="/apply" className="text-[#102E52] hover:text-[#0F4C85] font-medium">
            Apply
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#102E52]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-[#102E52] hover:text-[#0F4C85] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/what-we-do" 
              className="text-[#102E52] hover:text-[#0F4C85] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              What We Do
            </Link>
            <Link 
              to="/members" 
              className="text-[#102E52] hover:text-[#0F4C85] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Members
            </Link>
            <Link 
              to="/resources" 
              className="text-[#102E52] hover:text-[#0F4C85] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/gallery" 
              className="text-[#102E52] hover:text-[#0F4C85] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/apply" 
              className="text-[#102E52] hover:text-[#0F4C85] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;