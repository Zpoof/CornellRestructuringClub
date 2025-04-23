import { Link } from "react-router-dom";

const SocialSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Follow <span className="text-[#0F4C85]">@cornellhedgefund</span> on Instagram to stay updated!
        </h2>
        
        {/* Instagram Feed Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {/* This would typically be populated with actual Instagram posts */}
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item} 
              className="aspect-square bg-gray-200 hover:opacity-90 transition-opacity"
            >
              {/* Placeholder for Instagram images */}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/cornellhedgefund/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0F4C85] hover:underline font-medium"
          >
            View more on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;