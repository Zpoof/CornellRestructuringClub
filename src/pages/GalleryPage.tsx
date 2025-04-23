const GalleryPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-center mb-8">
          Explore photos from our events, meetings, and activities throughout the year.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Gallery images - These would be actual images in the real site */}
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="aspect-square bg-gray-200 hover:opacity-90 transition-opacity">
            {/* Placeholder for gallery images */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;