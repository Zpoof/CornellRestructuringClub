const WhatWeDoPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">What We Do</h1>
      
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            Cornell Hedge Fund Club is dedicated to preparing our members for successful careers in finance through comprehensive education, practical experience, and professional networking opportunities.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Investment Strategy</h2>
          <p className="mb-4">
            Our club manages a virtual portfolio where members research, analyze, and pitch investment ideas. We focus on fundamental analysis and value investing principles to identify undervalued securities with strong growth potential.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Educational Programs</h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">New Member Education</h3>
            <p>
              Our 10-week program provides new members with a solid foundation in accounting, valuation, and financial modeling. This intensive training prepares members for both club activities and finance industry recruitment.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Sophomore Series</h3>
            <p>
              Building on the fundamentals, our sophomore series delves deeper into advanced financial concepts, specialized investment strategies, and sector-specific analysis techniques.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatWeDoPage;