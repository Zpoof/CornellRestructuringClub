const MembersPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Members</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-center mb-8">
          Cornell Hedge Fund Club brings together talented students from across Cornell University who share a passion for finance and investing.
        </p>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Executive Board</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Executive Board Members - These would be actual members in the real site */}
          {[
            { name: "Jane Doe", position: "President", year: "Class of 2024" },
            { name: "John Smith", position: "Vice President", year: "Class of 2024" },
            { name: "Emily Johnson", position: "Treasurer", year: "Class of 2025" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-[#0F4C85]">{member.position}</p>
              <p className="text-sm text-gray-600">{member.year}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center">General Members</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* General Members - These would be actual members in the real site */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-3"></div>
              <h3 className="font-medium">Member Name</h3>
              <p className="text-sm text-gray-600">Class of 2025</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersPage;