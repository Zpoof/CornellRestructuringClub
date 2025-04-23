import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Professional Development */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
          <div className="w-full h-px bg-[#0F4C85] mb-6 max-w-[200px]"></div>
          <p className="mb-6">
            Cornell Hedge Fund prepares our analysts for success in the finance 
            industry through our extensive resources and alumni network. Our 
            members are able to use the knowledge they've gained to become top 
            performers once they begin their internships and full-time careers.
          </p>
          <div className="mt-auto pt-4">
            <Link to="/placement">
              <Button variant="outline" className="bg-black text-white hover:bg-[#102E52] border-none rounded-none px-6">
                Placement
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Stock Pitches */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">Stock Pitches</h3>
          <div className="w-full h-px bg-[#0F4C85] mb-6 max-w-[200px]"></div>
          <p className="mb-6">
            Every semester, each of our funds pitches a stock to the entire club. 
            These stocks are then voted on by all members to decide if the stock 
            should be added to our portfolio. These pitches help members develop 
            their equity research skills and provide investment ideas for our portfolio.
          </p>
          <div className="mt-auto pt-4">
            <Link to="/what-we-do">
              <Button variant="outline" className="bg-black text-white hover:bg-[#102E52] border-none rounded-none px-6">
                Our Pitches
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Education */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="w-full h-px bg-[#0F4C85] mb-6 max-w-[200px]"></div>
          <p className="mb-6">
            Through our rigorous 10-week new member education process and 
            sophomore series, members strengthen their knowledge of financial 
            markets, modeling, and investing. Cornell Hedge Fund emphasizes 
            applicable skills to prepare its analysts for recruitment in various industries.
          </p>
          <div className="mt-auto pt-4">
            <Link to="/resources">
              <Button variant="outline" className="bg-black text-white hover:bg-[#102E52] border-none rounded-none px-6">
                Resources
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;