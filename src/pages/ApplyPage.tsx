import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ApplyPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Apply to Cornell Hedge Fund Club</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Application Process</h2>
          <p className="mb-4">
            Cornell Hedge Fund Club recruits new members at the beginning of each semester. Our application process consists of:
          </p>
          
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Online application submission</li>
            <li>Resume and transcript review</li>
            <li>First-round interview</li>
            <li>Final-round interview</li>
          </ol>
          
          <p className="mb-4">
            We look for candidates who demonstrate a strong interest in finance, analytical abilities, and a willingness to learn and contribute to our community.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Application Form</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block mb-2 font-medium">First Name</label>
                <Input id="firstName" placeholder="Enter your first name" />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block mb-2 font-medium">Last Name</label>
                <Input id="lastName" placeholder="Enter your last name" />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>
            
            <div>
              <label htmlFor="major" className="block mb-2 font-medium">Major</label>
              <Input id="major" placeholder="Enter your major" />
            </div>
            
            <div>
              <label htmlFor="graduationYear" className="block mb-2 font-medium">Expected Graduation Year</label>
              <Input id="graduationYear" placeholder="Enter your graduation year" />
            </div>
            
            <div>
              <label htmlFor="whyJoin" className="block mb-2 font-medium">Why do you want to join Cornell Hedge Fund Club?</label>
              <Textarea id="whyJoin" placeholder="Tell us why you're interested in joining" rows={4} />
            </div>
            
            <div>
              <label htmlFor="experience" className="block mb-2 font-medium">Relevant Experience</label>
              <Textarea id="experience" placeholder="Describe any relevant experience or coursework" rows={4} />
            </div>
            
            <div>
              <label htmlFor="resume" className="block mb-2 font-medium">Resume Upload</label>
              <Input id="resume" type="file" className="cursor-pointer" />
              <p className="text-sm text-gray-500 mt-1">Please upload your resume in PDF format</p>
            </div>
            
            <Button type="submit" className="bg-black text-white hover:bg-[#102E52] border-none rounded-none px-8 py-2">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;