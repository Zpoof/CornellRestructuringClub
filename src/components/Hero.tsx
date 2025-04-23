import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source 
          src="https://video.wixstatic.com/video/94f024_e2a59c987a7c49ecb6c5c1bd878e4721/1080p/mp4/file.mp4" 
          type="video/mp4" 
        />
        {/* Fallback image if video fails to load */}
        <img 
          src="https://static.wixstatic.com/media/94f024_e2a59c987a7c49ecb6c5c1bd878e4721f000.jpg/v1/fill/w_1280,h_800,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/94f024_e2a59c987a7c49ecb6c5c1bd878e4721f000.jpg" 
          alt="Cornell Hedge Fund Background" 
          className="absolute top-0 left-0 w-full h-full object-cover" 
        />
      </video>
      
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <p className="text-lg md:text-xl mb-4 font-light">Cornell's Premier Investment and Finance Club</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">
          CORNELL HEDGE FUND CLUB
        </h1>
      </div>
    </div>
  );
};

export default Hero;