import { Button } from "@/components/ui/button";

const ResourcesPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Resources</h1>
      
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Educational Materials</h2>
          <p className="mb-6">
            Cornell Hedge Fund Club provides members with access to a comprehensive library of educational resources to support their learning and development in finance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-6 rounded-md">
              <h3 className="text-xl font-medium mb-3">Financial Modeling</h3>
              <p className="mb-4">Learn how to build comprehensive financial models for valuation and analysis.</p>
              <Button variant="outline" className="bg-black text-white hover:bg-[#102E52] border-none rounded-none">
                Access Resources
              </Button>
            </div>
            
            <div className="border p-6 rounded-md">
              <h3 className="text-xl font-medium mb-3">Valuation Techniques</h3>
              <p className="mb-4">Master various approaches to company valuation including DCF, comparable company analysis, and more.</p>
              <Button variant="outline" className="bg-black text-white hover:bg-[#102E52] border-none rounded-none">
                Access Resources
              </Button>
            </div>
            
            <div className="border p-6 rounded-md">
              <h3 className="text-xl font-medium mb-3">Industry Analysis</h3>
              <p className="mb-4">Learn frameworks for analyzing different industries and their competitive dynamics.</p>
              <Button variant="outline" className="bg-black text-white hover:bg-[#102E52] border-none rounded-none">
                Access Resources
              </Button>
            </div>
            
            <div className="border p-6 rounded-md">
              <h3 className="text-xl font-medium mb-3">Investment Strategies</h3>
              <p className="mb-4">Explore various investment approaches and portfolio management techniques.</p>
              <Button variant="outline" className="bg-black text-white hover:bg-[#102E52] border-none rounded-none">
                Access Resources
              </Button>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Career Resources</h2>
          <p className="mb-6">
            We provide members with resources to help them prepare for and succeed in finance industry recruitment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-6 rounded-md">
              <h3 className="text-xl font-medium mb-3">Resume Workshop</h3>
              <p className="mb-4">Guidelines and templates for creating finance industry resumes.</p>
              <Button variant="outline" className="bg-black text-white hover:bg-[#102E52] border-none rounded-none">
                Access Resources
              </Button>
            </div>
            
            <div className="border p-6 rounded-md">
              <h3 className="text-xl font-medium mb-3">Interview Preparation</h3>
              <p className="mb-4">Common interview questions and preparation strategies for finance roles.</p>
              <Button variant="outline" className="bg-black text-white hover:bg-[#102E52] border-none rounded-none">
                Access Resources
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;